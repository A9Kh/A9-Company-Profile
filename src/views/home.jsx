import React from 'react';
import Service from 'components/home/Service';
import Projects from 'components/home/Project';
import Tagline from 'components/home/Tagline';
import Work from 'components/home/Work';
import Main from 'components/home/Main';

const HomePage = () => {
    document.title = "K-DATA - Home";

    return (
        <div className="mt-16">
            <div className="bg-gray-0">
                <Main />
            </div>

            <div className="bg-gray-200 text-black">
                <Tagline />
            </div>

            <div className="bg-gray-0">
                <Service />
            </div>

            <div className="bg-gray-200">
                <Work />
            </div>

            <div className="bg-gray-0">
                <Projects />
            </div>
        </div>
    )
}

export default HomePage;
