import Banner from "assets/images/about_us/about-us-img.jpg"
import { useTranslation } from 'react-i18next';

const Cover = () => {
    const { t } = useTranslation();

    return (
        <div className="relative flex content-center items-center justify-center" style={{ height: "50vh" }}>
            <div className="absolute top-0 w-full h-full bg-top bg-cover" style={{ backgroundImage: `url(${Banner})` }}>
                <span className="w-full h-full absolute opacity-60 bg-cyan-900"></span>
            </div>

            <div className="relative container mx-auto max-w-7xl">
                <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    {t("about_us_banner")}
                </h1>
            </div>
        </div>
    )
}

export default Cover
