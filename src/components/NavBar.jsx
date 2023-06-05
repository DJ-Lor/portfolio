import { useState } from "react"
import Button from "./Button";
import { Link } from "react-router-dom";


export default function NavBar() {

    const [hamburger, setHamburger] = useState('menu');
    const [toggleDropDown, setToggleDropDown] = useState(false);

    function onToggleMenu() {
        if (hamburger === 'menu') {
            setHamburger('close')
            setToggleDropDown(true)
        } else {
            setHamburger('menu')
            setToggleDropDown(false)
        }
    }

    return (

        <div className="h-64 w-full">
        <div className="font-google text-xl mt-10">
            <header className="bg-white">
            <nav className="py-4 sm:px4">
                {/* Navigation Container */}
                <div className="w-[90%] mx-auto flex wrap items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center cursor-pointer">
                        <Button></Button>
                    </a>

                {/* Mobile Menu Bar */}
                <button type="button" className="md:hidden">
                <ion-icon onClick={onToggleMenu} name={hamburger} className='text-3xl cursor-pointer md:hidden'></ion-icon>
                </button>
 

                {/* Navigation Item Menu */}
                <div className={`duration-400 md:static absolute md:bg-white bg-purple/30 md:min-h-fit min-h-[20vh] left-0 ${toggleDropDown ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex item-center px-8 py-6`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6">
                            <li>
                                <Link to="/about" className="uppercase text-black hover:underline"> 
                                About 
                                </Link>
                            </li>

                            <li>
                                <Link to="/projects" className="uppercase text-black hover:underline"> 
                                Projects
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="uppercase text-black hover:underline"> 
                                Contact 
                                </Link>
                            </li>
                        </ul>
                     </div>
                </div>
                    
            </nav>
            </header>

        </div>
        </div>

    )
}