import delivery from "assets/images/companyOverview/delivery.svg";

const Express = () => {
    const benefits = [
        "Self-built warehousing and logistics network to ensure delivery.",
        "Goods are shipped from the source, no middlemen.",
        "9 hour of online customer service waiting to assist you.",
        "Big data analysis, intelligent product recommendation",
        "system and rights protection system",
        "Strong internal driving force for social e-commerce growth.",
        "Group of professional, full of experiences.",
    ]

    return (
        <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Express Delivery</h1>
            <div className="flex">
                <div className="w-6/12 pt-10">
                    <h1 className="font-bold lg:text-xl">7 Big Benefits:</h1>
                    {benefits.map((b, k) => (
                        <h4 key={k} className="mt-5"> <span className="font-bold">{k + 1}.</span>  {b}</h4>
                    ))}
                </div>
                <img src={delivery} alt="" className="w-6/12" />
            </div>
        </div>
    )
}

export default Express
