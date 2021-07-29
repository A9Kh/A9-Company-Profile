import React from "react";
import Description from "components/companyoverview/Description";
import SuperCharge from "components/companyoverview/SuperCharge";
import Express from "components/companyoverview/Express";
const companyoverview = () => {
  document.title = "A9 - Home";

  return (
    <main className="container mx-auto max-w-7xl">
      <section className="mt-10 mb-20">
        <Description />
      </section>
      <section className="mb-20">
        <SuperCharge />
      </section>
      <section className="mb-10">
        <Express />
      </section>
    </main>
  );
};

export default companyoverview;
