//this file is for placeholder. if you want to use this, you can rename to whatever you want
//otherwise, delete this. but if in the folder there no other files. this file cannot delete

import React from "react";
import { GrSettingsOption, GrCode, GrSystem, GrTrophy } from "react-icons/gr";
import { GiTakeMyMoney, GiJumpAcross } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineWindows, AiOutlineBank } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineDocumentReport } from "react-icons/hi";

const content = [
  {
    title: "Maintain & Support",
    icon: <GrSettingsOption />,
    decs: "We are committed to service excellence and maintaining lasting partners with our customers. We will continue evolve at the same place as your business.",
  },
  {
    title: "Business Analytics",
    icon: <BsGraphUp />,
    decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan efficitur risus, sit.",
  },
  {
    title: "Investment Planing",
    icon: <GiTakeMyMoney />,
    decs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan efficitur risus, sit.",
  },
  {
    title: "Web Development",
    icon: <CgWebsite />,
    decs: "Our company also design and develop a variety of websites using the lasted and proven web technologies.",
  },
  {
    title: "Window Application",
    icon: <AiOutlineWindows />,
    decs: "We design and develop a variety of applications for windows including specialized and custom enterprise software.",
  },
  {
    title: "POS system",
    icon: <GrSystem />,
    decs: "We provide top-notch Point of Sales solution for small and medium businesses.",
  },
];
const content2 = [
  {
    title: "Commercial Project",
    icon: <VscGraph />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan ecitur risus, sit.",
  },
  {
    title: "Competitive Research",
    icon: <GrTrophy />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan ecitur risus, sit.",
  },
  {
    title: "Bank & Finance",
    icon: <AiOutlineBank />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan ecitur risus, sit.",
  },
  {
    title: "International Business",
    icon: <GrCode />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan ecitur risus, sit. ",
  },
  {
    title: "Strategic Approach",
    icon: <GiJumpAcross />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan ecitur risus, sit.",
  },
  {
    title: "Project Reporting",
    icon: <HiOutlineDocumentReport />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sodales augue, id viverra purus. Ut accumsan ecitur risus, sit. ",
  },
];

const Service = () => {
  return (
    <>
      <div className="bg-contain bg-gradient-to-r from-green-400 to-blue-500">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold text-white p-10 pb-8 mt-20 text-opacity-95 uppercase">
            Services
          </h2>
          <div className="text-center">
            <h4 className="text-2xl mb-24 text-white text-opacity-60">
              To design and deliver the innovative products.
            </h4>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid justify-items-center xl:justify-items-start lg:justify-items-start sm:justify-items-start">       
          <h2 className=" text-4xl font-bold p-8">
            We Provice
          </h2>
        </div>

        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-flow-row gap-2 mx-auto">
          {content.map((p, k) => (
            <div key={k} className="max-w-md py-4 px-8 bg-gray-100 shadow-lg rounded-lg my-5 m-5 hover:bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <div className="p-5 pl-2 text-5xl grid justify-items-center md:justify-items-start">
                {p.icon}
              </div>
              <h2 className="text-gray-800 text-2xl font-semibold font-mono grid justify-items-center md:justify-items-start">
                {p.title}
              </h2>
              <p className="mt-2 mb-5 text-gray-600 font-sans">{p.decs}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-2xl mb-10 uppercase p-10 pb-2 font-semibold text-gray-500 text-center">
            BEAUTIFULLY CRAFTED CREATIVE SOLUTIONS
          </h4>
          <div className="flex sm:justify-items-center px-4 text-center ">
            <h1 className="text-2xl px-2 mb-10 font-semibold tracking-wide">
              Services that create identities, build brands, and get results
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-8 grid sm:justify-items-center ">
        <div className="grid grid-cols-1 grid-flow-row gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto mb-20">
          {content2.map((p, k) => (
            <div key={k} className="max-w-sm px-8 bg-gray-100 shadow-lg rounded-lg  hover:bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <ul className="flex space-x-2">
                <li className="text-5xl m-5 ml-2">
                  {p.icon}
                </li>
                <li className="text-xl m-5 p-1 font-bold font-mono">
                  <h2>{p.title}</h2>
                </li>
              </ul>
              <p className="mb-5 font-sans">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Service;
