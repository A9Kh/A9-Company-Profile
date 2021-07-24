import React from 'react';
import projectImg from 'assets/images/projects/project.png';
import { useTranslation } from "react-i18next";

const Cover = () => {
    const { t } = useTranslation();
    return (
        <div className="flex content-center items-center justify-center relative" style={{ minHeight: "48vh" }}>
            <div className="w-full h-full bg-top bg-cover absolute" style={{ backgroundImage: `url(${projectImg})` }}>
                <div className="w-full h-full bg-cyan-900 bg-opacity-50"></div>
            </div>

            <div className="flex h-full items-center absolute">
                <h2 className="text-4xl font-bold text-white">
                    {t("projects")}
                </h2>
            </div>
        </div>
    )
}

export default Cover;