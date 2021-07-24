import React from 'react';
import art from "assets/images/contact_us/contact_us.svg";
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-6 h-1/2">
            <div className="">
                <div className="text-3xl font-medium uppercase">
                    {t("get_in_touch")}
                </div>

                <div className="flex flex-wrap my-4">
                    <div className="w-full sm:w-1/2 p-4">
                        <div className="text-xl tracking-wider">{t("form_label1")}</div>

                        <div className="my-2 font-bold">info@kdata.com</div>
                    </div>

                    <div className="w-full sm:w-1/2 p-4">
                        <div className="text-xl tracking-wider">{t("contactus")}</div>

                        <div className="my-2 font-bold">(+855) 12 345 678</div>
                    </div>

                    <div className="w-full sm:w-1/2 p-4">
                        <div className="text-xl tracking-wider">{t("opening_hours")}</div>

                        <div className="my-2 font-medium">Monday - Satursday</div>
                        <div className="my-2 font-medium">8am - 5pm</div>
                    </div>
                </div>
            </div>

            <div className="md:text-right">
                <div className="text-3xl font-medium uppercase">
                    {t("location")}
                </div>

                <div className="my-4">
                    <div className="pt-2 pb-2 pr-4">
                        <div className="my-2 font-serif">
                            3rd Floor, #211, Street 169, Sangkat Veal Vong , Khan 7 Makara, Phnom Penh
                        </div>
                    </div>
                </div>

                <div className="my-4 w-auto h-56">
                    <img src={art} alt="" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
