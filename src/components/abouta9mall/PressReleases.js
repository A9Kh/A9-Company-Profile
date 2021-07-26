import { CgChevronLeft, CgChevronRight } from "react-icons/cg"
import { Link } from "react-router-dom"

const PressReleases = () => {
    const releases = [
        { date: "22 August 2020", title: "A9 Mall Appoints Chun Li as Group CEO", actions: "Download PDF" },
        { date: "22 October 2020", title: "First Malaysian Brand debuts on Lazada X Tmall Global “Sell to China” Partnership Program", actions: "Download PDF" },
        { date: "22 August 2020", title: "A9 Mall Appoints Chun Li as Group CEO", actions: "Download PDF" },
        { date: "22 August 2020", title: "First Malaysian Brand debuts on Lazada X Tmall Global “Sell to China” Partnership Program", actions: "Download PDF" },
        { date: "22 August 2020", title: "A9 Mall Appoints Chun Li as Group CEO", actions: "Download PDF" },
        { date: "22 August 2020", title: "First Malaysian Brand debuts on Lazada X Tmall Global “Sell to China” Partnership Program", actions: "Download PDF" },
    ]

    return (
        <div>
            <h1 className="uppercase font-bold mb-1 sm:mb-3 lg:mb-5 text-lg sm:text-xl lg:text-2xl px-3 sm:px-5 lg:px-1">press releases</h1>
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl mb-1 lg:mb-3 px-3 sm:px-5 lg:px-1">2020</h1>
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-7 lg:gap-10 px-3 sm:px-5 lg:px-1">
                {releases.map((rl, k) => (
                    <div key={k} className="p-5 border border-black flex flex-col">
                        <h1 className="mb-1 sm:mb-3 lg:mb-5" style={{ color: "#0EA5E9" }}>{rl.date}</h1>
                        <h1 className="mb-1 sm:mb-3 lg:mb-5 font-bold">{rl.title}</h1>
                        <Link to="#" style={{ color: "#0EA5E9" }}>{rl.actions}</Link>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-1 sm:mt:3 lg:mt-5">
                <CgChevronLeft className="text-5xl mr-8 sm:mr-14 lg:mr-20 p-3 rounded-full hover:bg-gray-200 cursor-pointer" />
                <h1>
                    <span className="py-1 px-2 border border-black rounded-md">1</span> <span className="mx-3">of</span> <span>3</span>
                </h1>
                <CgChevronRight className="text-5xl ml-8 sm:ml-14 lg:ml-20 p-3 rounded-full hover:bg-gray-200 cursor-pointer" />
            </div>
        </div>
    )
}

export default PressReleases
