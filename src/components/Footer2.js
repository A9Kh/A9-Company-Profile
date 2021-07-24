import a9LogoWhite from "assets/A9-white.png"
import { FaPhoneAlt, FaGlobe, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"

const Footer2 = () => {
    return (
        <footer className="bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400">
            <div className="container mx-auto pt-14 pb-5">
                <div className="flex">
                    <div className="flex w-4/12">
                        <div className="flex flex-col items-center">
                            <img src={a9LogoWhite} alt="" className="w-80" />
                            <h4 className="text-2xl text-white font-poppins mt-5">Working Hours</h4>
                            <h4 className="text-2xl text-white font-poppins mt-5">Mon - Sun</h4>
                            <h4 className="text-2xl text-white font-poppins mt-5">(8:00 am - 7:00 pm)</h4>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/12">
                        <h4 className="text-3xl text-white font-poppins font-bold">About Us</h4>
                        <span className="text-lg text-white mt-5">Company Overview</span>
                    </div>
                    <div className="flex flex-col w-2/12">
                        <h4 className="text-3xl text-white font-poppins font-bold">What we do?</h4>
                        <span className="text-lg text-white mt-5">A9 Mall</span>
                        <span className="text-lg text-white mt-5">Delivery & Logistic</span>
                    </div>
                    <div className="flex flex-col w-4/12">
                        <h4 className="text-3xl text-white font-poppins font-bold">Contact Us</h4>
                        <span className="text-lg text-white mt-5"><FaPhoneAlt className="inline-block text-2xl -mt-1" />&emsp; 092 555 365 / 010 595 365</span>
                        <span className="text-lg text-white mt-5"><FaGlobe className="inline-block text-2xl -mt-1" />&emsp; a9@a9kh.com</span>
                        <span className="text-lg text-white mt-5"><IoLocationSharp className="inline-block text-2xl -mt-1" />&emsp; #211, Street 169, Sangkat Veal Vong , Khan 7 Makara, Phnom Penh</span>
                        <div className="flex mt-5">
                            <FaFacebookSquare className="text-4xl text-white mr-5" />
                            <FaInstagram className="text-4xl text-white mr-5" />
                            <FaYoutube className="text-4xl text-white" />
                        </div>
                    </div>
                </div>
                <h4 className="block text-center text-2xl text-white mt-8">Copyright 2020-2021 All right reserved by A9 online kh co., LTD.</h4>
            </div>
        </footer>
    )
}

export default Footer2
