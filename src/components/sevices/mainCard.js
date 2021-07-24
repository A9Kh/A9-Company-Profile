import React from 'react';


const mainCard = (props) => {
    const { icon, title, desc, img } = props;
    return (
        <>
            {/* <div className="max-w-md py-4 px-8 rounded-lg my-5 m-5 hover:bg-gray-50 hover:shadow-sm">
                <div className=" p-5 pl-2 text-5xl grid justify-items-center md:justify-items-start text-red-700">
                    {icon}
                </div>
                <h2 className=" text-black tracking-wide text-2xl font-extrabold font-mono grid justify-items-center md:justify-items-start">
                    {title}
                </h2>
                <p className="mt-2 mb-5 text-gray-600 font-sans font-semibold">{desc}</p>
            </div> */}

            <div className="w-full h-90 group relative rounded  cursor-default">
                <div className="w-84 h-full grid justify-items-center md:justify-items-center lg:justify-items-start">
                    <div className="p-2 py-4  text-5xl  text-red-700">
                        {icon}
                    </div>
                    <div className=" text-black tracking-wide text-2xl font-extrabold font-mono p-2">{title}</div>
                    <div className=" text-gray-600 font-sans font-semibold p-2">{desc}</div>
                </div>
                <div>
                    <img src={img} alt="" className="opacity-0 group-hover:opacity-100 object-cover object-center bg-opacity-0 group-hover:bg-opacity-50 absolute flex flex-col inset-0 rounded-md transition duration-700 ease-in-out w-full h-full hover:border-gray-300 shadow-sm" />
                </div>
            </div>
        </>
    )
}

export default mainCard;