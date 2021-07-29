import React from "react";
//import pic1 from "assets/images/pic-1.jpg";
import photos from "assets/images/pic-1.jpg";
import photos1 from "assets/images/pic-2.jpg";
import photos2 from "assets/images/pic-3.png";
import arrow_icon from "assets/images/arrow_icon.png";
export const WhatwedoPage = () => {
  //const photos = [{ id: 1, img: pic1 }];
  //const photos = require("assets/images/pic-1.jpg"); // with require
  return (
    //introduction
    <div className="container mx-auto ">
      <div className="text-gray-700 font-sans subpixel-antialiased tracking-wide lg:m-auto m-8">
        <h1 className="lg:m-8 lg:mt-16 sm:mt-12 lg:ml-20 sm:mx-4 text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
          What We Do
        </h1>
        <p className="mlg:my-16 sm:my-12 my-8 lg:mx-20 sm:mx-4 text-sm sm:text-base lg:text-lg font-semibold text-left">
          Although our business has evolved over the years, one constant is
          customers’ desire for lower prices, better selection, and convenient
          services. Today, Amazon shoppers can find what they’re looking for
          online and in person. From delivering fresh produce to their doorstep
          to creating and distributing movies, music, and more, we are always
          finding new ways to delight our customers.
        </p>
      </div>
      <div className="mx-2 lg:mx-16 sm:mx-4 ">
        <div className="flex flex-wrap flex-row lg:flex-col sm:flex-row jutify-center w-full text-gray-700 bg-gray-100 rounded-lg shadow-md tracking-wide lg:mb-32 mb-12">
          {/* first */}
          <div className="flex flex-wrap lg:flex-row flex-col h-auto max-w-full">
            <div class="flex-1 lg:h-screen h-full lg:w-6/12 sm:w-full lg:px-12 sm:px-8 lg:pt-16 sm:pt-12 lg:py-auto py-4">
              <img class="h-screen w-full shadow-md" src={photos} />
            </div>
            <div className="lg:flex-1 h-auto lg:w-6/12 sm:w-full tracking-wide lg:p-16 sm:p-12 mt-4">
              <div className="flex flex-wrap justify-between">
                <div className="lg:h-auto">
                  <h1 className="lg:my-8 sm:my-4 ml-4 lg:text-3xl sm:text-2xl font-bold text-gray-900">
                    A9 Online Shopping
                  </h1>
                </div>
                <div className="lg:h-auto lg:my-4">
                  <p className="my-4 lg:text-2xl sm:text-lg font-semibold lg:text-left sm:text-justify lg:mx-auto mx-4">
                    We work every day to earn and keep customers’ trust. We do
                    this through convenient services and the thousands of small
                    and medium businesses that add significantly to our product
                    selection.
                  </p>
                </div>
                <div className="lg:h-auto lg:my-4 ">
                  <p className="my-4 lg:text-2xl sm:text-lg font-semibold lg:text-left sm:text-justify lg:mx-auto mx-4">
                    Teams around the world invent on behalf of our customers
                    every day to meet their desire for lower prices, better
                    selection, and convenient services. One way we guarantee a
                    wide selection of products is through the 1.7 million small
                    and medium businesses around the world selling on Amazon.com
                    and offering more options for customers.
                  </p>
                </div>
                <div className="flex flex-wrap lg:w-60 w-48 bg-primary-200 hover:opacity-70 rounded-full py-3 px-6 lg:mt-8 lg:text-lg text-sm lg:m-0 m-4">
                  <a className="text-gray-100" href="#">
                    Visit our Website{" "}
                  </a>
                  <img className="h-2 ml-1 mt-2" src={arrow_icon} />
                </div>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-wrap lg:flex-row flex-col h-1/3 w-full lg:my-auto sm:my-auto my-8">
            <div className="h-full lg:w-1/2 w-full lg:py-8 py-4 lg:pl-12 lg:pr-4 px-4">
              <div className="lg:my-8 my-4 lg:text-3xl sm:text-2xl font-bold text-gray-900">
                <h1>Delivery & Logistics</h1>
                <p className="my-4 lg:my-8 text-sm sm:text-base lg:text-lg font-semibold text-left">
                  We use high-quality express delivery companies to deliver your
                  product, safety guaranteed, deliver to you efficiently, and we
                  don’t support selecting your own express delivery company.
                </p>
              </div>
              <div className="lg:my-8 my-4 lg:text-2xl sm:text-lg font-bold text-gray-900 lg:mx-28">
                <h1>- Delivery Time</h1>
                <h1>- Delivery area</h1>
                <h1>- Standard delivery fee</h1>
                <h1>- Product’s receipt</h1>
              </div>
            </div>
            <div className="flex-none lg:h-full lg:w-1/2 w-full lg:py-8 py-4 lg:pr-12 px-4">
              <img
                src={photos1}
                alt=""
                className="h-full w-full rounded-md shadow-md"
                style={{ height: "350px" }}
              />
            </div>
            {/* <div className="w-full lg:hidden px-4">
              <img
                src={photos1}
                alt=""
                className="h-full w-full rounded-md shadow-md"
              />
            </div> */}
          </div>
          {/* last */}
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="lg:mb-20 ml-8 w-8/12 hidden lg:block">
              <img
                className="w-full h-full"
                src={photos2}
                style={{ height: "600px" }}
              />
            </div>
            <div className="lg:w-4/12 w-full lg:py-20 mt-16 lg:mr-4 overflow-hidden">
              <ul className="text-sm sm:text-base lg:text-lg font-semibold text-left">
                <li className="mx-4">
                  - A9 sold products will be delivered directly from the
                  warehouse closest to you, on normal condition after your
                  payment, all products will be out for delivery within 72
                  hours.
                </li>
                <li className="mx-4">- Support every area in Cambodia</li>

                <li className="mx-4">
                  - A9 store-owned product shipping is free, the postage of
                  third-party merchants will be charged according to the
                  information displayed on the order page below.
                </li>
              </ul>
            </div>
            <div className="lg:hidden w-full">
              <img className="w-full h-full" src={photos2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatwedoPage;
