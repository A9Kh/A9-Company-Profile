import Info from "components/contactus/Info";
import MapA9 from "components/contactus/MapA9";
import React from "react";

const contactus = () => {
  document.title = "A9 - Contact Us";

  return (
    <main>
      <section className="mt-4 sm:mt-7 lg:mt-10 mb-5 sm:mb-10 lg:mb-20 container mx-auto max-w-7xl px-5 xl:px-0">
        <Info />
      </section>
      <section className="mb-10">
        <MapA9 />
      </section>
    </main>
  );
};

export default contactus;
