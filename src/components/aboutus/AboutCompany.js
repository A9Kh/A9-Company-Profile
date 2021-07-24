import { useTranslation } from 'react-i18next';

const AboutCompany = () => {
    const { t } = useTranslation();

    return (
        <article className="my-6 px-4 lg:px-2">
            <p className="text-xl my-4 font-medium tracking-wider md:text-justify">
                {t("about_company_paragraph_1")}
            </p>

            <p className="my-4 text-gray-600 font-medium text-lg md:text-justify">
                {t("about_company_paragraph_2")}
            </p>
        </article>
    )
}

export default AboutCompany
