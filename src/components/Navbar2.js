import a9Logo from "assets/A9-primary.png"
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom';

let links = [
    { name: 'About Us', to: '/' },
    { name: 'What We Do', to: '/whatwedo' },
    { name: 'Careers', to: '/careers' },
    { name: 'Investor Resources', to: '/investorresources' },
    { name: 'Contact Us', to: '/contactus' },
];

const Navbar2 = () => {
    const location = useLocation();

    return (
        <nav>
            <div className="flex justify-between items-center py-3 px-10">
                <img src={a9Logo} alt="" className="w-48 object-contain" />
                <div className="flex items-center">
                    <span className="text-3xl text-primary-300 -mt-2">Follow Us:</span>
                    <a href=""><FaFacebookSquare className="text-3xl ml-5 text-primary-300" /></a>
                    <a href=""><FaInstagram className="text-3xl ml-5 text-primary-300" /></a>
                    <a href=""><FaYoutube className="text-3xl ml-5 text-primary-300" /></a>
                </div>
            </div>

            {/* Desktop navbar */}
            <div className="hidden lg:block">
                <div className="bg-primary-300">
                    <div className="container mx-auto flex justify-evenly">
                        {links.map((link, k) => (
                            <Link key={k} to={link.to} className={`text-white text-xl font-bold p-4 hover:bg-primary-200 active:bg-primary-400 ${link.to === location.pathname ? "bg-primary-400" : ""}`}>{link.name}</Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile navbar */}
        </nav>
    )
}

export default Navbar2
