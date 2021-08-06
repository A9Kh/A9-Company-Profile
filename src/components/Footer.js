import a9LogoWhite from "assets/A9-white.png"
import { FaPhoneAlt, FaGlobe, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Footer2 = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400">
            <div className="container mx-auto pt-5 lg:pt-10 pb-5 px-10 sm:px-3">
                <div className="flex flex-wrap gap-5 sm:gap-0 lg:flex-nowrap">
                    <div className="flex w-full sm:w-6/12 lg:w-4/12">
                        <div className="flex flex-col sm:items-center">
                            <img src={a9LogoWhite} alt="" className="w-48" />
                            <h4 className="text-lg text-white mt-1 sm:mt-2 lg:mt-3">{t("label_working_hours")}</h4>
                            <h4 className="text-lg text-white mt-1 sm:mt-2 lg:mt-3">{t("label_day")}</h4>
                            <h4 className="text-lg text-white mt-1 sm:mt-2 lg:mt-3">(8:00 am - 7:00 pm)</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 sm:gap-0 sm:w-6/12 lg:w-4/12 lg:flex-row">
                        <div className="flex-1 flex flex-col">
                            <Link to="/aboutus" className="text-lg text-white font-bold hover:text-gray-200">{t("label_about_us")}</Link>
                            <Link to="/" className="text-sm text-white mt-1 sm:mt-2 lg:mt-3 hover:text-gray-200">{t("label_company_overview")}</Link>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <Link to="/whatwedo" className="text-lg text-white font-bold hover:text-gray-200">{t("label_what_we_do")}</Link>
                            <Link to="/whatwedo" className="text-sm text-white mt-1 sm:mt-2 lg:mt-3 hover:text-gray-200">{t("label_a9_mall")}</Link>
                            <Link to="/whatwedo" className="text-sm text-white mt-1 sm:mt-2 lg:mt-3 hover:text-gray-200">{t("label_delivery_and_logistic")}</Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:mt-7 lg:mt-0 lg:w-4/12">
                        <Link to="/contactus" className="text-lg text-white font-bold hover:text-gray-200">{t("label_contact_us")}</Link>
                        <span className="text-sm text-white mt-1 sm:mt-2 lg:mt-3"><FaPhoneAlt className="inline-block text-xl -mt-1" />&emsp; 092 555 365 / 010 595 365</span>
                        <span className="text-sm text-white mt-1 sm:mt-2 lg:mt-3"><FaGlobe className="inline-block text-xl -mt-1" />&emsp; info@a9kh.com</span>
                        <span className="text-sm text-white mt-1 sm:mt-2 lg:mt-3"><IoLocationSharp className="inline-block text-xl -mt-1" />&emsp; {t("address")}</span>
                        <div className="flex mt-1 sm:mt-2 lg:mt-3">
                            <a href="https://www.facebook.com/a9onlinekh" target="_blank" rel="noreferrer"><FaFacebookSquare className="text-2xl text-white mr-5" /></a>
                            <a href="https://www.instagram.com/a9onlinekh" target="_blank" rel="noreferrer"><FaInstagram className="text-2xl text-white mr-5" /></a>
                            <a href="https://www.youtube.com/channel/UCUcgss8jEl9pT3lZ7xDe2Kw" target="_blank" rel="noreferrer"><FaYoutube className="text-2xl text-white" /></a>
                        </div>
                    </div>
                </div>
                <h4 className="block text-center text-sm sm:text-md md:text-lg lg:text-xl text-white mt-3">Copyright &copy; 2020-2021 All right reserved by A9 online kh co., LTD.</h4>
            </div>
        </footer>
    )
}

export default Footer2
