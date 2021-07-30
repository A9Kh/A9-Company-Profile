import { useTranslation } from "react-i18next";

const Description = () => {
    const { t } = useTranslation();

    const descs = [
        "job_des_1",
        "job_des_2",
        "job_des_3",
        "job_des_4",
        "job_des_5",
        "job_des_6",
        "job_des_7",
    ];
    const reqs = [
        "job_req_1",
        "job_req_2",
        "job_req_3",
        "job_req_4",
        "job_req_5",
        "job_req_6",
    ]

    return (
        <div>
            <h1 className="uppercase font-bold text-lg sm:text-xl lg:text-2xl"> {t("label_commercial_department")} </h1>
            <h1 className="uppercase font-bold text-base sm:text-lg lg:text-xl my-2 sm:my-3 lg:my-5">{t("label_job_description")}</h1>
            <p className="text-sm sm:text-base">{t("label_intro_des")}: </p>
            <ul className="list-disc pl-5 mb-10 text-sm sm:text-base">
                {descs.map((des, k) => (
                    <li key={k}>{t(des)}</li>
                ))}
            </ul>
            <h1 className="uppercase font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 lg:mb-5">{t("label_job_requirements")}</h1>
            <ul className="list-disc pl-5 text-sm sm:text-base">
                {reqs.map((req, k) => (
                    <li key={k}>{t(req)}</li>
                ))}
            </ul>
        </div>
    )
}

export default Description
