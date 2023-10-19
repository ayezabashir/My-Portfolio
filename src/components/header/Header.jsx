import MenuItem from "./MenuItem"

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
                            <button>Menu button</button>
                            <div>
                                <button>Close button</button>
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
