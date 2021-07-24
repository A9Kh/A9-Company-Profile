import React from 'react';
import Art from "assets/images/home/homepage_art.svg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Main = () => {
    return (
        <div className="h-1/2 container mx-auto max-w-7xl px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full items-center lg:space-x-16">
                <div className="w-full">
                    <div className="text-3xl md:text-4xl lg:text-5xl my-0 lg:my-8 font-extrabold tracking-wider">
                        Digital transformation driven by technology
                    </div>

                    <div className="text-xl font-semibold mt-4 lg:mt-0">
                        We are building software for your bussiness. Design and Development Partner for startups and Enterprise
                    </div>

                    <Link to="/services" className="sm:mx-auto w-3/6 md:w-1/2 lg:w-full flex justify-center items-center h-auto my-8 py-4 border-2 border-red-600 active:bg-red-700 hover:bg-red-600 rounded font-semibold text-md text-black hover:text-white">
                        <div className="text-sm sm:text-lg">Explore More</div>
                        <FaArrowRight className="mx-4" />
                    </Link>

                    <div className="text-lg">
                        Lorem Ipsum is simply dummy text.
                    </div>
                </div>

                <div className="lg:mt-0 mt-6 w-auto md:w-4/5 mx-auto">
                    <img src={Art} alt="" className="object-cover object-center h-full w-full" />
                </div>
            </div>
        </div>
    )
}


export default Main;