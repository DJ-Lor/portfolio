import { useState } from "react"

export default function Accordion() {

    const [selected, setSelected] = useState(null)
  
    const content = 'bg-purple max-h-0 overflow-hidden transition-all duration-500'
    const contentShow = 'h-auto max-h-[9999px] transition-all duration-500'

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        } 
        setSelected(i)
    }

    
    const data = [
        {
            question: 'Q1ddwdwdw',
            answer: "xxxfsajflajsflasjfljfa"
        },
        {
            question: 'Q1ddwdwd',
            answer: "xxfsjfkjsalfjlax"
        },
        {
            question: 'Q1',
            answer: "xxxfsjfgjalsfjlanjflanf"
        },
    
    ]

    return(

        <div className="wrapper flex h-screen w-screen justify-center items-center">
            <div className="accordion w-500">
                {data.map((items, i) => (
                    <div className="item bg-purple mb-1 px-10 py-20">
                        <div className="title cursor-pointer text-floral-white flex justify-between items-center" onClick={() => toggle(i)}>
                            <h2>{items.question}</h2>
                            <span> {`${selected === i ? '-' : '+'}`} </span>
                        </div>
                        <div className={ selected === i ? contentShow : content}>{items.answer}</div>
                    </div> 
                ))}

            </div>

        </div>

    )
}




// .content {
//     max-height: 0;
//     overflow: hidden;
//     transition: all 0.5s cubic-bezier(0,1,0,1);
// }

// .content.show {
//     height: AuthenticatorAssertionResponse;
//     max-height: 9999;
//     transition: all 0.5s cubic-bezier(1,0,1,0);
// }