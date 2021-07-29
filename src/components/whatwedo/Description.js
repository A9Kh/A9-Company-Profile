import { useTranslation } from 'react-i18next';

const Description = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">{t("label_what_we_do")}</h1>
            <article className="mt-1 sm:mt-3 lg:mt-5 text-sm sm:text-base tracking-wide">
                <p>
                    {t("what_we_do_p")}
                </p>
            </article>
        </div>
    )
}

export default Description
