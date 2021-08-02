import Departments from 'components/careers/Departments';
import Description from 'components/careers/Description';
import Cover from 'components/Cover';
import React from 'react';
import careerCoverImg from "assets/images/careers/careers-cover-img.jpg"
import { useTranslation } from 'react-i18next';

const CareersPage = () => {
    const { t } = useTranslation();
    document.title = "A9 - Careers";

    return (
        <main>
            <section className="mb-5">
                <Cover img={careerCoverImg} title={t("label_job_opportunities")} />
            </section>
            <section className="container mx-auto max-w-7xl mb-10 lg:mb-20 px-5 xl:px-0">
                <Description />
            </section>
            <section className="container mx-auto max-w-7xl mb-10 px-5 xl:px-0">
                <Departments />
            </section>
        </main>
    )
}

export default CareersPage;