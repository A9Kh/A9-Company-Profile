const Cover = ({ img, title }) => {
    return (
        <div>
            {/* decktop view */}
            <div className="lg:block hidden relative">
                <img src={img} alt="" className="object-cover w-full" style={{ height: "50vh", objectPosition: "50% 30%" }} />
                <div className="absolute bottom-10 w-full flex justify-center">
                    <h1 className="px-14 py-4 backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 text-2xl font-bold text-center uppercase">{title}</h1>
                </div>
            </div>

            {/* sm view */}
            <div className="relative hidden sm:block lg:hidden">
                <img src={img} alt="" className="object-cover w-full" style={{ height: "30vh", objectPosition: "50% 30%" }} />
                <div className="absolute bottom-3 w-full flex justify-center">
                    <h1 className="py-2 px-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 text-xl font-bold text-center uppercase">{title}</h1>
                </div>
            </div>

            {/* xs view */}
            <div className="relative sm:hidden">
                <img src={img} alt="" className="object-cover w-full" style={{ height: "20vh", objectPosition: "50% 30%" }} />
                <div className="absolute bottom-3 w-full flex justify-center">
                    <h1 className="py-1 px-5 backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 text-lg font-bold text-center uppercase">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Cover
