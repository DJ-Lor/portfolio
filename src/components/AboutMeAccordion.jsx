import { useState } from "react"
import FunFactBox from "./FunFactsBox"

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



    return(

        <div className="font-google wrapper flex h-screen w-[82%] justify-center items-center">
            <div className="accordion w-500">
                {data.map((items, i) => (
                    <div className="item bg-floral-white mb-1 px-10 py-8">
                        <div className="title cursor-pointer text-black flex justify-between items-center" onClick={() => toggle(i)}>
                            <p className="text-xl md:text-2xl font-bold">{items.title}</p>
                            <span> {`${selected === i ? '-' : '+'}`} </span>
                        </div>
                        <div className={ selected === i ? contentShow : content}>
                            <div>
                                <img src={items.img} alt="description" />
                            </div>    
                            <div className="text-md md:text-xl text-purple font-bold pt-4 pb-2"> {items.intro} </div>
                            <div className="text-sm md:text-l py-2"> {items.answer1} </div>
                            <div className="text-sm md:text-l py-2"> {items.answer2} </div>
                            <div className="text-sm md:text-l py-2"> {items.answer3} </div>
                            <div className="text-sm md:text-l py-2"> {items.answer4} </div>
                            <div className="text-sm md:text-l py-2"> {items.answer5} </div>
                            <div className="text-sm md:text-l py-2"> {items.answer6} </div>
                            <div className="grid grid-cols-2 space-x-8 space-y-8">
                                <FunFactBox>{items.fact1} </FunFactBox>      
                                <FunFactBox>{items.fact2} </FunFactBox>  
                                <FunFactBox>{items.fact3} </FunFactBox>      
                                <FunFactBox>{items.fact4} </FunFactBox>  
                                <FunFactBox>{items.fact5} </FunFactBox>      
                                <FunFactBox>{items.fact6} </FunFactBox>       
                            </div>
                        </div>
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