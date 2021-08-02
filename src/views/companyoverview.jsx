import React from "react";
import Description from "components/companyoverview/Description";
import SuperCharge from "components/companyoverview/SuperCharge";
import Express from "components/companyoverview/Express";

const companyoverview = () => {
  document.title = "A9 - Home";

  return (
    <main className="container mx-auto max-w-7xl px-5 xl:px-0">
      <section className="mt-4 sm:mt-7 lg:mt-10 mb-10 lg:mb-20">
        <Description />
      </section>
      <section className="mb-10 lg:mb-20">
        <SuperCharge />
      </section>
      <section className="mb-10">
        <Express />
      </section>
    </main>
  );
};

export default companyoverview;
