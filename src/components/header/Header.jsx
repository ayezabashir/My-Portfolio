const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="left">
                    <div className="name">
                        <h1>Ayeza Bashir</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="desktop">
                        <h3>Projects</h3>
                        <h3>About</h3>
                        <h3>
                            <a href="https://github.com/ayezabashir">
                                github
                            </a>
                        </h3>
                        <h3>
                            <a href="">
                                Resume
                            </a>
                        </h3>
                        <button>
                            dark/light mode
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
