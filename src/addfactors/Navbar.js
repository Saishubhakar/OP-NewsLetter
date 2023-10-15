const Navbar = (props)=>{

        return (
            <>
                <nav className="navbar baring navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand logo" href="/">OP NEWS</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link categories" aria-current="page" href="/">General</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link categories" href="/business">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link categories" href="/entertainment">Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link categories" href="/health">Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link categories" href="/science">Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link categories" href="/sports">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link categories" href="/technology">Technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }

export default Navbar
