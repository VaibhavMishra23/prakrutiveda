import "./Contact.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {

    const whatsappLink = "https://wa.me/918827270701";
    const instagramLink = "https://www.instagram.com/poonams_beauty6r/";

    return (
        <section className="contact">

            <div className="contact-heading">

                <h1>Contact Us</h1>

                <p>
                    We'd love to hear from you. Reach out anytime through
                    WhatsApp, Instagram or Email.
                </p>

            </div>

            <div className="contact-cards">

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card"
                >

                    <div className="contact-icon whatsapp">
                        <FaWhatsapp />
                    </div>

                    <div className="contact-info">
                        <h2>WhatsApp</h2>
                        <p>Chat with us instantly</p>
                    </div>

                    <span>→</span>

                </a>

                <a
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card"
                >

                    <div className="contact-icon instagram">
                        <FaInstagram />
                    </div>

                    <div className="contact-info">
                        <h2>Instagram</h2>
                        <p>Follow our latest updates</p>
                    </div>

                    <span>→</span>

                </a>

                <div className="contact-card">

                    <div className="contact-icon email">
                        <FaEnvelope />
                    </div>

                    <div className="contact-info">
                        <h2>Email</h2>
                        <p>prakrutiveda@gmail.com</p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;