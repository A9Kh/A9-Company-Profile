import business from "assets/images/companyOverview/business.jpg";

const SuperCharge = () => {
    const countries = ["Cambodia", "Thailand", "Thailand", "China", "Singapore", "Singapore",]

    return (
        <div className="flex text-white">
            <img src={business} alt="" className="object-cover w-6/12" />
            <div className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 p-16">
                <h1 className="uppercase text-lg sm:text-xl lg:text-2xl font-bold">supercharge your business</h1>
                <article className="mt-5">
                    <p>
                        With A9, any business can scale and become
                        a super eBusiness. Let our digital capabilities enable
                        your ambitions as you grow in the region. Find out
                        more about how you can grow your business with A9.
                    </p>
                </article>
                <div className="grid grid-cols-3 mt-7 gap-5">
                    {countries.map((country, k) => (
                        <span key={k}>{country}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SuperCharge
