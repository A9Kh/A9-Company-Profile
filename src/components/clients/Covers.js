import React from 'react';
import { useTranslation } from 'react-i18next';

const Covers = () => {
    const { t } = useTranslation();

    return (
        <div className="flex content-center items-center justify-center relative" style={{ minHeight: "48vh" }}>
            <div className="w-full h-full  bg-center bg-cover absolute" style={{ backgroundImage: `url(image/cleints.jpeg)` }}>
                <div className="w-full h-full bg-cyan-900 bg-opacity-60"></div>
            </div>

            <div className="flex h-full items-center absolute">
                <h2 className="text-4xl font-bold text-white">
                    {t("name")}
                </h2>
            </div>
        </div>
    )
}

export default Covers;