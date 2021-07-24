import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaGoogle, FaMicrosoft } from 'react-icons/fa';

const content = [
    { icon: <FaMicrosoft className="w-12 h-auto text-gray-800" />, aos: "fade-up", delay: "200", title: "work_content_title1", description: "work_description_title1", color: "bg-gradient-to-r from-pink-400 to-pink-600" },
    { icon: <FaFacebook className="w-12 h-auto text-gray-800" />, aos: "fade-up", delay: "100", title: "work_content_title2", description: "work_description_title2", color: "bg-gradient-to-r from-yellow-600 to-red-600" },
    { icon: <FaGoogle className="w-12 h-auto text-gray-800" />, aos: "fade-up", delay: "200", title: "work_content_title3", description: "work_description_title3", color: "bg-gradient-to-r from-green-500 to-green-700" },
]

const Work = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto max-w-7xl px-4 cursor-default py-16">
            <div className="grid grid-rows-1 justify-center text-center mb-4">
                <div className="text-4xl font-bold uppercase">{t("work_title")}</div>
                <div className="text-lg text-gray-500 font-semibold">{t("work_subtitle")}</div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap md:mx-14 lg:mx-0 lg:my-0">
                {
                    content.map((p, k) =>
                        <div key={k} className=" w-full lg:w-1/3 h-auto m-2 rounded py-4 md:py-8 lg:py-6 px-4 md:px-8 hover:shadow-lg" data-aos={p.aos} data-aos-delay={p.delay} >
                            <div className="my-4">
                                {p.icon}
                            </div>

                            <div className={`my-4 font-bold text-2xl text-red-600`}>
                                {t(p.title)}
                            </div>

                            <div className="my-4 text-md font-medium text-gray-500">
                                {t(p.description)}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Work;
