import { useTranslation } from 'react-i18next';
// import { FaCalendarAlt } from "react-icons/fa";
// import { GiArchiveResearch } from 'react-icons/gi';
// import { HiPaperAirplane } from 'react-icons/hi';
// import { VscServerProcess } from 'react-icons/vsc';
import reason1 from "assets/images/about_us/reason-img-1.png"
import reason2 from "assets/images/about_us/reason-img-2.png"
import reason3 from "assets/images/about_us/reason-img-3.png"
import reason4 from "assets/images/about_us/reason-img-4.png"

const AboutWhyChooseUs = () => {
    const { t } = useTranslation();

    // const services = [
    //     { title: t("wcu_reason1_header"), des: t("wcu_reason1_des"), icon: <FaCalendarAlt className="w-full h-full p-4" /> },
    //     { title: t("wcu_reason2_header"), des: t("wcu_reason2_des"), icon: <VscServerProcess className="w-full h-full p-4" /> },
    //     { title: t("wcu_reason3_header"), des: t("wcu_reason3_des"), icon: <GiArchiveResearch className="w-full h-full p-4" /> },
    //     { title: t("wcu_reason4_header"), des: t("wcu_reason4_des"), icon: <HiPaperAirplane className="w-full h-full p-4" /> },
    // ]

    const reasons = [
        { title: t("wcu_reason1_header"), des: t("wcu_reason1_des"), img: reason1, isRightSide: false },
        { title: t("wcu_reason2_header"), des: t("wcu_reason2_des"), img: reason2, isRightSide: true },
        { title: t("wcu_reason3_header"), des: t("wcu_reason3_des"), img: reason3, isRightSide: false },
        { title: t("wcu_reason4_header"), des: t("wcu_reason4_des"), img: reason4, isRightSide: true },
    ]

    return (
        <div className="my-6 py-10">
            <h1 className="text-xl text-center font-bold text-gray-400 uppercase">{t("wcu_header")}</h1>

            <p className="text-3xl text-center font-bold">
                {t("wcu_des")}
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 my-6">
                {
                    services.map((serve, k) => (
                        <ReasonCard key={k} serve={serve} />
                    ))
                }
            </div> */}

            {reasons.map((reason, k) => (
                <ReasonCard key={k} reason={reason} />
            ))}
        </div>
    )
}

// const ReasonCard = ({ serve }) => {
//     return (
//         <div className="flex flex-auto w-full h-full p-4 md:p-8">
//             <div className="border-2 border-red-600 w-40 md:w-full lg:w-32 h-full rounded-lg">
//                 {serve.icon}
//             </div>

//             <div className="px-2 md:px-4">
//                 <p className="text-md md:text-xl font-semibold">
//                     {serve.title}
//                 </p>

//                 <p className="text-md md:text-xl text-gray-400">
//                     {serve.des}
//                 </p>
//             </div>
//         </div>
//     )
// }

const ReasonCard = ({ reason }) => {
    return (
        <div className={`flex flex-col items-center w-full mb-5 lg:mb-0 lg:flex-row lg:gap-20 lg:items-center ${reason.isRightSide ? "lg:flex-row-reverse" : ""} relative`}>
            <img src={reason.img} alt="" className="w-52 sm:w-64 lg:w-96 z-10" />
            <div className={`lg:w-6/12 ${reason.isRightSide ? "flex flex-col lg:items-end" : ""} text-center lg:text-left px-3`}>
                <h1 className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold lg:mb-2">{reason.title}</h1>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-400 ">{reason.des}</p>
            </div>
            <div
                className={`hidden lg:block overflow-hidden bg-red-600 ${reason.isRightSide ? "rounded-l-full -right-96" : "rounded-r-full -left-96"} absolute h-72 w-3/5 top-36`}>
            </div>
        </div>
    )
}

export default AboutWhyChooseUs
