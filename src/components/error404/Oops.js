import errorArt from "assets/images/404/404-Error.gif"

const Oops = () => {
    return (
        <div className="flex flex-col items-center">
            <img src={errorArt} alt="" className="w-4/12 h-80 object-cover" />
            <h1 className="uppercase font-bold text-2xl mt-10 text-primary-300">oops! sorry</h1>
            <span className="mt-5">The page you tried to reach is either under maintenace,</span>
            <span className="mb-8">under construction or doesn't exist.</span>
        </div>
    )
}

export default Oops
