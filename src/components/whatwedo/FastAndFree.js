import motoMan from "assets/images/whatWeDo/pic-3.jpg"
import { useTranslation } from 'react-i18next';

const FastAndFree = () => {
    const { t } = useTranslation();

    const pionts = [
        "faf_p_1",
        "faf_p_2",
        "faf_p_3",
    ]

    return (
        <div className="flex flex-col lg:flex-row">
            <img src={motoMan} alt="" className="w-full lg:w-8/12 object-cover" />
            <div className="w-full lg:w-4/12 mt-7 lg:mt-16 pl-5 text-sm sm:text-base">
                <ul className="list-disc">
                    {pionts.map((p, k) => (
                        <li key={k}>{t(p)}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FastAndFree
