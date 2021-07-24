import React from 'react';

const secondCard = (props) => {
    const { icon, title, desc } = props;
    return (
        <>
            <div className="max-w-sm px-8 rounded-lg py-5 hover:bg-gray-100 hover:shadow-sm duration-500"  data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                <ul className="flex space-x-2">
                    <li className="text-4xl m-5 ml-2 text-red-700 ">
                        {icon}
                    </li>

                    <li className="text-xl m-5 p-1 font-bold font-mono">
                        <h2>{title}</h2>
                    </li>
                </ul>
                <p className="font-sans font-medium text-gray-600">
                    {desc}
                </p>
            </div>
        </>
    )
}

export default secondCard;