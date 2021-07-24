import React from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        emailjs.sendForm(`service_bb7waqf`, "template_8peqptn", e.target, "user_C64jdNTQNG9ZlxaGIfd8z")
            .then((result) => {
                alert("Message Sent, We will get back to you shortly", result.text);

                e.target.reset();
            })
            .catch(error => {
                alert("An error occurred, Please try again");
                console.log(error.text)
            });
    }

    return (
        <div className="">
            <h1 className="font-bold text-3xl text-center">
                {t("form_header")}
            </h1>

            <p className="text-center text-xl text-gray-500">
                {t("form_des")}
            </p>

            <form onSubmit={handleSubmit} className="my-6">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="grid grid-cols-1 px-0 py-2 md:p-4">
                        <label htmlFor="email" className="my-2 text-md font-medium tracking-wider">
                            {t("form_label1")}
                        </label>

                        <input type="email" name="email" className="w-full p-4 bg-gray-200 font-medium rounded focus:ring-red-600 focus:ring focus:ring-opacity-80 focus:outline-none" placeholder={t("form_placeHolder1")} />
                    </div>

                    <div className="grid grid-cols-1 px-0 py-2 md:p-4">
                        <label htmlFor="name" className="my-2 text-md font-medium tracking-wider">
                            {t("form_label2")}
                        </label>

                        <input type="text" name="name" className="w-full p-4 bg-gray-200 font-medium rounded focus:ring-red-600 focus:ring focus:ring-opacity-80 focus:outline-none" placeholder={t("form_placeHolder2")} />
                    </div>

                    <div className="grid grid-cols-1 px-0 py-2 md:p-4">
                        <label htmlFor="date" className="my-2 text-md font-medium tracking-wider">
                            {t("form_label3")}
                        </label>

                        <input type="date" name="date" className="w-full p-4 bg-gray-200 font-medium rounded focus:ring-red-600 focus:ring focus:ring-opacity-80 focus:outline-none" placeholder="DD/MM/YYY" />
                    </div>

                    <div className="grid grid-cols-1 px-0 py-2 md:p-4">
                        <label htmlFor="phone" className="my-2 text-md font-medium tracking-wider">
                            {t("form_label4")}
                        </label>

                        <input type="number" name="phone" className="w-full p-4 bg-gray-200 font-medium rounded focus:ring-red-600 focus:ring focus:ring-opacity-80 focus:outline-none" placeholder={t("form_placeHolder3")} />
                    </div>
                </div>

                <div className="grid grid-cols-1 px-0 py-2 md:p-4">
                    <label htmlFor="message" className="my-2 text-md font-medium tracking-wider">
                        {t("form_label5")}
                    </label>

                    <textarea type="type" name="message" className="w-full h-56 p-4 bg-gray-200 font-medium rounded focus:ring-red-600 focus:ring focus:ring-opacity-80 focus:outline-none" placeholder={t("form_placeHolder4")} style={{ resize: "none" }}></textarea>
                </div>

                <div className="w-full text-center py-4">
                    <button type="submit" className="py-4 px-8 bg-white border-2 border-red-600 rounded uppercase font-bold transform transition ease-in-out duration-300 hover:bg-red-600 hover:text-white active:bg-red-700">
                        {t("form_btn")}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;
