import Delivery from "./Delivery"
import FastAndFree from "./FastAndFree"
import OnlineShop from "./OnlineShop"

const DutiesCard = () => {
    return (
        <div className="bg-gray-100 p-5 lg:p-10 shadow-md rounded-xl">
            <section className="mb-10">
                <OnlineShop />
            </section>
            <section className="mb-10">
                <Delivery />
            </section>
            <section className="mb-10">
                <FastAndFree />
            </section>
        </div>
    )
}

export default DutiesCard
