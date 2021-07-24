import React from 'react';
import Line from 'components/sevices/Line';
import { useTranslation } from 'react-i18next';

const Tagline = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col justify-center items-center">
            <h4 className="text-2xl my-10 uppercase p-10 pb-2 font-semibold text-gray-500 text-center">
                {t("tagline_title1")}
            </h4>

            <div className="flex sm:justify-items-center px-4 text-center ">
                <h1 className="text-3xl px-2 mb-5 font-bold tracking-tight capitalize font-mono">
                    {t("tagline_title2")}
                </h1>
            </div>

            <Line />
        </div>
    )
}

export default Tagline;