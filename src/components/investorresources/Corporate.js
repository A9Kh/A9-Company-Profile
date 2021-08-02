import handsShake from "assets/images/investorResourcse/hands-shake.png"
import handOutPlant from "assets/images/investorResourcse/hand-out-plant.png"
import moneyPlant from "assets/images/investorResourcse/money-plant.png"
import { useTranslation } from 'react-i18next';

const Corporate = () => {
    const { t } = useTranslation();

    const reasons = [
        { img: handsShake, text: t("reason_title_1") },
        { img: moneyPlant, text: t("reason_title_2"), isRightSide: true },
        { img: handOutPlant, text: t("reason_title_3") },
    ]

    return (
        <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl text-center font-bold mb-1 sm:mb-3 lg:mb-5">{t("label_corporate_profile")}</h1>
            <article>
                <p className="text-sm sm:text-base tracking-wide">
                    {t("investorresources_p")}
                    <span className="font-bold"> a9online.com</span>.
                </p>
            </article>
            <div className="mt-5 lg:mt-10 grid gap-5 lg:gap-0 lg:grid-cols-3">
                {reasons.map((reason, k) => (
                    <div key={k} className={`flex flex-row lg:flex-col items-center ${reason.isRightSide ? "flex-row-reverse" : ""}`}>
                        <img src={reason.img} alt="" className="w-20 sm:w-28 lg:w-40 p-3 border border-primary-300 rounded-full" />
                        <h1 className={`lg:text-center text-md sm:text-lg lg:text-xl font-bold px-2 sm:px-5 lg:mt-5 lg:px-16 ${reason.isRightSide ? "text-right" : ""}`}>{reason.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Corporate
