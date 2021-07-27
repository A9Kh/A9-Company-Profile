import { Link } from "react-router-dom"

const Departments = () => {
    const dpm = [
        {
            title: "COMMERCIAL",
            img: "https://www.investigate.uk/wp-content/uploads/2020/10/corporate-commercia-boardroom-meetingl-1024x683.jpg",
        },
        {
            title: "MARKETING",
            img: "https://www.digitalmenta.com/wp-content/uploads/2019/10/La-revolucion-del-marketing-4-0.jpg",
        },
        {
            title: "TECHNOLOGY, AI & PRODUCT",
            img: "https://www.techfunnel.com/wp-content/uploads/2018/04/Benefits-of-Digital-Technology-in-Business.jpg",
        },
        {
            title: "STRATEGY & MANAGEMENT",
            img: "https://www.vidyard.com/media/video-marketing-strategy-1920x1080.jpg",
        },
        {
            title: "SUPPLY CHAIN & LOGISTICS",
            img: "https://cdn.corporatefinanceinstitute.com/assets/imports-and-exports.jpeg",
        },
        {
            title: "CUSTOMMER CARE",
            img: "https://miro.medium.com/max/800/1*5HMJhrWwIu8GM5TtBAKciQ.png",
        },
    ]

    return (
        <div className="px-3 sm:px-5 lg:px-1">
            <h1 className="font-bold uppercase mb-1 sm:mb-3 lg:mb-5 text-lg sm:text-xl lg:text-2xl">departments</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10">
                {dpm.map((d, k) => (
                    <Link to={`/job/${k}`} key={k} className="flex">
                        <div className="flex flex-col">
                            <img src={d.img} alt="" className="object-cover border border-black flex-1" />
                            <h4 className="uppercase font-bold text-base sm:text-lg lg:text-xl mt-2">{d.title}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Departments
