import { useTranslation } from 'react-i18next';

const Description = () => {
    const { t } = useTranslation();
    return (
        <article className="px-3 sm:px-5 lg:px-1">
            <p className="mb-5 text-sm sm:text-base tracking-wide">
                {t("careers_p_1")}
            </p>
            <p className="mb-5 text-sm sm:text-base tracking-wide">
                {t("careers_p_2")}
            </p>
            <p className="mb-5 text-sm sm:text-base tracking-wide">
                {t("careers_p_3")}
            </p>
            <h4>{t("label_interested")} <span className="font-bold">{t("label_come_build")}</span></h4>
        </article>
    )
}

export default Description
