import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartLine, FaLink } from 'react-icons/fa';

const content = [
    { icon: <FaChartLine className="w-6 md:w-8 h-auto text-green-500" />, title: "tag_line_content_title1", description: "tag_line_description_title1" },
    { icon: <FaLink className="w-6 md:w-8 h-auto text-blue-500" />, title: "tag_line_content_title2", description: "tag_line_description_title2" },
]

const OurStory = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto max-w-7xl py-16 tracking-wider cursor-default" >
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/3 my-4 lg:my-0 px-4 lg:pr-10 lg:pl-0 text-left lg:text-right">
                    <div className="text-xl text-gray-500 uppercase font-semibold">
                        {t("tagline_subtitle")}
                    </div>

                    <div className="py-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600 font-bold">
                        {t("tagline_title")}
                    </div>
                </div>

                {
                    content.map((p, k) =>
                        <Section key={k} icon={p.icon} title={t(p.title)} description={t(p.description)} />
                    )
                }
            </div>
        </div>
    )
}

const Section = ({ icon, title, description }) => {
    return (
        <div className="grid grid-rows-3 grid-flow-col w-full lg:w-1/3 px-4 md:px-4 lg:px-6 xl:px-8 my-4 md:my-0">
            <div className="row-span-3 mx-auto">
                <div className="p-4 shadow-lg rounded-full">
                    {icon}
                </div>
            </div>

            <div className="col-span-2 text-2xl font-semibold ml-4">
                {title}
            </div>

            <div className="row-span-2 col-span-2 ml-4 text-lg font-semibold text-gray-500">
                {description}
            </div>
        </div>
    )
}

export default OurStory;