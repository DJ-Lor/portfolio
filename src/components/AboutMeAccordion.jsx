import { useState } from "react"
import jsonData from '../data/accordion-data.json';


export default function Accordion() {

    const [selected, setSelected] = useState(null)
  
    const content = 'bg-floral-white max-h-0 overflow-hidden transition-all duration-500'
    const contentShow = 'h-auto max-h-[9999px] transition-all duration-500'

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        } 
        setSelected(i)
    }

    return (
        <div className="wrapper flex justify-center items-center mb-24">
          <div className="accordion w-500">
            {jsonData.map((items, i) => (
              items.render === "paragraph" ? (
                <div className="item bg-floral-white mb-1 px-10 py-8">
                  <div className="title cursor-pointer text-black flex justify-between items-center" onClick={() => toggle(i)}>
                    <p className="text-xl md:text-2xl font-bold">{items.title}</p>
                    <span> {`${selected === i ? '-' : '+'}`} </span>
                  </div>
                  <div className={selected === i ? contentShow : content}>
                    <div>
                      <img src={items.img} alt="description" />
                    </div>
                    {items.midRender === "true" ? (
                      <>
                        <div className="text-md md:text-xl text-purple font-bold pt-4 pb-2">{items.intro}</div>
                        <div className="text-sm md:text-l py-2">{items.block1}</div>
                        <div className="md:grid md:grid-cols-2">
                            <div className="text-sm md:text-l pr-8 pt-6">{items.block2}</div>
                            <div className="text-sm md:text-l pr-8 pt-6">{items.block3}</div>
                            <div className="text-sm md:text-l pr-8 pt-6">{items.block4}</div>
                            <div className="text-sm md:text-l pr-8 pt-6">{items.block5}</div>
                        </div>
                        <div className="text-sm md:text-l py-8">{items.block6}</div>
                      </>
                    ) : (
                      <>
                        <div className="text-md md:text-xl text-purple font-bold pt-4 pb-2">{items.intro}</div>
                        <div className="text-sm md:text-l py-2">{items.block1}</div>
                        <div className="text-sm md:text-l py-2">{items.block2}</div>
                        <div className="text-sm md:text-l py-2">{items.block3}</div>
                        <div className="text-sm md:text-l py-2">{items.block4}</div>
                        <div className="text-sm md:text-l py-2">{items.block5}</div>
                        <div className="text-sm md:text-l py-2">{items.block6}</div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="item bg-floral-white mb-1 px-10 py-8">
                  <div className="title cursor-pointer text-black flex justify-between items-center" onClick={() => toggle(i)}>
                    <p className="text-xl md:text-2xl font-bold">{items.title}</p>
                    <span> {`${selected === i ? '-' : '+'}`} </span>
                  </div>
                  <div className={selected === i ? contentShow : content}>
                    <div>
                      <img src={items.img} alt="description" />
                    </div>
                    <div className="text-md md:text-xl text-purple font-bold pt-4 pb-2">{items.intro}</div>
                    <div className="md:grid md:grid-cols-2">
                      <div className="text-sm md:text-l pr-8 pt-6">{items.block1}</div>
                      <div className="text-sm md:text-l pr-8 pt-6">{items.block2}</div>
                      <div className="text-sm md:text-l pr-8 pt-6">{items.block3}</div>
                      <div className="text-sm md:text-l pr-8 pt-6">{items.block4}</div>
                      <div className="text-sm md:text-l pr-8 pt-6">{items.block5}</div>
                      <div className="text-sm md:text-l pr-8 pt-6">{items.block6}</div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      );
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