import React from "react"
import { useTranslation } from "react-i18next";
import img1 from "assets/images/projects/technology.jpg";
import img2 from "assets/images/projects/staff.jpg";

const ProjectHead = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto px-8 py-10 tracking-wider cursor-default">
            <div className="mx-auto lg:flex lg:flex-row h-auto lg:w-4/6 sm:w-4/5 text-white" data-aos="fade-left">
                <div className="absolute -left-5 -bottom-5 bg-gradient-to-r from-yellow-600 to-red-600 h-full w-full rounded-md"></div>

                <div className="bg-gray-800 px-4 py-6 md:p-8 rounded-tr-md rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none relative">
                    <div className="h-2 w-20 bg-gradient-to-r from-yellow-600 to-red-600 mb-5"></div>

                    <h2 className="text-xl md:text-3xl font-semibold">{t("project_head_title1")}</h2>

                    <p className="text-md lg:text-lg text-gray-50 text-opacity-60 mt-6">
                        {t("project_head_description1")}
                    </p>
                </div>

                <img className="rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md h-48 w-full lg:w-2/5 sm:h-auto object-cover relative" src={img1} alt="" />
            </div>

            <div className="mx-auto lg:flex lg:flex-row h-auto lg:w-4/6 sm:w-4/5 mb-5 mt-20 text-white" data-aos="fade-right">
                <div className="absolute -right-5 -bottom-5 bg-gradient-to-r from-red-600 to-yellow-600 h-full w-full rounded-md"></div>

                <img className="object-cover rounded-tr-md rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none h-48 w-full lg:w-2/5 sm:w-full sm:h-auto relative" src={img2} alt="" />

                <div className="bg-gray-800 px-4 py-6 md:p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md relative">
                    <div className="h-2 w-20 bg-gradient-to-r from-red-600 to-yellow-600 mb-5"></div>

                    <h2 className="text-xl md:text-3xl font-semibold">{t("project_head_title2")}</h2>

                    <p className="text-md md:text-lg text-opacity-60 mt-6 text-gray-50">
                        {t("project_head_description2")}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default ProjectHead;