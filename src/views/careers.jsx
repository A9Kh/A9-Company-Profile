import Departments from 'components/careers/Departments';
import Description from 'components/careers/Description';
import Cover from 'components/Cover';
import React from 'react';
import careerCoverImg from "assets/images/careers/careers-cover-img.jpg"

const CareersPage = () => {
    document.title = "A9 - Careers";

    return (
        <main>
            <section className="mb-5">
                <Cover img={careerCoverImg} title="job Opportunities" />
            </section>
            <section className="container mx-auto max-w-7xl mb-10">
                <Description />
            </section>
            <section className="container mx-auto max-w-7xl mb-10">
                <Departments />
            </section>
        </main>
    )
}

export default CareersPage;