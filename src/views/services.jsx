import React from 'react';
import Cover from 'components/sevices/Cover';
import Main from 'components/sevices/Main';
import Secondary from 'components/sevices/Secondary';

const ServicesPage = () => {
    document.title = "K-DATA - Services";

    return (
        <>
            <Cover />

            <Main />

            <Secondary />
        </>
    )
}

export default ServicesPage;