import React from 'react';
import Secondcard from 'components/sevices/secondCard';
// Icon
import { GiJumpAcross } from "react-icons/gi";
import { AiOutlineBank } from "react-icons/ai";
import { IoBarChartOutline, IoFolderOutline, IoCodeSlashOutline, IoRibbonOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const content = [
    {
        title: "second_card_title1",
        icon: <IoBarChartOutline />,
        desc: "second_card_desc1",
    },
    {
        title: "second_card_title2",
        icon: <IoRibbonOutline />,
        desc: "second_card_desc2",
    },
    {
        title: "second_card_title3",
        icon: <AiOutlineBank />,
        desc: "second_card_desc3",
    },
    {
        title: "second_card_title4",
        icon: <IoCodeSlashOutline />,
        desc: "second_card_desc4",
    },
    {
        title: "second_card_title5",
        icon: <GiJumpAcross />,
        desc: "second_card_desc5",
    },
    {
        title: "second_card_title6",
        icon: <IoFolderOutline />,
        desc: "second_card_desc6",
    },
];

const Secondary = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto max-w-7xl  grid sm:justify-items-center p-4">
            <div className="grid grid-cols-1 grid-flow-row gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto mb-16 cursor-default">
                {
                    content.map((content, p) =>
                        <Secondcard icon={content.icon} title={t(content.title)} desc={t(content.desc)} key={p} />
                    )
                }
            </div>
        </div>
    )
}

export default Secondary;