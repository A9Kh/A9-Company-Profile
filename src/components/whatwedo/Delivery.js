import deliveryMan from "assets/images/whatWeDo/pic-2.jpg"

const Delivery = () => {
    const deliveryFeatures = [
        "- Delivery Time",
        "- Delivery area",
        "- Standard delivery fee",
        "- Product’s receipt",
    ]

    return (
        <div className="flex">
            <div className="w-7/12 pr-7">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">Delivery & Logistics</h1>
                <p className="py-5">
                    We use high-quality express delivery companies to deliver your product,
                    safety guaranteed, deliver to you efficiently, and we don’t support selecting
                    your own express delivery company.
                </p>
                <div className="font-bold text-xl pl-10">
                    {deliveryFeatures.map((df, k) => (
                        <h1 key={k} className="my-2">{df}</h1>
                    ))}
                </div>
            </div>
            <div className="w-5/12 pr-7">
                <img src={deliveryMan} alt="" className="rounded-xl shadow" />
            </div>
        </div>
    )
}

export default Delivery
