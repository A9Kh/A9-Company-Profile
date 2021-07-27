import Cover from 'components/Cover';
import Corporate from 'components/investorresources/Corporate';
import FAQs from 'components/investorresources/FAQs';
import React from 'react';

const InvestorPage = () => {
    document.title = "A9 - Investor Resources";

    return (
        <main>
            <section>
                <Cover img="http://www.sbsph.com/wp-content/uploads/2018/04/investor-relations.jpg" title="INVESTOR OVERVIEW" />
            </section>
            <section className="container mx-auto max-w-7xl mb-10">
                <Corporate />
            </section>
            <section className="container mx-auto max-w-7xl mb-10">
                <FAQs />
            </section>
        </main>
    );
}

export default InvestorPage;