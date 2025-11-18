import { BsFillSunFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { HiDocumentText } from 'react-icons/hi'
import { useState } from 'react'

const MenuItem = () => {
    const [mode, setMode] = useState(true);
    const changeMode = () => {
        setMode(!mode);
        document.body.classList.toggle('dark');
    }

    return (
        <>
            <ul className="menu-items">
                <li className='menu-list-items'>
                    <a href="#about">
                        <h3>About</h3>
                    </a>

                </li>
                <li className='menu-list-items'>
                    <a href="#project">
                        <h3>Projects</h3>
                    </a>
                </li>
                <li className='menu-list-items' title='My Resume'>
                    <a href="/images/Ayeza_Bashir_Resume.pdf" download >
                        <HiDocumentText className='icon' />
                    </a>
                </li>
                <li className='menu-list-items'>
                    <button className="switch" data-switch-dark aria-hidden onClick={changeMode}>
                        {
                            mode ? <MdDarkMode title='switch to darkmode' className='mode dark icon' /> : <BsFillSunFill title='switch to lightmode' className='mode-two light icon' />
                        }
                    </button>
                </li>
            </ul>
        </>
    )
}

export default MenuItem
