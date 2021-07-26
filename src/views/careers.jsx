import Cover from 'components/careers/Cover';
import Departments from 'components/careers/Departments';
import Description from 'components/careers/Description';
import React from 'react';

const CareersPage = () => {
    document.title = "A9 - Careers";

    return (
        <main>
            <section className="mb-5">
                <Cover />
            </section>
            <section className="container mx-auto max-w-7xl mb-10">
                <Description />
            </section>
            <section className="container mx-auto max-w-7xl">
                <Departments />
            </section>
        </main>
    )
}

export default CareersPage;