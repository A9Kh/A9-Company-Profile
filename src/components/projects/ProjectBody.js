import React from "react";
import ImageCard from "./ImageCard";
import { useTranslation } from "react-i18next";
import img1 from "assets/images/projects/website.jpg";
import img2 from "assets/images/projects/food.png";
import img3 from "assets/images/projects/pc.jpg";
import img4 from "assets/images/projects/items.png";
import img5 from "assets/images/projects/phone.jpg";
import img6 from "assets/images/projects/dashboard.jpg";
import img7 from "assets/images/projects/ipad.png";
import img8 from "assets/images/projects/menu.jpg";
import img9 from "assets/images/projects/presentation.jpeg";

const images = [
    {
        imageName: img1,
        title: "project1",
        note: "note_project1"
    },
    {
        imageName: img2,
        title: "project2",
        note: "note_project2"
    },
    {
        imageName: img3,
        title: "project3",
        note: "note_project3"
    },
    {
        imageName: img4,
        title: "project4",
        note: "note_project4"
    },
    {
        imageName: img5,
        title: "project5",
        note: "note_project5"
    },
    {
        imageName: img6,
        title: "project6",
        note: "note_project6"
    },
    {
        imageName: img7,
        title: "project7",
        note: "note_project7"
    },
    {
        imageName: img8,
        title: "project8",
        note: "note_project8"
    },
    {
        imageName: img9,
        title: "project9",
        note: "note_project9"
    },
];

const ProjectBody = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto max-w-7xl">
            <div className="mx-4 my-4 md:mt-4">
                <div className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">{t("project_body_title")}</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {
                    images.map((p, k) =>
                        <ImageCard key={k} imageName={p.imageName} title={t(p.title)} note={t(p.note)} />
                    )
                }
            </div>
        </div>
    )
}

export default ProjectBody;
