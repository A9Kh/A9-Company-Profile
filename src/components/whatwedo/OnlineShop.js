import a9Web from "assets/images/whatWeDo/pic-1.jpg";
import { ImArrowRight } from "react-icons/im";
import { useTranslation } from 'react-i18next';

const OnlineShop = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full sm:w-7/12 self-center lg:w-6/12 lg:px-16">
                <img src={a9Web} alt="" className="object-contain shadow rounded-lg" />
            </div>
            <div className="flex flex-col w-full mt-4 sm:mt-7 lg:w-6/12 lg:mt-10">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">{t("label_a9_online_shopping")}</h1>
                <article className="my-4 sm:my-7 lg:my-10 text-sm sm:text-base tracking-wide">
                    <p className="mb-2 sm:mb-3 lg:mb-5">
                        {t("a9_online_shop_p_1")}
                    </p>
                    <p>
                        {t("a9_online_shop_p_2")}
                    </p>
                </article>
                <a href="https://www.a9kh.com/" target="_blank" className="flex bg-primary-300 px-10 py-3 rounded-full items-center gap-5 text-white hover:bg-primary-200 self-center lg:self-start">{t("btn_visit_a9_shop")} <ImArrowRight /> </a>
            </div>
        </div>
    )
}

export default OnlineShop
