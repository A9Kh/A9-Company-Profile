import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import i18n from "i18next";
import Flag from 'react-flagkit';

//Icons
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose, MdLanguage } from "react-icons/md";

// Logo

let navigation = [
    { name: 'About Us', to: '/' },
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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

//TODO rework language menu
//TODO dynamic navbar, elevate on scroll
const MyNavbar = () => {
    const { t } = useTranslation();
    const cookies = new Cookies();
    const [drawer, setdrawer] = useState(true);
    const [menu, setMenu] = useState(false);
    const location = useLocation();
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleLangMenu(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setMenu(false)
            }
        }

        document.addEventListener("mousedown", handleLangMenu);
        return () => {
            document.removeEventListener("mousedown", handleLangMenu);
        };
    }, [wrapperRef]);

    const handleChange = (value) => {
        i18n.changeLanguage(value);

        setMenu(false);

        const date = new Date();
        date.setDate(date.getDate() + 7);

        cookies.set('lang', value, { expires: date });
    };

    return (
        <div className="fixed h-16 z-20 w-full text-white bg-gray-900 shadow-xl">
            <div className="h-full flex flex-col max-w-screen-xl lg:mx-auto lg:items-center lg:justify-between lg:flex-row lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <button className="lg:hidden focus:outline-none focus:shadow-outline" onClick={() => setdrawer(!drawer)}>
                        {drawer ? <CgMenuLeftAlt size="28" /> : <MdClose size="28" />}
                    </button>

                    <Link to="/" className="text-lg font-semibold tracking-widest uppercase rounded-lg">
                        <img className="object-cover w-8 h-auto lg:hidden" src="" alt="logo" />
                        <img className="object-cover w-20 h-auto hidden lg:block" src="" alt="logo" />
                    </Link>

                    <MdLanguage onClick={() => setMenu(!menu)} className="lg:hidden h-6 w-6 text-white hover:text-gray-400" />
                </div>

                <div className={classNames(menu ? "block" : "hidden", "  lg:hidden absolute right-5 top-12 p-4 bg-white rounded ring-2 ring-black shadow-lg w-48")}>
                    {
                        langues.map((p, k) =>
                            <button key={k} className="flex justify-start items-center my-2 px-4 py-2 w-full text-md font-bold tracking-wider rounded-md hover:bg-gray-200 text-black" onClick={() => handleChange(p.lang)}>
                                <Flag country={p.country} className="mr-3" />
                                {p.name}
                            </button>
                        )
                    }
                </div>

                {/* Mobile Nav */}
                <div className={classNames(drawer ? "hidden" : "block", " bg-gray-900 lg:hidden px-4 py-3 rounded-br-lg md:rounded-br-xl rounded-bl-lg md:rounded-bl-xl space-y-2 shadow-2xl")} >
                    {
                        navigation.map((p) => (
                            <Link onClick={() => setdrawer(true)} key={p.name} to={p.to} className={classNames(
                                p.to === location.pathname ? 'bg-red-900 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white',
                                'block px-3 py-2 rounded text-base font-bold'
                            )}>
                                {t(p.name)}
                            </Link>
                        ))
                    }
                </div>

                {/* Desktop Nav */}
                <nav className="hidden flex-col flex-grow pb-4 md:pb-0 lg:flex lg:justify-end lg:flex-row">
                    {
                        navigation.map((p, k) =>
                            <Link key={k} to={p.to} className={classNames(p.to === location.pathname ? 'bg-red-800' : 'duration-750 transition ease-in hover:bg-gray-600 hover:bg-opacity-50 hover:text-white', 'px-4 py-2 mx-2 text-sm font-semibold rounded md:mt-0')}>
                                {t(p.name)}
                            </Link>
                        )
                    }

                    {/* Language dropdown */}
                    <div className="hidden lg:block relative self-center" >
                        <MdLanguage onClick={() => setMenu(!menu)} className="h-6 w-6 transition transform duration-500 ease-in-out hover:text-red-600 hover:scale-125 hover:shadow-lg" />

                        {
                            menu &&
                            <div className=" absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                                <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                                    {
                                        langues.map((p, k) =>
                                            <button key={k} className="flex justify-start items-center my-2 px-4 py-2 w-full text-md font-bold tracking-wider rounded-md hover:bg-gray-200 text-black" onClick={() => handleChange(p.lang)}>
                                                <Flag country={p.country} className="mr-3" />
                                                {p.name}
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </nav >
            </div >
        </div >
    )
}

export default MyNavbar;