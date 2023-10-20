import { BsFillSunFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { HiDocumentText } from 'react-icons/hi'
import { useState } from 'react'

const MenuItem = () => {
    const [mode, setMode] = useState(true);
    const changeMode = () => {
        setMode(!mode);
    }

    return (
        <>
            <ul className="menu-items">
                <li className='menu-list-items'>
                    <h3>Projects</h3>
                </li>
                <li className='menu-list-items'>
                    <h3>About</h3>
                </li>
                <li className='menu-list-items'>
                    <h3>Contact</h3>
                </li>
                <li className='menu-list-items' title='My Resume'>
                    <a href="">
                        <HiDocumentText className='icon' />
                    </a>
                </li>
                <li className='menu-list-items'>
                    <button onClick={changeMode}>
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
