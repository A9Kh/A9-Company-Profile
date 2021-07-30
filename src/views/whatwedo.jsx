import React from "react";
import Description from "components/whatwedo/Description";
import DutiesCard from "components/whatwedo/DutiesCard";

const whatwedo = () => {
  document.title = "A9 - What we do";

  return (
    <main className="container mx-auto max-w-7xl px-3 sm:px-5 lg:px-1">
      <section className="mt-4 sm:mt-7 lg:mt-10 mb-10 lg:mb-20">
        <Description />
      </section>
      <section className="mb-10">
        <DutiesCard />
      </section>
    </main>
  );
};

export default whatwedo;
