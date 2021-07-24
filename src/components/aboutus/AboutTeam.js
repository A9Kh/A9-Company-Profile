import em1 from "assets/images/about_us/em-1.jpg";
import em2 from "assets/images/about_us/em-2.jpg";
import em3 from "assets/images/about_us/em-3.jpg";
import em4 from "assets/images/about_us/em-4.jpg";
import em5 from "assets/images/about_us/em-5.jpg";
import em6 from "assets/images/about_us/em-6.jpg";
import { useTranslation } from 'react-i18next';

const AboutTeam = () => {
    const { t } = useTranslation();

    const team = [
        { img: em1, name: "HOMER C. BROOM" },
        { img: em2, name: "HOMER C. BROOM" },
        { img: em3, name: "HOMER C. BROOM" },
        { img: em4, name: "HOMER C. BROOM" },
        { img: em5, name: "HOMER C. BROOM" },
        { img: em6, name: "HOMER C. BROOM" },
    ];

    return (
        <div className=" my-6 px-4 md:px-2">
            <h1 className="font-bold text-center text-4xl">
                {t("team_header")}
            </h1>

            <p className="text-center text-xl text-gray-500">
                {t("team_des")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-6 gap-y-6 sm:px-28 lg:px-32">
                {
                    team.map((em, k) => (
                        <EmCard key={k} em={em} />
                    ))
                }
            </div>
        </div>
    )
}

const EmCard = ({ em }) => {
    return (
        <div className="flex flex-col items-center p-4" data-aos="fade-up">
            <div className="">
                <img src={em.img} alt="" className="rounded-full w-32 sm:w-36 md:w-40 transform transition ease-in-out duration-500 hover:scale-105 hover:shadow-xl" />

                {/* <div className="bg-opacity-0 absolute bg-black hover:bg-opacity-50 text-white inset-px z-10 flex flex-col justify-center items-center rounded-full gap-3 transition duration-300">
                    <span className="opacity-0 hover:opacity-100 transition duration-300">Social Media</span>
                    <FaFacebookSquare className="opacity-0 hover:opacity-100 text-4xl transition duration-300" />
                </div> */}
            </div>

            <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600">
                {/* {em.name} */}

                <h1 className="text-sm sm:text-md md:text-lg lg:text-xl font-bold mt-2 lg:mt-3">
                    {em.name}
                </h1>
            </div>
        </div>
    )
}

export default AboutTeam;