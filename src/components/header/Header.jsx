import MenuItem from "./MenuItem"
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

const Header = () => {

    const [menu, setMenu] = useState(false);
    const openMenu = () => {
        setMenu(true);
    }
    const closeMenu = () => {
        setMenu(false);
    }

    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="left">
                        <div className="name">
                            <h1>Ayeza Bashir</h1>
                        </div>
                    </div>
                    <div className="right">
                        <div className="desktop">
                            <MenuItem />
                        </div>
                        <div className="mobile">
                            <div className="mobile-view">
                                <button className="menu-btn" onClick={openMenu}>
                                    <FiMenu className='icon' />
                                </button>
                                <div className={`menu-open ${menu ? 'active' : ''}`}>
                                    <div className="full-screen-menu">
                                        <button className="menu-close">
                                            <AiOutlineClose className="icon" onClick={closeMenu} />
                                        </button>
                                        <MenuItem />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
