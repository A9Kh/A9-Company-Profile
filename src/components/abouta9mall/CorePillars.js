const CorePillars = () => {
    const cores = [
        {
            title: "Logistics",
            subtitle: "we get it there",
            number: "1",
            body: "With end-to-end logistics capabilities and complete control over our supply chain,\
                    virtually any product is a click away. \
                    We have fulfillment centres across 17 \
                    Southeast Asian cities, and our investment \
                    in warehouses, sorting centres, and digital \
                    technologies complement our partner \
                    network and our cross- border and last mile \
                    arrangements in each country.",
            color: "bg-primary-100",
            numColor: "text-green-800",
        },
        {
            title: "Technology",
            subtitle: "a smarter way to shop",
            number: "2",
            body: "At Lazada, we harness both existing and \
                    emerging technologies to redefine the retail \
                    experience.Leveraging data in real time allows \
                    us to quickly adapt to changing demands and \
                    conditions.We connect consumers to brands,\
                                create customised experiences, and have \
                    evolved into a retail destination that customers \
                    come to for both shopping and entertainment. \
                    And we continue to push the boundaries. \
                    Project Voyager, our technology stack jointly \
                    developed with Alibaba, powers A9 with \
                    the most scalable and competitive product \
                    and technology solutions for the next decade.",
            color: "bg-primary-200",
            numColor: "text-white",
        },
        {
            title: "Payments",
            subtitle: "safe, seamless transactions",
            number: "3",
            body: "Ensuring secure and seamless transactions \
                    guides the development of Southeast Asia’s \
                    most secure payments and financial services \
                    infrastructure.In a region still at varying stages \
                    of e- payment and eCommerce adoption, we’ve \
                    evolved a suite of options that cater to existing \
                    preferences while easing customers into digital\
                        payments through intuitive solutions they can\
                        trust",
            color: "bg-primary-300",
            numColor: "text-green-300",
        },
    ]

    return (
        <div className="px-3 sm:px-5 lg:px-1">
            <h1 className="uppercase mb-1 sm:mb-3 lg:mb-5 text:lg sm:text-xl lg:text-2xl font-bold">our core pillers</h1>
            <div className="grid md:grid-cols-3 px-1">
                {cores.map((core, k) => (
                    <div key={k} className={`p-4 lg:p-7 ${core.color}`}>
                        <div className="flex mb-1 md:mb-5 lg:mb-10">
                            <div className="flex-1">
                                <h1 className="text-md sm:text-lg lg:text-xl font-bold mb-2 lg:mb-3">{core.title}</h1>
                                <h1 className="text-sm lg:text-md uppercase font-bold">{core.subtitle}</h1>
                            </div>
                            <h1 className={`text-5xl font-bold font-voltaire ${core.numColor}`}>{core.number}</h1>
                        </div>
                        <p className="tracking-wide text-sm sm:text-base">{core.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CorePillars
