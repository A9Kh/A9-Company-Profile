import handsShake from "assets/images/investorResourcse/hands-shake.png"
import handOutPlant from "assets/images/investorResourcse/hand-out-plant.png"
import moneyPlant from "assets/images/investorResourcse/money-plant.png"

const Corporate = () => {
    const reasons = [
        { img: handsShake, text: "We build deep, solution oriented relationships with our customers." },
        { img: moneyPlant, text: "We have doubled our business every five years.", isRightSide: true },
        { img: handOutPlant, text: "We are committed to internal and external growth." },
    ]

    return (
        <div className="mt-4 sm:mt-7 lg:mt-10 px-3 sm:px-5 lg:px-1">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-center font-bold mb-1 sm:mb-3 lg:mb-5">Corporate Profile</h1>
            <article>
                <p className="text-sm sm:text-base">
                    A9 Mall is a leading products and service distributor that adds value and total cost savings solutions to industrial customers
                    throughout the United States, Canada and Sonora, Mexico in virtually every industry since 1908. A9 provides innovative
                    pumping solutions, supply chain services and maintenance, repair, operating and production ("MROP") services that
                    emphasize and utilize A9’s vast product knowledge and technical expertise in rotating equipment, bearings, power
                    transmission, industrial supplies and safety products and services. A9's breadth of MROP products and service solutions
                    allows A9 to be flexible and customer driven, creating competitive advantages for our customers. A9’s business segments
                    include Service Centers, Innovative Pumping Solutions and Supply Chain Services. For more information, go to <span className="font-bold">a9online.com</span>.
                </p>
            </article>
            <div className="mt-5 grid gap-5 lg:gap-0 lg:grid-cols-3">
                {reasons.map((reason, k) => (
                    <div key={k} className={`flex flex-row lg:flex-col items-center ${reason.isRightSide ? "flex-row-reverse" : ""}`}>
                        <img src={reason.img} alt="" className="w-20 sm:w-28 lg:w-40 p-3 border border-primary-300 rounded-full" />
                        <h1 className={`lg:text-center text-md sm:text-lg lg:text-xl font-bold px-2 sm:px-5 lg:mt-5 lg:px-16 ${reason.isRightSide ? "text-right" : ""}`}>{reason.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Corporate
