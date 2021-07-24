import React from 'react';
import { useTranslation } from 'react-i18next';

const Cover = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-center relative bg-red-700" style={{ minHeight: "48vh" }}>
            <div className="flex flex-col justify-center items-center text-white">
                <h2 className="text-5xl font-bold  p-10 pb-8 mt-20 text-opacity-95 uppercase">
                    {t("cover_title")}
                </h2>

                <div className="text-center">
                    <h4 className="text-2xl mb-24 text-opacity-60">
                        {t("cover_subtitle")}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Cover;
