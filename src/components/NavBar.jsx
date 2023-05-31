import { useState } from "react"

export default function NavBar() {

    const [hamburger, setHamburger] = useState('menu');
    const [toggleDropDown, setToggleDropDown] = useState(-100);

    function onToggleMenu() {
        if (hamburger === 'menu') {
            setHamburger('close')
            setToggleDropDown(9)
        } else {
            setHamburger('menu')
            setToggleDropDown(-100)
        }
    }


    return (

        <div>
            <header className="bg-white">
            <nav className="px-3 sm:px4">
                {/* Navigation Container */}
                <div className="w-[92%] mx-auto flex wrap items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center cursor-pointer">
                        <img className="mr-5 h-6 sm:h-9" src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-before-2.jpg" alt="temp" />
                    </a>

                {/* Mobile Menu Bar */}
                <button type="button" className="md:hidden">
                <ion-icon onClick={onToggleMenu} name={hamburger} className='text-3xl cursor-pointer md:hidden'></ion-icon>
                </button>
 

                {/* Navigation Item Menu */}
                <div className={`duration-200 md:static absolute md:bg-white bg-purple/30 md:min-h-fit min-h-[20vh] left-0 top-[${toggleDropDown}%] md:w-auto w-full flex item-center px-8 py-6`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6">
                        {/* <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                             */}
                            <li>
                                <a href="/" className="uppercase text-black hover:text-light-blue"> 
                                About 
                                </a>
                            </li>

                            <li>
                                <a href="/" className="uppercase text-black hover:text-light-blue"> 
                                Projects
                                </a>
                            </li>

                            <li>
                                <a href="/" className="uppercase text-black hover:text-light-blue"> 
                                Contact 
                                </a>
                            </li>
                        </ul>
                     </div>
                </div>
                    
            </nav>
            </header>

        </div>
       

    )
}