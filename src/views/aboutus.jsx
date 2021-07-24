import React from 'react';
import AboutCompany from "components/aboutus/AboutCompany"
import AboutTeam from "components/aboutus/AboutTeam"
import AboutWhyChooseUs from 'components/aboutus/AboutWhyChooseUs';
import Cover from "components/aboutus/Cover"

const AboutPage = () => {
    document.title = "K-DATA - About Us";

    return (
        <main>
            <section>
                <Cover />
            </section>

            <section className="container mx-auto max-w-7xl">
                <AboutCompany />
            </section>

            <section className="container mx-auto max-w-7xl">
                <AboutTeam />
            </section>

            <section className="container mx-auto max-w-7xl">
                <AboutWhyChooseUs />
            </section>
        </main>
    )
}

export default AboutPage;