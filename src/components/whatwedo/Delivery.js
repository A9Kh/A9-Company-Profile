import deliveryMan from "assets/images/whatWeDo/pic-2.jpg"
import { useTranslation } from 'react-i18next';

const Delivery = () => {
    const { t } = useTranslation();

    const deliveryFeatures = [
        "d_feature_1",
        "d_feature_2",
        "d_feature_3",
        "d_feature_4",
    ]

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-7/12">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">{t("label_delivery_and_logistics")}</h1>
                <p className="my-1 sm:my-3 lg:my-5 text-sm sm:text-base tracking-wide">
                    {t("delivery_p")}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-around lg:block">
                    <div className="font-bold text-base sm:text-lg lg:text-xl lg:pl-10">
                        {deliveryFeatures.map((df, k) => (
                            <h1 key={k} className="my-1 lg:my-2">{t(df)}</h1>
                        ))}
                    </div>
                    <img src={deliveryMan} alt="" className="rounded-xl shadow w-full mt-3 sm:mt-0 sm:w-5/12 self-center block lg:hidden" />
                </div>
            </div>
            <div className="w-5/12 hidden lg:block ">
                <img src={deliveryMan} alt="" className="rounded-xl shadow" />
            </div>
        </div>
    )
}

export default Delivery
