import { Link } from "react-router-dom";
import logo from "/assets/images/logos/logo.png";

function Header() {
    return (
        <header className="uk-navbar-container uk-padding-small" data-uk-sticky="top: 100; animation: uk-animation-slide-top">
            <div className="uk-container uk-flex uk-flex-between uk-flex-middle">

                {/* LOGO */}
                <div className="logos uk-flex uk-flex-middle">
                    <Link to="/" className="uk-flex uk-flex-middle">
                        <div className="logo-img">
                            <img src={logo} alt="Logo Funerária do Paulinho Sistema Prever" width={40} height={40} />
                        </div>
                        <div>
                            <h1 className="logo-letter uk-margin-small-left">Funerária do Paulinho</h1>
                        </div>
                    </Link>
                </div>

                {/* NAV DESKTOP */}
                <nav className="uk-visible@m">
                    <ul className="uk-navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">Sobre</Link></li>
                        <li><Link to="/services">Serviços</Link></li>
                    </ul>
                </nav>

                {/* BOTÃO MOBILE */}
                <div className="uk-navbar-right uk-hidden@m">
                    <a className="uk-navbar-toggle uk-navbar-toggle-animate" data-uk-toggle="target: #offcanvas-menu">
                        <span data-uk-navbar-toggle-icon></span>
                    </a>
                </div>
            </div>

            {/* OFFCANVAS MENU MOBILE */}
            <div
                id="offcanvas-menu"
                data-uk-offcanvas="flip: true; overlay: true"
                className="custom-offcanvas"
            >
                <div className="uk-offcanvas-bar uk-flex uk-flex-column uk-flex-center uk-text-center">
                    <button className="uk-offcanvas-close" type="button" data-uk-close></button>

                    <ul className="uk-nav uk-nav-default uk-width-1-1">
                    <li><Link to="/" className="offcanvas-link">Home</Link></li>
                    <li><Link to="/about" className="offcanvas-link">Sobre</Link></li>
                    <li><Link to="/services" className="offcanvas-link">Serviços</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;