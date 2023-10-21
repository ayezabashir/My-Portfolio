import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FiCodepen, FiMail } from 'react-icons/fi'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <h2>Contact Me</h2>
                    <ul className="footer-list">
                        <li>
                            <a href="">
                                <BsGithub className='social' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsLinkedin className='social' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsInstagram className='social' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FiCodepen className='social' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FiMail className='social' />
                            </a>
                        </li>
                    </ul>
                    <br /><br />
                    <small>Copyright &copy; 2023, Ayeza Bashir</small>
                </div>
            </footer>
        </>
    )
}

export default Footer
