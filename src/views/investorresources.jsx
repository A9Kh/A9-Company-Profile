import Cover from 'components/Cover';
import Corporate from 'components/investorresources/Corporate';
import FAQs from 'components/investorresources/FAQs';
import React from 'react';
import { useTranslation } from 'react-i18next';

const InvestorPage = () => {
    document.title = "A9 - Investor Resources";
    const { t } = useTranslation();

    return (
        <main>
            <section>
                <Cover img="http://www.sbsph.com/wp-content/uploads/2018/04/investor-relations.jpg" title={t("label_investor_overview")} />
            </section>
            <section className="container mx-auto max-w-7xl mb-12 sm:mb-16 lg:mb-20">
                <Corporate />
            </section>
            <section className="container mx-auto max-w-7xl mb-10">
                <FAQs />
            </section>
        </main>
    );
}

export default InvestorPage;