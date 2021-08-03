import ourBusinessImg from "assets/images/aboutA9Mall/import_export.jpg"
import { useTranslation } from 'react-i18next';

const AboutA9Mall = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="font-bold text-lg mb-1 sm:text-xl sm:mb-3 lg:text-2xl lg:mb-5 px-5 xl:px-0">{t("label_about_a9_mall")}</h1>
            
            <article className="mb-10 px-5 xl:px-0">
                <p className="text-sm lg:text-base tracking-wide">
                    {t("abouta9_p_1")}
                </p>
                <p className="text-sm lg:text-base tracking-wide my-2 sm:my-3 lg:my-5">
                    {t("abouta9_p_2")}
                </p>
                <p className="text-sm lg:text-base tracking-wide">
                    {t("abouta9_p_3")}
                </p>
            </article>

            <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-6/12 h-auto hidden lg:block">
                    <img src={ourBusinessImg} alt="" className="object-cover h-full w-full" />
                </div>
                
                <div className="w-full h-auto lg:hidden">
                    <img src={ourBusinessImg} alt="" className="object-cover h-full w-full" />
                </div>

                <div className="px-5 sm:px-10 lg:px-0 w-full lg:w-6/12 flex items-center">
                    <div className="p-5 sm:p-7 lg:p-10 text-white bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200">
                        <h1 className="uppercase mb-1 sm:mb-3 lg:mb-5 text-lg sm:text-xl lg:text-2xl font-bold">{t("label_our_business")}</h1>
                        
                        <h1 className="my-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-bold">{t("label_a9_marketplace")}</h1>
                        
                        <article>
                            <p className="text-sm sm:text-bace lg:text-lg tracking-wide">
                                {t("abouta9_p_4")}
                            </p>
                        </article>

                        {/* <h1 className="my-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-bold">{t("a9_core_value")}</h1>

                        <article>
                            <p className="text-sm sm:text-bace lg:text-lg tracking-wide">
                                {t("abouta9_p_5")}
                            </p>
                        </article> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutA9Mall
