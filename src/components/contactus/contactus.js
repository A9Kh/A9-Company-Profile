import React from "react";
import icon1 from "assets/images/facebook.svg";
import icon2 from "assets/images/instagram.svg";
import icon3 from "assets/images/youtube.svg";
import icon4 from "assets/images/contact.svg";
export const contactusPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap lg:flex-row flex-col-reverse flex-between">
        <div className="lg:w-1/4 lg:ml-16 lg:my-20 lg:text-left text-center">
          <div className="text-2xl font-bold mb-4">
            <h1 className="text-primary-300">FOLLOW US:</h1>
            <div className="flex lg:justify-start justify-center w-auto h-auto py-8">
              <a className="hover:opacity-75 h-16 w-12 p-1" href="#">
                <img src={icon1} />
              </a>
              <a class="hover:opacity-75 h-16 w-12 p-1 mx-4" href="#">
                <img src={icon2} />
              </a>
              <a class="hover:opacity-75 h-16 w-12" href="#">
                <img src={icon3} />
              </a>
            </div>
          </div>
          <div className="text-2xl font-bold mb-12">
            <h1 className="text-primary-300 mb-8">ADDRESS</h1>
            <div className="w-auto">
              <p className="text-xl w-full my-4 lg:text-left">
                #211, Street 169, Sangkat Veal Vong , Khan 7 Makara, Phnom Penh,
                Cambodia
              </p>
            </div>
          </div>
          <div className="text-2xl font-bold mb-12">
            <h1 className="text-primary-300 mb-8">CONTACT</h1>
            <div className="text-xl w-auto">
              <p className="w-auto my-4">092 555 365 / 010 595 365</p>
              <a className="w-auto my-4" href="#">
                a9@a9kh.com
              </a>
            </div>
          </div>

          <div className="text-2xl font-bold mb-4">
            <h1 className="text-primary-300 mb-8">OPENS HOURS</h1>
            <div className="text-xl w-auto h-auto ">
              <p className=" w-auto h-auto my-4">Monday - Sunday</p>
              <p className="w-auto h-auto my-4">(8:00 am — 7:00pm)</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full flex-1 my-16">
          <img className="h-full w-full" src={icon4} />
        </div>
      </div>
      <iframe
        className="lg:h-screen h-80 w-full mb-20 border-solid border-t-2 border-b-2 border-gray-400"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581.0505403722894!2d104.91070083793062!3d11.56429021386043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951ac4c6535c3%3A0xe673862fa9ba733!2sA9%20Online%20KH%20CO.%2CLTD.!5e0!3m2!1sen!2skh!4v1627102194233!5m2!1sen!2skh"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default contactusPage;
