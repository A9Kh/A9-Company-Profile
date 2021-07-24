import { useTranslation } from "react-i18next";
import img1 from "assets/images/clients/winglogo.png";
import img2 from "assets/images/clients/lihourlogo.png";
import img3 from "assets/images/clients/amazon-logo.png";
import img4 from "assets/images/clients/aba.png";
import img5 from "assets/images/clients/starbucks.png";
import img6 from "assets/images/clients/browcafes.png";

const images = [
  { name: img1 },
  { name: img2 },
  { name: img3 },
  { name: img1 },
  { name: img2 },
  { name: img3 },
  { name: img4 },
  { name: img5 },
  { name: img6 },
  { name: img5 },
  { name: img4 },
  { name: img6 },
];

const Clients = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-7xl px-4">
      <div className="my-6">
        <div className="py-0 font-bold text-3xl md:text-4xl">
          {t("Title")}
        </div>

        <p className="my-2 text-lg md:text-xl">
          {t("body")}
        </p>
      </div>

      <div className="my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {
          images.map((p, k) => (
            <div key={k} className="w-full h-auto md:w-5/6 flex p-4">
              <img src={p.name} alt="note" className="object-contain w-full h-full rounded-lg " />
            </div>
          ))
        }
      </div>

    </div >
  );
};
export default Clients;
