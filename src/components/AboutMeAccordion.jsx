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
            title: "About Me",
            intro: "Hello, I'm Loreli!",
            answer1: "I am a junior full stack developer and an experienced digital marketer from Sydney, Australia.",
            answer2: "I started my career in digital marketing and ran branding and performance driven campaigns in the past 10 years. Through out my career, I worked closely with development teams on projects and always found it fascinating to see tech and digital experiences as a whole created from the ground up. Fast forward to today, I took the big leap into software development as a late career changer and highly enjoying the challenge!",
            answer3: "Outside my professional hat, I am a wife and mum to a beautiful baby girl (now almost 2 years old!) and two fur babies. Our family live an active lifestyle and enjoy the sea, surf, and sand that the land down under has to offer!👨‍👩‍👧☀️🏄‍♀️🐶",
            img: "/src/docs/profile-img.jpeg",
            
        },
        {
            title: 'Life As A Dev',
            answer: "xxfsjfkjsalfjlax"
          
        },
        {
            title: '(FUN) Facts',
            answer: "xxxfsjfgjalsfjlanjflanf"
        },
    
    ]

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