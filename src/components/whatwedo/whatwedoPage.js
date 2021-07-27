import React from "react";
//import pic1 from "assets/images/pic-1.jpg";
import photos from "assets/images/pic-1.jpg";
import photos1 from "assets/images/pic-2.jpg";
import photos2 from "assets/images/pic-3.svg";
import arrow_icon from "assets/images/arrow_icon.png";
export const whatwedoPage = () => {
  //const photos = [{ id: 1, img: pic1 }];
  //const photos = require("assets/images/pic-1.jpg"); // with require
  return (
    //introduction
    <div className="container mx-auto ">
      <div className="text-gray-700 font-sans subpixel-antialiased tracking-wide">
        <h1 className="mt-16 lg:ml-16 mx-4 text-3xl font-bold text-gray-900">
          What We Do
        </h1>
        <p className="my-20 lg:mx-16 mx-4 text-2xl font-semibold text-justify">
          Although our business has evolved over the years, one constant is
          customers’ desire for lower prices, better selection, and convenient
          services. Today, Amazon shoppers can find what they’re looking for
          online and in person. From delivering fresh produce to their doorstep
          to creating and distributing movies, music, and more, we are always
          finding new ways to delight our customers.
        </p>
      </div>
      <div className="lg:mx-16 mx-4">
        <div className="flex flew-wrap flex-col jutify-center w-full text-gray-700 bg-gray-100 rounded-lg shadow-md tracking-wide subpixel-antialiased lg:mb-32 mb-12">
          {/* first */}
          <div className="flex flex-wrap lg:flex-row flex-col h-1/3 w-full">
            <div class="h-full lg:w-1/2 w-full lg:px-12 px-8 lg:pt-16">
              <img class="h-full w-full shadow-md" src={photos} />
            </div>
            <div className="h-full lg:w-1/2 w-full tracking-wide lg:p-16">
              <div className="flex flex-wrap justify-between">
                <div className="lg:h-40 ">
                  <h1 className="lg:my-8 my-4 ml-4 text-3xl font-bold text-gray-900">
                    A9 Online Shopping
                  </h1>
                </div>
                <div className="lg:h-40">
                  <p className="my-4 text-2xl font-semibold lg:text-left text-justify lg:mx-auto mx-4">
                    We work every day to earn and keep customers’ trust. We do
                    this through convenient services and the thousands of small
                    and medium businesses that add significantly to our product
                    selection.
                  </p>
                </div>
                <div className="lg:h-40 ">
                  <p className="my-4 text-2xl font-semibold lg:text-left text-justify lg:mx-auto mx-4 mb-4">
                    Teams around the world invent on behalf of our customers
                    every day to meet their desire for lower prices, better
                    selection, and convenient services. One way we guarantee a
                    wide selection of products is through the 1.7 million small
                    and medium businesses around the world selling on Amazon.com
                    and offering more options for customers.
                  </p>
                </div>
                <div className="flex flex-wrapflex justify-center item-center lg:w-60 bg-primary-200 hover:opacity-70 rounded-full py-3 px-6 lg:mt-36 text-lg">
                  <a className="text-gray-100" href="#">
                    Visit our Website{" "}
                  </a>
                  <img className="h-4 ml-1 mt-2" src={arrow_icon} />
                </div>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-wrap lg:flex-row flex-col h-1/3 w-full">
            <div className="h-full lg:w-1/2 w-full lg:py-8 py-4 lg:pl-12 lg:pr-4 px-4">
              <div className="lg:my-8 my-4 text-3xl font-bold text-gray-900">
                <h1>Delivery & Logistics</h1>
                <p className="lg:my-8 my-4 text-2xl font-semibold lg:text-left text-justify">
                  We use high-quality express delivery companies to deliver your
                  product, safety guaranteed, deliver to you efficiently, and we
                  don’t support selecting your own express delivery company.
                </p>
              </div>
              <div className="lg:my-8 my-4 text-2xl font-bold text-gray-900 lg:mx-28">
                <h1>- Delivery Time</h1>
                <h1>- Delivery area</h1>
                <h1>- Standard delivery fee</h1>
                <h1>- Product’s receipt</h1>
              </div>
            </div>
            <div className="flex-1 h-full lg:w-1/3 lg:py-8 py-4 lg:pr-12 px-4">
              <img
                className="h-full w-full rounded-md shadow-md"
                src={photos1}
              />
            </div>
          </div>
          {/* last */}
          <div className="flex flex-wrap lg:flex-row flex-col-reverse h-1/3 w-full">
            <div className="flex-1 h-full lg:w-1/2 w-full lg:py-8 py-4 lg:pl-12 lg:pr-1 px-4">
              <img className="h-full w-auto" src={photos2} />
            </div>
            <div className=" h-full lg:w-1/3 w-full lg:pb-20 py-4 lg:pr-12 mx-4">
              <ul className=" lg:list-outside list-inside my-4 text-2xl font-semibold">
                <li>
                  - A9 sold products will be delivered directly from the
                  warehouse closest to you, on normal condition after your
                  payment, all products will be out for delivery within 72
                  hours.
                </li>
                <li>- Support every area in Cambodia</li>

                <li>
                  - A9 store-owned product shipping is free, the postage of
                  third-party merchants will be charged according to the
                  information displayed on the order page below.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default whatwedoPage;
