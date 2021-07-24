import React from 'react';
import Tagline from 'components/sevices/Tagline';
import Maincard from 'components/sevices/mainCard';
import { useTranslation } from 'react-i18next';

// Icon
import { CgWebsite } from "react-icons/cg";
import { IoSettingsOutline, IoDesktopOutline, IoGridOutline, IoTrendingUp, IoWalletOutline, } from "react-icons/io5";

//Image
import Investment from "assets/images/services/Investment.png"
import Maintenance from "assets/images/services/Maintenance.png"
import Analytic from "assets/images/services/Business_analytics.png"
import WebDev from "assets/images/services/Web_Dev.png"
import System from "assets/images/services/system.png"
import Window from "assets/images/services/window_app.png"

const content = [
    {
        title: "Maintain & Support",
        icon: <IoSettingsOutline />,
        decs: "We are committed to service excellence and maintaining lasting partners with our customers. We will continue evolve at the same place as your business.",
        img: Maintenance,
    },
    {
        title: "Business Analytics",
        icon: <IoTrendingUp />,
        decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan efficitur risus, sit.",
        img: Analytic,
    },
    {
        title: "Investment Planing",
        icon: <IoWalletOutline />,
        decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan efficitur risus, sit.",
        img: Investment,
    },
    {
        title: "Web Development",
        icon: <CgWebsite />,
        decs: "Our company also design and develop a variety of websites using the lasted and proven web technologies.",
        img: WebDev,
    },
    {
        title: "Window Application",
        icon: <IoGridOutline />,
        decs: "We design and develop a variety of applications for windows including specialized and custom enterprise software.",
        img: Window,
    },
    {
        title: "POS system",
        icon: <IoDesktopOutline />,
        decs: "We provide top-notch Point of Sales solution for small and medium businesses.",
        img: System
    },
];

const Main = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto max-w-7xl p-4">
            <div className="grid justify-items-center sm:justify-items-start">
                <p className="text-4xl font-bold p-4 font-mono">
                    {t("main_title")}
                </p>
            </div>

            <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 mx-auto ">
                {
                    content.map((content, p) =>
                        <Maincard icon={content.icon} title={t(content.title)} desc={t(content.decs)} key={p} img={content.img} />
                    )
                }
            </div>

            <Tagline />
        </div>
    )
}

export default Main;