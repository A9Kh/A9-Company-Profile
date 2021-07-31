import Cover from 'components/Cover';
import Corporate from 'components/investorresources/Corporate';
import FAQs from 'components/investorresources/FAQs';
import React from 'react';
import investorImg from "assets/images/investorResourcse/investorImg.jpg"
import { useTranslation } from 'react-i18next';

const InvestorPage = () => {
    document.title = "A9 - Investor Resources";
    const { t } = useTranslation();

    return (
        <main>
            <section>
                <Cover img={investorImg} title={t("label_investor_overview")} />
            </section>
            <section className="container mx-auto max-w-7xl mb-10 lg:mb-20">
                <Corporate />
            </section>
            <section className="container mx-auto max-w-7xl mb-10">
                <FAQs />
            </section>
        </main>
    );
}

export default InvestorPage;