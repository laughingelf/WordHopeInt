import ContactForm from "../components/ContactForm";
import HeroCommon from "../components/HeroCommon";

const Contact = () => {

    return (
        <>
        <HeroCommon
        heading="Let’s Connect"
        subheading="Have a question, want to get involved, or just want to say hello? We’d love to hear from you."
        backgroundImage="/img/contact-hero.jpeg"
        />
        <ContactForm />
        </>
    )
}

export default Contact;