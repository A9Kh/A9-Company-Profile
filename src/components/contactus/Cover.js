import Banner from "assets/images/contact_us/contact-us-img.jpg";
import { useTranslation } from 'react-i18next';

const Cover = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="relative flex items-center" style={{ minHeight: "50vh" }} >
                <div className="absolute top-0 w-full h-full bg-top bg-cover" style={{ backgroundImage: `url(${Banner})` }}>
                    <span className="w-full h-full absolute opacity-60 bg-cyan-900"></span>
                </div>

                <div className="container relative mx-auto max-w-7xl text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        {t("contact_us_banner1")}
                    </h1>

                    <h4 className="text-3xl md:text-5xl font-light my-4">
                        {t("contact_us_banner2")}
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default Cover
