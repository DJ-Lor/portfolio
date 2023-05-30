
export default function Introduction() {


    return (

        <div>
            <nav className="px-3 sm:px4">
                {/* Navigation Container */}
                <div className="w-full mx-auto flex wrap items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center cursor-pointer">
                        <img className="mr-5 h-6 sm:h-9" src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-before-2.jpg" alt="temp" />
                    </a>

                     {/* Mobile Menu Bar */}
                     <button type="button" className="md:hidden ml-3 inline-flex items-center rounded-lg p-2 text-purple
                      hover: bg-light-blue">

                        <span className="sr-only">Mobile Menu</span>
                        {/* SVG Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-none">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                      </button>

                     {/* Navigation Item Menu */}
                     <div className="hidden md:block m:w-auto">
                        <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                            
                            <li>
                                <a href="/" className="block cursor-pointer py-4 px-2 text-xs uppercase leading-6 tracking-widest text-black hover:text-purple"> 
                                About 
                                </a>
                            </li>

                            <li>
                                <a href="/" className="block cursor-pointer py-4 px-2 text-xs uppercase leading-6 tracking-widest text-black hover:text-purple"> 
                                Projects
                                </a>
                            </li>

                            <li>
                                <a href="/" className="block cursor-pointer py-4 px-2 text-xs uppercase leading-6 tracking-widest text-black hover:text-purple"> 
                                Contact 
                                </a>
                            </li>



                        </ul>
                     </div>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden mt-8">
                    <div className="space-y-1 px-2 pb-3">
                        <a href="/" className="hover:bg-purple bg-black uppercase block rounded-md px3 py-2 font-medium text-white text-center">About</a>
                        <a href="/" className="hover:bg-purple bg-black  uppercase block rounded-md px3 py-2 font-medium text-white text-center">Projects</a>
                        <a href="/" className="hover:bg-purple  bg-black  uppercase block rounded-md px3 py-2 font-medium text-white text-center">Contact</a>
                    </div>

                </div>

            </nav>

        </div>

    )
}