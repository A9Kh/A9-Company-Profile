import Info from "components/contactus/Info";
import MapA9 from "components/contactus/MapA9";
import React from "react";

const contactus = () => {
  document.title = "A9 - Contact Us";

  return (
    <main>
      <section className="mt-10 container mx-auto max-w-7xl">
        <Info />
      </section>
      <section className="mb-10">
        <MapA9 />
      </section>
    </main>
  );
};

export default contactus;
