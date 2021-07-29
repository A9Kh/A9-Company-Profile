import a9Logo from "assets/A9-primary.png"
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md"
import Flag from 'react-flagkit';
import { MdLanguage } from "react-icons/md"
import i18n from "i18next";
import Cookies from 'universal-cookie';
import { useTranslation } from 'react-i18next';

let links = [
    { name: 'About Us', to: '/aboutus', },
    { name: 'What We Do', to: '/whatwedo' },
    { name: 'Careers', to: '/careers' },
    { name: 'Investor Resources', to: '/investorresources' },
    { name: 'Contact Us', to: '/contactus' },
];

const langues = [
    { name: "English", country: "US", lang: "en" },
    { name: "中文", country: "CN", lang: "zh" },
    { name: "ភាសារខ្មែរ", country: "KH", lang: "kh" },
];

const Navbar2 = ({ khmerFontActivitor }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const [drawer, setDrawer] = useState(false);
    const [pageTitle, setPageTitle] = useState("");
    const [langDrawer, setLangDrawer] = useState(false)
    const wrapperRef = useRef(null);
    const cookies = new Cookies();

    useEffect(() => {
        function handleLangMenu(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setLangDrawer(false)
            }
        }

        document.addEventListener("mousedown", handleLangMenu);
        return () => {
            document.removeEventListener("mousedown", handleLangMenu);
        };
    }, [wrapperRef]);

    useEffect(() => {
        if (location.pathname === "/") {
            setPageTitle("Company Overview");
        } else {
            links.forEach((link) => {
                if (location.pathname === link.to) {
                    setPageTitle(link.name);
                }
            })
        }
        if (cookies.get("useKhmerFont") === "true") {
            khmerFontActivitor(true);
        } else {
            khmerFontActivitor(false);
        }
    }, []);

    const handleChange = (value) => {
        if (value === "kh") {
            var s = true;
            khmerFontActivitor(s);
        } else {
            var s = false;
            khmerFontActivitor(s);
        }
        i18n.changeLanguage(value);

        setLangDrawer(false);

        const date = new Date();
        date.setDate(date.getDate() + 7);

        cookies.set('lang', value, { expires: date });
        cookies.set('useKhmerFont', s, { expires: date });
    };

    return (
        <nav>
            <div className="flex justify-between items-center py-1 px-3 sm:py-2 sm:px-5 md:py-3 md:px-7 lg:px-10">
                <Link to="/" className="flex" onClick={() => setPageTitle("Company Overview")}>
                    <img src={a9Logo} alt="" className="w-32 sm:w-36 md:w-44 lg:w-48 object-contain" />
                </Link>
                <div className="flex items-center">
                    <div className="relative hidden lg:block">
                        {/* language changer for desktop */}
                        <MdLanguage className="text-primary-300 text-4xl mr-5 p-1 hover:bg-gray-200 rounded-full cursor-pointer" onClick={() => setLangDrawer(prev => !prev)} />
                        {langDrawer && <div className="absolute p-5 bg-white border top-9 right-7 flex flex-col z-20 border-black rounded-xl">
                            {langues.map((langu, k) => (
                                <button key={k} className="flex w-32 p-2 hover:bg-gray-300 items-center" onClick={() => handleChange(langu.lang)}>
                                    <Flag country={langu.country} className="mr-4 " />
                                    {langu.name}
                                </button>
                            ))}
                        </div>}
                    </div>
                    <span className="hidden sm:inline-block sm:text-lg md:text-xl lg:text-2xl text-primary-300">Follow Us:</span>
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
                            <Link key={k} to={link.to} className={`relative flex-1 hover:bg-primary-200 active:bg-primary-400 ${link.to === location.pathname ? "bg-primary-400" : ""}`}>
                                <div className="py-3 text-center text-white text-lg font-bold">
                                    {t(link.name)}
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
                        <GiHamburgerMenu className="text-3xl text-white cursor-pointer hover:text-gray-200" onClick={() => setDrawer(true)} />
                    </> : <>
                        <MdClose className="text-3xl text-white cursor-pointer hover:text-gray-200" onClick={() => setDrawer(false)} />
                    </>}
                    <h1 className="w-full text-center text-xl font-bold text-white">{t(pageTitle)}</h1>
                    <div className="relative block lg:hidden">
                        {/* language changer for mobile */}
                        <MdLanguage className="text-white text-3xl hover:text-gray-200 rounded-full cursor-pointer" onClick={() => setLangDrawer(prev => !prev)} />
                        {langDrawer && <div className="absolute p-3 bg-white border top-8 right-1 flex flex-col z-20 rounded-xl border-black">
                            {langues.map((langu, k) => (
                                <button key={k} className="flex w-32 p-2 hover:bg-gray-300 items-center" onClick={() => handleChange(langu.lang)}>
                                    <Flag country={langu.country} className="mr-4 " />
                                    {t(langu.name)}
                                </button>
                            ))}
                        </div>}
                    </div>
                </div>
                {drawer && <div className="absolute bg-primary-300 top-12 pt-2 w-full shadow-md z-10 rounded-b-xl">
                    {links.map((link, k) => (
                        <Link key={k} to={link.to} onClick={() => { setDrawer(false); setPageTitle(link.name) }}>
                            <div className="p-3 w-full text-lg text-white font-bold border-t hover:bg-primary-200">
                                {t(link.name)}
                            </div>
                        </Link>
                    ))}
                </div>}
            </div>
        </nav>
    )
}

export default Navbar2
