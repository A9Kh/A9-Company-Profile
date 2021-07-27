import React from 'react';
import jobdescription from 'components/jobdescription/jobdescripiton';

const jobdescriptionPage = () => {
    document.title = "A9 - What We Do";

    return (
        <main className="h-screen">
            <jobdescription/>
        </main>
    )
}

export default jobdescription;