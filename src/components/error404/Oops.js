import errorArt from "assets/images/404/404-Error.gif"
import { Link } from "react-router-dom"

const Oops = () => {
    return (
        <div className="flex flex-col items-center">
            <img src={errorArt} alt="" className="w-4/12 h-80 object-cover" />
            <h1 className="uppercase font-bold text-2xl text-primary-300">oops! sorry</h1>
            <span className="mt-3">The page you tried to reach is either under maintenace,</span>
            <span>under construction or doesn't exist.</span>
            <Link className="py-3 px-7 rounded-full text-white bg-primary-300 hover:bg-primary-200 my-4" to="/">Go Home</Link>
        </div>
    )
}

export default Oops
