import React from 'react';
import ContactForm from 'components/contactus/ContactUsForm';
import ContactInfo from 'components/contactus/ContactInfo';
import Cover from "components/contactus/Cover"

const ContactPage = () => {
    document.title = "K-DATA - Contact Us";

    return (
        <main>
            <section>
                <Cover />
            </section>

            <section className="container mx-auto max-w-7xl px-4 md:px-0">
                <ContactInfo />
            </section>

            <section className="container mx-auto max-w-7xl px-4 md:px-0">
                <ContactForm />
            </section>
        </main >
    )
}

export default ContactPage;