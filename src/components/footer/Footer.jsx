import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FiCodepen } from 'react-icons/fi'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <h2>Connect With Me</h2>
                        <ul className="footer-list">
                            <li className='footer-list-item'>
                                <a href="https://github.com/ayezabashir">
                                    <BsGithub className='icon social' />
                                </a>
                            </li>
                            <li className='footer-list-item'>
                                <a href="https://www.linkedin.com/in/ayezabashir">
                                    <BsLinkedin className='icon social' />
                                </a>
                            </li>
                            <li className='footer-list-item'>
                                <a href="https://codepen.io/ayezabashir">
                                    <FiCodepen className='icon social' />
                                </a>
                            </li>
                        </ul>
                        <br /><br />
                        <small className='copyrights'>Copyright &copy; 2023, Ayeza Bashir</small>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
