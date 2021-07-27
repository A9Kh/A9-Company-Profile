import ourBusinessImg from "assets/images/aboutA9Mall/import_export.jpg"

const AboutA9Mall = () => {
    return (
        <div>
            <h1 className="font-bold text-lg mb-1 sm:text-xl sm:mb-3 lg:text-2xl lg:mb-5 px-3 sm:px-5 lg:px-1">About A9 Mall</h1>
            <article className="mb-10 px-3 sm:px-5 lg:px-1">
                <p className="text-sm lg:text-base">
                    Founded in 2012, A9 Group is Southeast Asia’s leading eCommerce platform. With a presence in six countries – Indonesia, Malaysia,
                    the Philippines, Singapore, Thailand and Vietnam. we connect this vast and diverse region through our technology, logistics and payments
                    capabilities. Today, we have the largest selection of brands and sellers, and by 2030, we aim to serve 300 million customers. In 2016, A9 Mall
                    became the regional flagship of the Alibaba Group, and is backed by Alibaba’s best-in-class technology infrastructure.
                </p>
            </article>
            <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-6/12 hidden lg:block">
                    <img src={ourBusinessImg} alt="" className="object-cover" style={{ height: "600px" }} />
                </div>
                <div className="w-full lg:hidden">
                    <img src={ourBusinessImg} alt="" className="object-cover" />
                </div>
                <div className="px-5 sm:px-10 lg:px-0 w-full lg:w-6/12 flex items-center">
                    <div className="p-5 sm:p-7 lg:p-10 text-white bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200">
                        <h1 className="uppercase mb-1 sm:mb-3 lg:mb-5 text-lg sm:text-xl lg:text-2xl font-bold">our business</h1>
                        <h1 className="mb-1 sm:mb-3 text-base sm:text-lg lg:text-xl font-bold">A9 Marketplace</h1>
                        <article>
                            <p className="text-sm sm:text-bace lg:text-lg tracking-wide">
                                A9’s Marketplace gives retailers instant access to millions
                                of new customers. Launched on the Lazada platform in
                                2019, A9 Marketplace provides a full suite of services,
                                from secure payment options and customer care support,
                                to a wide distribution network and marketing analytics,
                                aimed at enabling our sellers to sell more. A9 Marketplace
                                merchants sell a wide range of products across 18
                                categories, including fast-growing offerings in health
                                and beauty and fashion, as well as home & living, mother
                                & baby, mobile devices and home appliances, among others.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutA9Mall
