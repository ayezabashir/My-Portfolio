import { BsFillSunFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { GrDocumentText } from 'react-icons/gr'

const MenuItem = () => {

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
                    <h3>
                        <a href="">
                            <GrDocumentText className='icon' />
                        </a>
                    </h3>
                </li>
                <li className='menu-list-items'>
                    <button>
                        <BsFillSunFill title='switch to lightmode' classname='lightmode icon' />
                        <MdDarkMode title='switch to darkmode' classname='darkmode icon' />
                    </button>
                </li>
            </ul>
        </>
    )
}

export default MenuItem
