import motoMan from "assets/images/whatWeDo/pic-3.jpg"

const FastAndFree = () => {
    const pionts = [
        "A9 sold products will be delivered directly from \
 the warehouse closest to you, on normal condition \
 after your payment, all products will be out for \
 delivery within 72 hours.",
        "Support every area in Cambodia",
        "A9 store-owned product shipping is free, \
 the postage of third - party merchants will be \
 charged according to the information displayed \
 on the order page below.",
    ]

    return (
        <div className="flex">
            <img src={motoMan} alt="" className="w-8/12" />
            <div className="w-4/12 pt-16">
                <ul className="list-disc">
                    {pionts.map((p, k) => (
                        <li key={k}>{p}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FastAndFree
