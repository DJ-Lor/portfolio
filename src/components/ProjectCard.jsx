
import Button from "./Button"

export default function ProjectCard({id, category, name, type, desc, stack, repo, url, img}) {


    return (

        <div>
                <a 
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border:purple dark:border-white rounded-md overflow-hidden"
                    >
                        <img
                            src={img}
                            alt="portfolio" 
                            className="w-full h-36 md:h-96 cursor-pointer"
                        />
                        <div className="w-full p-4">
                            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{category}</h3>
                            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{name}</h3>
                            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{type}</h3>
                            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                            {stack.map(item => (
                                <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                    {item}
                                </span>
                            ))}
                            </p>
                            <p>{desc}</p>
                            <span>
                            <Button onClick={repo}>Source Code</Button>
                            <Button onClick={url}>Live</Button>
                            </span>
                        </div>
                    </a>


        </div>
    )
}