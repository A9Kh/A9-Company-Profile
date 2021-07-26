import coverImg from "assets/images/careers/careers-cover-img.jpg"

const Cover = () => {
    return (
        <div className="relative">
            <img src={coverImg} alt="" className="object-cover w-full" style={{ height: "70vh", objectPosition: "50% 30%" }} />
            <div className="absolute bottom-20 w-full flex justify-center">
                <h1 className="px-14 py-5 backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 text-3xl font-bold text-center">Job Opportunities</h1>
            </div>
        </div>
    )
}

export default Cover
