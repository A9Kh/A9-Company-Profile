import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const content = [
    { title: "service_1", image: "https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg" },
    { title: "service_2", image: "https://cdn.dribbble.com/users/757683/screenshots/14483876/media/6affa4c12d96f944f2a01042fdd950a3.jpg?compress=1&resize=1200x900" },
    { title: "service_3", image: "https://image.freepik.com/free-psd/phone-screen-ui-ux-app-presentation-mockup_165789-263.jpg" },
]

const OurService = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto max-w-7xl py-16">
            <div className="mx-4">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{t("service_header_1")} <br className="md:block hidden" />{t("service_header_2")}</div>
            </div>

            <div className="mt-4 md:mt-6 md:mb-4 flex justify-center flex-wrap lg:flex-nowrap">
                {content.map((p, k) => (
                    <ServiceCard key={k} title={t(p.title)} image={p.image} />
                ))}
            </div>

            <div className="flex justify-center">
                <Link to="/services" className=" py-2 px-4 border-2 border-red-600 active:bg-red-700 hover:bg-red-600 rounded font-semibold text-md text-black hover:text-white">{t("explore_more")}</Link>
            </div>
        </div>
    )
}

const ServiceCard = ({ title, image }) => {
    return (
        <div className="px-4 mb-8  sm:w-3/6 md:w-1/2 md:h-72 lg:h-80 transform transition duration-500 hover:scale-105 ">
            <div className="w-full h-full relative rounded-md">
                <img src={image} alt="photos" className="border-2 border-black border-opacity-20 hover:border-black rounded-md w-full h-full object-cover transition duration-300 ease-in-out hover:shadow-2xl" />
            </div>

            <div className="border-b-2 border-opacity-25 border-black relative -top-6 w-80w-auto md:w-4/5 text-center mx-auto bg-white sm:px-4 py-2 rounded-md text-md md:text-lg font-bold tracking-wider">
                <div>{title}</div>
            </div>
        </div>
    )
}

export default OurService;
