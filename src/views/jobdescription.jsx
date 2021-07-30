import AppForm from 'components/jobdescription/AppForm';
import Description from 'components/jobdescription/Description';
import React from 'react';

const jobdescription = () => {
    return (
        <main className="container mx-auto max-w-7xl px-3 sm:px-5 lg:px-1">
            <section className="mt-4 sm:mt-7 lg:mt-10 mb-10 lg:mb-20">
                <Description />
            </section>
            <section className="mb-10">
                <AppForm />
            </section>
        </main>
    )
}
export default jobdescription;
