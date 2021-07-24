import React from 'react';

const ImageCard = ({ title, note, imageName }) => {
    return (
        <div className="p-4 h-72 md:h-72 lg:h-80 transition transform hover:-translate-y-4 duration-500 hover:scale-100 ease-in-out">
            <div className="group w-full h-full relative rounded-md">
                <img src={imageName} alt="photos" className="shadow-xl border-2 border-black border-opacity-20 group-hover:border-black object-center rounded-md w-full h-full object-cover transition duration-500 ease-in-out group-hover:shadow-2xl" />

                <div className="bg-opacity-0 group-hover:bg-opacity-50 bg-black text-white duration-300 absolute inset-px z-10 flex flex-col p-6 justify-end items-start cursor-default rounded font-bold trancking-wider">
                    <div className="opacity-0 group-hover:opacity-100 text-xl md:text-2xl lg:text-2xl">
                        {title}
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 text-md mt-4 md:mt-2 lg:mt-0">
                        {note}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;