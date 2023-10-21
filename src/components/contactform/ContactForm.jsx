// import { FaHandshakeSimple } from 'react-icons/fa'

const ContactForm = () => {
    return (
        <>
            <div className="contact-form">
                <div className="container">
                    <form className='form'>
                        <div className="form-element">
                            <label htmlFor="fullname">FullName</label>
                            <input type="text" id='fullname' name='fullname' />
                        </div>
                        <div className="form-element">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="msg">Your Message</label>
                            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" className="form-submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm
