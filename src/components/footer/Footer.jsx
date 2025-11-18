import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FiCodepen } from 'react-icons/fi'
import { SiFrontendmentor } from "react-icons/si";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <h2 id='connect'>Connect With Me</h2>
                        <ul className="footer-list">
                            <li className='footer-list-item'>
                                <a rel="noreferrer" target='_blank' href="https://github.com/ayezabashir">
                                    <BsGithub className='icon social' />
                                </a>
                            </li>
                            <li className='footer-list-item'>
                                <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/ayezabashir">
                                    <BsLinkedin className='icon social' />
                                </a>
                            </li>
                            <li className='footer-list-item'>
                                <a rel="noreferrer" target='_blank' href="https://codepen.io/ayezabashir">
                                    <FiCodepen className='icon social' />
                                </a>
                            </li>
                            <li className='footer-list-item'>
                                <a rel="noreferrer" target='_blank' href="https://discordapp.com/users/1071491930590023700">
                                    <BsDiscord className='icon social' />
                                </a>
                            </li>
                            <li className='footer-list-item'>
                                <a rel="noreferrer" target='_blank' href="https://www.frontendmentor.io/profile/ayezabashir">
                                    <SiFrontendmentor className='icon social' />
                                </a>
                            </li>
                        </ul>
                        <br /><br />
                        <small className='copyrights'>Designed and Built by <span className='highlight'>Ayeza Bashir</span></small>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
