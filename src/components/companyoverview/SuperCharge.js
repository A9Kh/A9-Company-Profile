import business from "assets/images/companyOverview/business.jpg";
import { useTranslation } from 'react-i18next';

const SuperCharge = () => {
    const { t } = useTranslation();

    const countries = ["country_1", "country_2", "country_3", "country_4", "country_5", "country_6",]

    return (
        <div className="flex flex-col lg:flex-row text-white">
            <img src={business} alt="" className="object-cover lg:w-6/12 h-52 sm:h-72 lg:h-96" />
            <div className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 p-10 sm:p-14 lg:p-16 lg:w-6/12 lg:h-96">
                <h1 className="uppercase text-lg sm:text-xl lg:text-2xl font-bold">{t("label_supercharge_your_business")}</h1>
                <article className="mt-5 text-sm sm:text-base tracking-wide">
                    <p>
                        {t("supercharge_p_1")}
                    </p>
                </article>
                <div className="grid grid-cols-2 sm:grid-cols-3 mt-7 gap-5">
                    {countries.map((country, k) => (
                        <span key={k}>{t(country)}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SuperCharge
