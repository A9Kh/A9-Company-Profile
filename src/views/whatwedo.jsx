import React from "react";
import WhatWeDoPage from "components/whatwedo/WhatWeDoPage";
const whatwedo = () => {
  document.title = "A9 - What we do";

  return (
    <main>
      <section>
        <WhatWeDoPage />
      </section>
    </main>
  );
};

export default WhatWeDoPage;
