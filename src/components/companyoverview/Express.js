import delivery from "assets/images/companyOverview/delivery.svg";
import { useTranslation } from 'react-i18next';

const Express = () => {
    const { t } = useTranslation();

    const benefits = [
        "benefit_1",
        "benefit_2",
        "benefit_3",
        "benefit_4",
        "benefit_5",
        "benefit_6",
        "benefit_7",
    ]

    return (
        <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">{t("label_express_delivery")}</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-6/12 mt-3 sm:mt-5 lg:mt-14">
                    <h1 className="font-bold text-base sm:text-lg lg:text-xl">{t("label_7_benefits")}:</h1>
                    {benefits.map((b, k) => (
                        <h4 key={k} className="mt-2 sm:mt-3 lg:mt-5 text-sm sm:text-base"> <span className="font-bold">{k + 1}.</span>  {t(b)}</h4>
                    ))}
                </div>
                <img src={delivery} alt="" className="sm:w-6/12 self-center" />
            </div>
        </div>
    )
}

export default Express
