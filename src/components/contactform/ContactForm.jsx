const ContactForm = () => {
    return (
        <>
            <div className="contact-form" id="contact" >
                <div className="container">
                    <div className="contact-content">
                        <h2>Contact Me</h2>
                        <form className='form'>
                            <div className="left">
                                <div className="form-element">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input minLength="3" maxLength="50" required type="text" id='fullname' name='fullname' />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="email">Email</label>
                                    <input minLength="8" maxLength='50' required type="email" name="email" id="email" />
                                </div>
                            </div>
                            <div className="right">
                                <div className="form-element">
                                    <label htmlFor="msg">Your Message</label>
                                    <textarea minLength="3" maxLength="200" required name="msg" id="msg" cols="30" rows="6"></textarea>
                                </div>
                                <button type="submit" className="form-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm
