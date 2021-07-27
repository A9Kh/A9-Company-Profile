import React from "react";
import map_pic from "assets/images/company_overview_1.jpg";
import shop from "assets/images/business.jpg";
import delivery from "assets/images/delivery.svg";
//import { useTranslation } from "react-i18next";
export const companyoverview = () => {
  //const { t } = useTranslation();
  // document.title = "A9 - Contact Us";

  return (
    <div className="container mx-auto">
      <h1 className="lg:text-5xl  md:text-4xl sm:text-3xl font-bold mt-10">
        Company Overview
      </h1>
      <div className="sm:grid  lg:grid-cols-1 xl:grid-cols-2 md:grid-cols-1">
        <div className="flex items-center justify-center">
          <img src={map_pic} alt="" className="w-full object-cover " />
        </div>
        <div className="w-full p-6 flex justify-center items-center">
          <p className="lg:text-2xl sm:text-sm md: text-xl">
            <strong className="text-primary-300">
              A9 Online KH CO., LTD.{" "}
            </strong>{" "}
            focuses on social e-commerce, while also oﬀer product purchasing
            service from China such as Taobao, Tian Mao, Jin Dong and other
            shopping app platform, with years of experience in product trade
            both domestic and abroad, which allows us to fully understand the
            market demands of manufacturers and brand owners, committed to
            building brands for companies and businesses both domestic and
            abroad. <br /> <br /> A9 integrates high-quality supply chain
            resources, with the mission of determining production according to
            needs and rapid turnover, using the Internet and big data technology
            to empower the supply side, strictly selected and high quality,
            cost-eﬀective products, build a warehouse, logistic system,
            whole-process data monitoring for product and information
            distribution, enabling services for many and multiple types of
            enterprises in the food, clothing, electronics, and retail industrie
            at home and abroad.
          </p>
        </div>
      </div>
      <hr className=" xl:w-6/12 " />

      <div className="h-3/5 w-auto bg-primary-300 rounded overflow-hidden shadow-lg my-20 lg:mx-20 mx-8">
        <div className="md:flex flex-wrap">
          <div className="flex-1 w-full rounded-t">
            <img
              src={shop}
              alt=""
              className="h-full w-full shadow object-cover"
            />
          </div>
          <div className="flex-1 w-full rounded-t pt-10 lg:pb-20 pb-12 lg:px-12 lg:text-left text-jutify">
            <h1 className="uppercase tracking-wide lg:text-4xl text-2xl text-white font-bold pt-10 lg:px-20 pb-10 lg:mx-auto   mx-8">
              suppercharge <br /> your business
            </h1>
            <p className="text-white lg:ml-20 mx-8 pt-4 lg:text-2xl text-lg pb-4 mx-8">
              With A9, any business can scale and become <br /> a super
              eBusiness. Let our digital capabilities enable <br /> your
              ambitions as you grow in the region. Find out more about how you
              can grow your business with A9.
            </p>
            <ul className="grid grid-cols-3 text-white lg:ml-20 pt-4 lg:text-2xl text-lg mx-8">
              <li>Cambodia</li>
              <li>Thailand</li>
              <li>Thailand</li>
            </ul>
            <ul className="grid grid-cols-3 text-white lg:ml-20 pt-4 lg:text-2xl text-lg mx-8">
              <li>China</li>
              <li>Singapore</li>
              <li>Singapore</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse lg:ml-20 mx-8 mb-20">
        <div className="w-full my-10 items-center">
          <h1 className="text-4xl font-bold mb-10">Express Delivery</h1>
          <h1 className="text-2xl font-bold mb-10">7 big Benefits:</h1>
          <ul className="text-xl  items-center">
            <li className="mb-4">
              <strong>1.</strong> Self-built warehousing and logistics network
              to ensure delivery.
            </li>
            <li className="mb-4">
              <strong>2.</strong> Goods are shipped from the source, no
              middlemen.
            </li>
            <li className="mb-4">
              <strong>3.</strong> 9 hour of online customer service waiting to
              assist you.
            </li>
            <li className="mb-4">
              <strong>4.</strong> Big data analysis, intelligent product
              recommendation
            </li>
            <li className="mb-4">
              <strong>5.</strong> system and rights protection system
            </li>
            <li className="mb-4">
              <strong>6.</strong> Strong internal driving force for social
              e-commerce growth.
            </li>
            <li>
              <strong>7.</strong> Group of professional, full of experiences.
            </li>
          </ul>
        </div>
        <div className="h-full w-full ">
          <img src={delivery} alt="" />
        </div>
      </div>
    </div>
  );
};
export default companyoverview;
