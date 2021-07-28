import { useTranslation } from 'react-i18next';

const CorePillars = () => {
    const { t } = useTranslation();

    const cores = [
        {
            title: t("title_pillar_1"),
            subtitle: t("subtitle_pillar_1"),
            body: t("body_pillar_1"),
            color: "bg-primary-100",
            numColor: "text-green-800",
            aosDelay: "100",
        },
        {
            title: t("title_pillar_2"),
            subtitle: t("subtitle_pillar_2"),
            body: t("body_pillar_2"),
            color: "bg-primary-200",
            numColor: "text-white",
            aosDelay: "200",
        },
        {
            title: t("title_pillar_3"),
            subtitle: t("subtitle_pillar_3"),
            body: t("body_pillar_3"),
            color: "bg-primary-300",
            numColor: "text-green-300",
            aosDelay: "300",
        },
    ]

    return (
        <div className="px-3 sm:px-5 lg:px-1">
            <h1 className="uppercase mb-1 sm:mb-3 lg:mb-5 text:lg sm:text-xl lg:text-2xl font-bold">{t("label_our_core_pillars")}</h1>
            <div className="grid md:grid-cols-3 px-1">
                {cores.map((core, k) => (
                    <div key={k} className={`p-4 lg:p-7 ${core.color}`} data-aos="fade-up" data-aos-delay={core.aosDelay} >
                        <div className="flex mb-1 md:mb-5 lg:mb-10">
                            <div className="flex-1">
                                <h1 className="text-md sm:text-lg lg:text-xl font-bold mb-2 lg:mb-3">{core.title}</h1>
                                <h1 className="text-sm lg:text-md uppercase font-bold">{core.subtitle}</h1>
                            </div>
                            <h1 className={`text-5xl font-bold font-voltaire ${core.numColor}`}>{k + 1}</h1>
                        </div>
                        <p className="tracking-wide text-sm sm:text-base">{core.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CorePillars
