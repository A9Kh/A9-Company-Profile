import map_pic from "assets/images/companyOverview/company_overview_1.jpg";

const Description = () => {
    return (
        <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                Company Overview
            </h1>
            <div className="flex mt-5">
                <img src={map_pic} alt="" className="object-cover w-6/12 pr-10" />
                <article className="w-6/12">
                    <p className="mb-5">
                        <span className="font-bold text-primary-300">A9 Online KH CO., LTD.</span> focuses on social e-commerce,
                        while also offer product purchasing service from China
                        such as Taobao, Tian Mao, Jin Dong and other shopping
                        app platform, with years of experience in product trade
                        both domestic and abroad, which allows us to fully
                        understand the market demands of manufacturers and
                        brand owners, committed to building brands for companies
                        and businesses both domestic and abroad.
                    </p>
                    <p>
                        A9 integrates high-quality supply chain resources, with the
                        mission of "determining production according to needs and
                        rapid turnover", using the Internet and big data technology
                        to empower the supply side, strictly selected and high quality,
                        cost-effective products, build a warehouse, logistic system,
                        whole-process data monitoring for product and information
                        distribution, enabling services for many and multiple types of
                        enterprises in the food, clothing, electronics, and retail industries
                        at home and abroad.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Description
