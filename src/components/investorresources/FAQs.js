import { useEffect, useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi"

const FAQs = () => {
    const [questionState, setQuestionState] = useState([]);

    const questions = [
        { show: false, q: "How long has A9 Mall been in business?", a: "Founder and CEO Ken opened the virtual doors of A9's online store in 2020. The company was \nincorporated in 2019 in Cambodia and reincorporated in 2021. The Company's principal corporate \noffices are located in Phnom Penh. A9 completed its initial public offering in May 2020." },
        { show: false, q: "How long has A9 Mall been in business?", a: "Founder and CEO Ken opened the virtual doors of A9's online store in 2020. The company was \nincorporated in 2019 in Cambodia and reincorporated in 2021. The Company's principal corporate \noffices are located in Phnom Penh. A9 completed its initial public offering in May 2020." },
        { show: false, q: "How long has A9 Mall been in business?", a: "Founder and CEO Ken opened the virtual doors of A9's online store in 2020. The company was \nincorporated in 2019 in Cambodia and reincorporated in 2021. The Company's principal corporate \noffices are located in Phnom Penh. A9 completed its initial public offering in May 2020." },
        { show: false, q: "How long has A9 Mall been in business?", a: "Founder and CEO Ken opened the virtual doors of A9's online store in 2020. The company was \nincorporated in 2019 in Cambodia and reincorporated in 2021. The Company's principal corporate \noffices are located in Phnom Penh. A9 completed its initial public offering in May 2020." },
    ]

    useEffect(() => {
        setQuestionState(questions);
    }, [])

    const handleClick = (k) => {
        const showAnswer = [...questionState];
        let prevShow = showAnswer[k].show;
        showAnswer[k] = { ...showAnswer[k], show: !prevShow };
        setQuestionState(showAnswer);
    }

    return (
        <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">Investor Resourse</h1>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">FAQs</h1>
            <div className="flex flex-col gap-2 mt-1 px-3 sm:mt-3 sm:px-5 lg:mt-5 lg:px-1">
                {questionState.map((question, k) => (
                    <div key={k} className="flex flex-col">
                        <div className={`p-5 bg-gray-100 flex justify-between text-sm sm:text-base ${question.show ? "bg-primary-300 text-white" : ""} cursor-pointer `} onClick={() => handleClick(k)}>
                            <span>{question.q}</span>
                            {question.show ? <FiMinus className="text-xl text-white" /> : <FiPlus className="text-xl" />}
                        </div>
                        {question.show && <div className="p-5 bg-primary-100 text-sm sm:text-base">
                            {question.a}
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQs
