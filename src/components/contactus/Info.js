import contactUsArt from "assets/images/contactUs/contact.svg";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Info = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-4/12 flex flex-row flex-wrap gap-y-5 justify-between lg:flex-nowrap lg:flex-col lg:gap-10">
                <div className="w-6/12">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300 uppercase mb-2">{t("label_follow_us")}:</h1>
                    <div className="flex text-3xl gap-3 sm:gap-5 lg:gap-7">
                        <FaFacebookSquare />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
                <div className="w-6/12">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300 uppercase mb-2">{t("label_address")}</h1>
                    <p className="text-sm sm:text-base">
                        {t("address")}
                    </p>
                </div>
                <div className="w-6/12 pr-5 sm:pr-0">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300 uppercase mb-2">{t("label_contact")}</h1>
                    <p className="mb-1 text-sm sm:text-base">092 555 365 /  010 595 365</p>
                    <p className="text-sm sm:text-base">a9@a9kh.com</p>
                </div>
                <div className="w-6/12">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300 uppercase mb-2">{t("label_open_hours")}</h1>
                    <p className="mb-1 text-sm sm:text-base">Monday - Sunday</p>
                    <p>(8:00 am — 7:00pm)</p>
                </div>
            </div>
            <img src={contactUsArt} alt="" className="lg:w-8/12 self-center" />
        </div>
    )
}

export default Info
