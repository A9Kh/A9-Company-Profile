import a9Logo from "assets/A9-primary.png"
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom';
import "components/Navbar2.css";
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react";
import { MdClose } from "react-icons/md"

let links = [
    { name: 'About Us', to: '/', dropdown: [{ name: "Company Overview", to: "/" }, { name: "About A9", to: "/abouta9" }] },
    { name: 'What We Do', to: '/whatwedo' },
    { name: 'Careers', to: '/careers' },
    { name: 'Investor Resources', to: '/investorresources' },
    { name: 'Contact Us', to: '/contactus' },
];

const Navbar2 = () => {
    const location = useLocation();
    const [drawer, setDrawer] = useState(false)
    const [pageTitle, setPageTitle] = useState("About Us")

    return (
        <nav>
            <div className="flex justify-between items-center py-1 px-3 sm:py-2 sm:px-5 md:py-3 md:px-7 lg:px-10">
                <img src={a9Logo} alt="" className="w-32 sm:w-36 md:w-44 lg:w-48 object-contain" />
                <div className="flex items-center">
                    <span className="hidden sm:inline-block sm:text-lg md:text-xl lg:text-2xl text-primary-300 -mt-1">Follow Us:</span>
                    <Link to=""><FaFacebookSquare className="text-3xl sm:text-4xl sm:ml-3 md:ml-4 lg:ml-5 text-primary-300" /></Link>
                    <Link to=""><FaInstagram className="text-3xl ml-2 sm:text-4xl sm:ml-3 md:ml-4 lg:ml-5 text-primary-300" /></Link>
                    <Link to=""><FaYoutube className="text-3xl ml-2 sm:text-4xl sm:ml-3 md:ml-4 lg:ml-5 text-primary-300" /></Link>
                </div>
            </div>

            {/* Desktop navbar */}
            <div className="hidden lg:block">
                <div className="bg-primary-300">
                    <div className="container mx-auto flex">
                        {links.map((link, k) => (
                            <Link key={k} to={link.to} id="nav-link" className={`relative flex-1 hover:bg-primary-200 active:bg-primary-400 ${link.to === location.pathname ? "bg-primary-400" : ""}`}>
                                <div className="py-3 text-center text-white text-lg font-bold">
                                    {link.name}
                                </div>
                                <div className="absolute top-12 pt-1 w-full z-10">
                                    {link.dropdown && link.dropdown.map((dd_link, k) => (
                                        <Link key={k} to={dd_link.to} id="dropdown" className={`bg-primary-300 hover:bg-primary-200 w-full ${dd_link.to === location.pathname ? "bg-primary-400" : ""}`}>
                                            <div className="py-3 px-4 text-lg text-white font-bold border-t ">
                                                {dd_link.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile navbar */}
            <div className="block lg:hidden relative">
                <div className="p-3 bg-primary-300 flex">
                    {!drawer ? <>
                        <GiHamburgerMenu className="text-3xl text-white cursor-pointer" onClick={() => setDrawer(true)} />
                    </> : <>
                        <MdClose className="text-3xl text-white cursor-pointer" onClick={() => setDrawer(false)} />
                    </>}
                    <h1 className="w-full text-center text-xl font-bold text-white">{pageTitle}</h1>
                </div>
                {drawer && <div className="absolute bg-primary-300 top-12 pt-2 w-full shadow-md z-10">
                    {links.map((link, k) => (
                        <Link key={k} to={link.to} onClick={() => { setDrawer(false); setPageTitle(link.name) }}>
                            <div className="p-3 w-full text-lg text-white font-bold border-t hover:bg-primary-200">
                                {link.name}
                            </div>
                        </Link>
                    ))}
                </div>}
            </div>
        </nav>
    )
}

export default Navbar2
