import contactUsArt from "assets/images/contactUs/contact.svg";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

const Info = () => {
    return (
        <div className="flex">
            <div className="w-4/12 flex flex-col gap-10">
                <div>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300 uppercase mb-2">follow us:</h1>
                    <div className="flex text-3xl gap-7">
                        <FaFacebookSquare />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300 uppercase mb-2">address</h1>
                    <p>
                        #211, Street 169, Sangkat Veal Vong ,
                        Khan 7 Makara, Phnom Penh, Cambodia
                    </p>
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300 uppercase mb-2">contact</h1>
                    <p className="mb-1">092 555 365 / 010 595 365</p>
                    <p>a9@a9kh.com</p>
                </div>
                <div>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300 uppercase mb-2">open hours</h1>
                    <p className="mb-1">Monday - Sunday</p>
                    <p>(8:00 am — 7:00pm)</p>
                </div>
            </div>
            <img src={contactUsArt} alt="" className="w-8/12" />
        </div>
    )
}

export default Info
