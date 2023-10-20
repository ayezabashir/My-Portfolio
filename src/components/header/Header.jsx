import MenuItem from "./MenuItem"
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="left">
                        <div className="name">
                            <h1>Ayeza</h1>
                        </div>
                    </div>
                    <div className="right">
                        <div className="desktop">
                            <MenuItem />
                        </div>
                        <div className="mobile">
                            <button>
                                <FiMenu className='icon' />
                            </button>
                            <div>
                                <button>
                                    <AiOutlineClose className='icon' />
                                </button>
                                <MenuItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
