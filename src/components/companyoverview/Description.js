import map_pic from "assets/images/companyOverview/company_overview_1.jpg";
import { useTranslation } from 'react-i18next';

const Description = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                {t("label_company_overview")}
            </h1>
            <div className="flex flex-col items-center lg:items-start lg:flex-row mt-5">
                <img src={map_pic} alt="" className="object-cover w-10/12 sm:w-8/12 mb-5 lg:mt-0 lg:w-6/12 lg:mr-10" />
                <article className="lg:w-6/12 tracking-wide text-sm sm:text-base">
                    <p className="mb-5">
                        <span className="font-bold text-primary-300">A9 Online KH CO., LTD.</span>
                        {t("companyoverview_p_1")}
                    </p>
                    <p>
                        {t("companyoverview_p_2")}
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Description
