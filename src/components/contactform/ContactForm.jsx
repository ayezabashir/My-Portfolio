import { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d7n9uvi', 'template_mt8193l', form.current, 'my9uHnlcfmcH_UVz0')
            .then(() => {
                alert("message sent successfully");
                e.target.reset();
            }, (error) => {
                alert(error.text);
            });
    };
    return (
        <>
            <div className="contact-form" id="contact" >
                <div className="container">
                    <div className="contact-content">
                        <h2>Contact Me</h2>
                        <form ref={form} onSubmit={sendEmail} className='form'>
                            <div className="left">
                                <div className="form-element">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input minLength="3" maxLength="50" required type="text" name="user_name" />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="email">Email</label>
                                    <input minLength="8" maxLength='50' required type="email" name="user_email" />
                                </div>
                            </div>
                            <div className="right">
                                <div className="form-element">
                                    <label htmlFor="msg">Your Message</label>
                                    <textarea minLength="3" maxLength="200" required name="message" id="msg" cols="30" rows="6"></textarea>
                                </div>
                                <button type="submit" value="Send" className="form-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm
