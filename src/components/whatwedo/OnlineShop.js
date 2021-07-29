import a9Web from "assets/images/whatWeDo/pic-1.jpg";
import { ImArrowRight } from "react-icons/im"

const OnlineShop = () => {
    return (
        <div className="flex">
            <div className="w-6/12 px-16">
                <img src={a9Web} alt="" className="object-contain shadow rounded-lg" />
            </div>
            <div className="w-6/12 pt-10">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">A9 Online Shopping</h1>
                <article className="my-10">
                    <p className="mb-5">
                        We work every day to earn and keep customers’ trust.
                        We do this through convenient services and the thousands
                        of small and medium businesses that add significantly to our
                        product selection.
                    </p>
                    <p>
                        Teams around the world invent on behalf of our customers every
                        day to meet their desire for lower prices, better selection, and
                        convenient services. One way we guarantee a wide selection of
                        products is through the 1.7 million small and medium businesses
                        around the world selling on Amazon.com and offering more options
                        for customers.
                    </p>
                </article>
                <button className="flex bg-primary-300 px-10 py-3 rounded-full items-center gap-5 text-white hover:bg-primary-200">Visit our Website <ImArrowRight /> </button>
            </div>
        </div>
    )
}

export default OnlineShop
