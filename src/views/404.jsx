import Oops from 'components/error404/Oops';
import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
    document.title = "A9 - 404 Error";
    // const { t } = useTranslation();

    return (
        <main className="container mx-auto max-w-7xl px-5 xl:px-0">
            <section>
                <Oops />
            </section>
        </main>
    )
}

export default ErrorPage;
