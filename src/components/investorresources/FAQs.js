import { useEffect, useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi"
import { useTranslation } from 'react-i18next';

const FAQs = () => {
    const [questionState, setQuestionState] = useState([]);
    const { t } = useTranslation();

    const questions = [
        { show: false, q: "question_1", a: "answer_1" },
        { show: false, q: "question_2", a: "answer_2" },
        { show: false, q: "question_3", a: "answer_3" },
        { show: false, q: "question_4", a: "answer_4" },
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
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">{t("label_investor_resources")}</h1>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">{t("label_faqs")}</h1>
            <div className="flex flex-col gap-2 mt-1 px-3 sm:mt-3 sm:px-5 lg:mt-5 lg:px-1">
                {questionState.map((question, k) => (
                    <div key={k} className="flex flex-col">
                        <div className={`p-5 bg-gray-100 flex justify-between text-sm sm:text-base ${question.show ? "bg-primary-300 text-white" : ""} cursor-pointer `} onClick={() => handleClick(k)}>
                            <span>{t(question.q)}</span>
                            {question.show ? <FiMinus className="text-xl text-white" /> : <FiPlus className="text-xl" />}
                        </div>
                        {question.show && <div className="p-5 bg-primary-100 text-sm sm:text-base">
                            {t(question.a)}
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQs
