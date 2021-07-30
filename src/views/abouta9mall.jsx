import React from 'react';
import AboutA9 from 'components/abouta9mall/AboutA9';
import PressReleases from 'components/abouta9mall/PressReleases';
import CorePillars from 'components/abouta9mall/CorePillars';

const AboutA9Page = () => {
    document.title = "A9 - About Us";

    return (
        <main className="container mx-auto max-w-7xl">
            <section className="mt-4 sm:mt-7 lg:mt-10 mb-10 lg:mb-20">
                <AboutA9 />
            </section>
            <section className="mb-10 lg:mb-20">
                <PressReleases />
            </section>
            <section className="mb-10">
                <CorePillars />
            </section>
        </main>
    )
}

export default AboutA9Page;