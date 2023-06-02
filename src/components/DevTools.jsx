
import jsonData from '../data/dev-tools.json';


export default function DevTools() {

    return (

       
        <div className=''>
          
            <div className="relative font-google flex-col flex items-center flex-wrap px-20">
                <p className="relative text-purple md:text-4xl text-2xl font-bold">My Toolbox & Things I Can Do</p>
                <p className='pt-2 pb-4'>The skills, tools and technologies I use bringing products to life. </p>
            </div>

            <div className='relative flex flex-wrap items-center justify-center mt-12 px-20' >
            {jsonData.map((dev) => (
            <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center flex-col text-purple/40" key={dev.name}>  
                <i className={`${dev.icon} text-xl md:text-5xl`}></i>
                <h2>{dev.name}</h2>
            </div>
            ))}
            </div>
           


           
        </div>
    
    )

}