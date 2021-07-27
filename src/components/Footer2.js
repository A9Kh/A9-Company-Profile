import a9LogoWhite from "assets/A9-white.png"
import { FaPhoneAlt, FaGlobe, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"

const Footer2 = () => {
    return (
        <footer className="bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400">
            <div className="container mx-auto pt-5 lg:pt-10 pb-5 px-10 sm:px-3">
                <div className="flex flex-wrap gap-5 sm:gap-0 lg:flex-nowrap">
                    <div className="flex w-full sm:w-6/12 lg:w-4/12">
                        <div className="flex flex-col sm:items-center">
                            <img src={a9LogoWhite} alt="" className="w-48" />
                            <h4 className="text-lg text-white font-poppins mt-1 sm:mt-2 lg:mt-3">Working Hours</h4>
                            <h4 className="text-lg text-white font-poppins mt-1 sm:mt-2 lg:mt-3">Mon - Sun</h4>
                            <h4 className="text-lg text-white font-poppins mt-1 sm:mt-2 lg:mt-3">(8:00 am - 7:00 pm)</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 sm:gap-0 sm:w-6/12 lg:w-4/12 lg:flex-row">
                        <div className="flex-1 flex flex-col">
                            <h4 className="text-lg text-white font-poppins font-bold">About Us</h4>
                            <span className="text-sm text-white mt-1 sm:mt-2 lg:mt-3">Company Overview</span>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <h4 className="text-lg text-white font-poppins font-bold">What we do?</h4>
                            <span className="text-sm text-white mt-1 sm:mt-2 lg:mt-3">A9 Mall</span>
                            <span className="text-sm text-white mt-1 sm:mt-2 lg:mt-3">Delivery & Logistic</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:mt-7 lg:mt-0 lg:w-4/12">
                        <h4 className="text-lg text-white font-poppins font-bold">Contact Us</h4>
                        <span className="text-sm text-white mt-1 sm:mt-2 lg:mt-3"><FaPhoneAlt className="inline-block text-xl -mt-1" />&emsp; 092 555 365 / 010 595 365</span>
                        <span className="text-sm text-white mt-1 sm:mt-2 lg:mt-3"><FaGlobe className="inline-block text-xl -mt-1" />&emsp; a9@a9kh.com</span>
                        <span className="text-sm text-white mt-1 sm:mt-2 lg:mt-3"><IoLocationSharp className="inline-block text-xl -mt-1" />&emsp; #211, Street 169, Sangkat Veal Vong , Khan 7 Makara, Phnom Penh</span>
                        <div className="flex mt-1 sm:mt-2 lg:mt-3">
                            <FaFacebookSquare className="text-2xl text-white mr-5" />
                            <FaInstagram className="text-2xl text-white mr-5" />
                            <FaYoutube className="text-2xl text-white" />
                        </div>
                    </div>
                </div>
                <h4 className="block text-center text-sm sm:text-md md:text-lg lg:text-xl text-white mt-3">Copyright 2020-2021 All right reserved by A9 online kh co., LTD.</h4>
            </div>
        </footer>
    )
}

export default Footer2
