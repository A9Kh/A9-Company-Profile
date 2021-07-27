import coverImg from "assets/images/careers/careers-cover-img.jpg"

const Cover = () => {
    return (
        <div >
            {/* decktop view */}
            <div className="lg:block hidden relative">
                <img src={coverImg} alt="" className="object-cover w-full" style={{ height: "70vh", objectPosition: "50% 30%" }} />
                <div className="absolute bottom-20 w-full flex justify-center">
                    <h1 className="px-14 py-5 backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 text-2xl font-bold text-center">Job Opportunities</h1>
                </div>
            </div>

            {/* sm view */}
            <div className="relative hidden sm:block">
                <img src={coverImg} alt="" className="object-cover w-full" style={{ height: "30vh", objectPosition: "50% 30%" }} />
                <div className="absolute bottom-3 w-full flex justify-center">
                    <h1 className="py-2 px-7 backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 text-xl font-bold text-center">Job Opportunities</h1>
                </div>
            </div>

            {/* xs view */}
            <div className="relative sm:hidden">
                <img src={coverImg} alt="" className="object-cover w-full" style={{ height: "20vh", objectPosition: "50% 30%" }} />
                <div className="absolute bottom-3 w-full flex justify-center">
                    <h1 className="py-1 px-5 backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 text-lg font-bold text-center">Job Opportunities</h1>
                </div>
            </div>
        </div>
    )
}

export default Cover
