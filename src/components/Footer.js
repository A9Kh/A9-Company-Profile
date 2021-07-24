import { FaEnvelope, FaFacebookSquare, FaGithub, FaGoogle, FaLandmark, FaPhone } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const companies = [
    { name: "services", to: "/services" },
    { name: "projects", to: "/projects" },
    { name: "clients", to: "/clients" },
    { name: "aboutus", to: "/aboutus" },
];

const service = [
    { name: "Point of Sale (POS) System", to: "/" },
    { name: "Custom Enterpise System", to: "/" },
    { name: "Web Design & Development", to: "/" },
    { name: "E-Commerce", to: "/" },
]

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 pt-8 text-white">
            <div className="container md:mx-auto max-w-7xl mx-auto px-6 lg:p-6 xl:p-0">
                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    <div>
                        {/* <svg className="relative -left-14 mb-0 w-36 h-auto md:w-56 p-0 rounded-lg shadow-2xl fill-current text-white" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
                            <text className="text-7xl" transform="translate(174.78 83.04)">data</text>
                            <path d="M172.71,78.16l-2-2L143.18,48.62l-2.08,2.07-1.38,1.39L163.85,76.2l2,2H146.22l-2-2L129.93,61.87l-1.38-1.38,1.38-1.38,7-7,1.38-1.39,1.38-1.38,2.08-2.07,1.38-1.38,27.58-27.59,2-1.95,2-2,2.93-2.94H144.19l-2.93,2.94-1.95,2-2,1.95-9,9-2,2V11.43H102.79V41.64l5.6,5.6-5.6,5.6V83h23.62V68l-2.93-2.94-2-2v15H107.67V54.86l2.79-2.78,1.38-1.39,2.08-2.07,1.38-1.38,1.38-1.38,7-7-1.38-1.38-2.08-2.08-7,7-1.38,1.38-1.38-1.38-2.79-2.78V16.32h13.86V33.88l.11.11,2.07,2.07,1.38,1.39,1.32,1.32.06.06,7,7,1.38,1.38-1.38,1.38-7,7-.06.06L125.09,57l-1.38-1.38-7-7L115.3,50l-2.08,2.08,7,7,1.27,1.27.11.11,1.84,1.84,2.93,2.93,2,2,9,9,2,2,1.95,2L144.19,83H177.6l-2.93-2.93ZM129.93,35.37,128.55,34l1.38-1.38,14.33-14.34,2-1.95H165.8l-2,1.95L139.72,42.4l-1.38,1.38L137,42.4Z" />
                            <polygon points="107.67 47.95 108.39 47.24 107.67 46.53 107 45.86 102.79 41.64 102.79 52.84 107 48.62 107.67 47.95" />
                            <polygon points="107.67 46.53 108.39 47.24 102.79 41.64 107 45.86 107.67 46.53" />
                            <polygon points="107.67 47.95 107 48.62 102.79 52.84 108.39 47.24 107.67 47.95" />
                        </svg> */}
                        <img className="mb-4 p-2 w-20 h-auto md:w-16" src="" alt=" logo" />

                        <div className="mt-2"> {t("inquiry")} </div>
                        <div className="mb-2"> info@kdata.com </div>

                        <div className="flex flex-row mt-4">
                            <FaFacebookSquare size="24" className="mr-4 hover:shadow-lg transform transition duration-300 hover:scale-125 rounded-sm hover:text-red-600" />
                            <FaGoogle size="24" className="mr-4 hover:shadow-lg transform transition duration-300 hover:scale-125 rounded-sm hover:text-red-600" />
                            <FaGithub size="24" className="mr-4 hover:shadow-lg transform transition duration-300 hover:scale-125 rounded-sm hover:text-red-600" />
                        </div>
                    </div>

                    <div className="md:mt-0 lg:mt-0 mt-8 ">
                        <div className="mb-8 font-bold">  {t("specialize_in")}</div>

                        {
                            service.map((p, k) =>
                                <div className="my-3" key={k}>
                                    <Link to={p.to} className=" hover:text-red-600 font-medium">{p.name}</Link>
                                </div>
                            )
                        }
                    </div>

                    <div className="md:mt-8 lg:mt-0 mt-8">
                        <div className="mb-8 font-bold"> {t("company")} </div>

                        {
                            companies.map((p, k) =>
                                <div className="my-3" key={k}>
                                    <Link to={p.to} className=" hover:text-red-600 font-medium">{t(p.name)}</Link>
                                </div>
                            )
                        }
                    </div>

                    <div className="md:mt-8 lg:mt-0 mt-8">
                        <div className="mb-8 font-bold"> {t("findus")} </div>
                        <div>
                            <div className="flex flex-auto items-baseline space-y-0 space-x-4">
                                <div><FaPhone /></div>
                                <div>(+855) 12 569 956</div>
                            </div>

                            <div className="flex flex-auto items-baseline space-y-2 space-x-4">
                                <div><FaPhone /></div>
                                <div>(+855) 12 569 956</div>
                            </div>

                            <div className="flex flex-auto items-baseline space-y-2 space-x-4">
                                <div><FaEnvelope /></div>
                                <div>info@kdata.com</div>
                            </div>

                            <div className="flex flex-auto items-baseline space-y-2 space-x-4">
                                <div><FaLandmark /></div>
                                <div>Training Center, M Square Building, Czech Republic Blvd (169)</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="h-px bg-gray-500 mt-3"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 py-2 md:py-8 font-semibold tracking-wide">
                    <div className="justify-self-center mt-4 md:m-0 md:justify-self-start">Copyright &#169; K-DATA {new Date().toISOString().substring(0, 4)}</div>
                    <div className="justify-self-center mb-4 md:m-0 md:justify-self-end">All right reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;