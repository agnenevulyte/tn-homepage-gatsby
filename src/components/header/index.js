import React, { useState } from 'react';
import LinkButton from '../button';
import BurgerNavSvg from '../images/svgs/burger-nav';
import CloseSvg from '../images/svgs/close';
import './header.css';

function Header({ ...props }) {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNavBurger = () => {
        return setMobileNavOpen(!mobileNavOpen);
    }

    return (
        <React.Fragment>
            <header className={mobileNavOpen ? 'header header--open-mobile-nav' : 'header header--orange'} >
                <div className="header__container container container--large d-flex flex-row no-gutters w-100">

                    <button
                        aria-label="Open menu"
                        className="header__burger-nav"
                        type="button"
                        onClick={toggleMobileNavBurger}
                    >
                        {!mobileNavOpen && <BurgerNavSvg />}
                        {mobileNavOpen && <CloseSvg />}
                    </button>

                    <div className="header__branding d-flex flex-row">
                        <a className="nav__link a--small" href='/'>
                            <img className="header__logo--desktop" src="./header_logo.svg" alt="header logo tn" />
                            <img className="header__logo--mobile" src={mobileNavOpen ? 'https://images.prismic.io/trade-nation-marketing-cms%2F8ad90079-abf0-492b-a99e-33982b0ec6d8_icon.svg?auto=compress,format' : "./header_logo_small.svg"} alt="header logo mobile tn" />
                        </a>
                    </div>


                    <nav className="header__nav nav">
                        <a className="nav__link a--small" href='/'>
                            What we do
                        </a>
                        <a className="nav__link a--small" href='/'>
                            Why choose us
                        </a>
                        <a className="nav__link a--small" href='/'>
                            Who we are
                        </a>
                        <a className="nav__link a--small" href='/'>
                            FAQ
                        </a>
                        <a className="nav__link a--small" href='/'>
                            Discover More
                        </a>
                        {mobileNavOpen && (
                            <div className="nav__footer-links">
                                <a href="/" className="nav__footer-link">Get in touch</a>
                                <a href={"https://tradenation.com/login"} className="nav__footer-link">Login</a>
                            </div>
                        )}
                    </nav>


                    <div className="header__cta">
                        <LinkButton text="Login" destination="/" />
                        <LinkButton text="Join us" destination="/" secondary />
                    </div>

                </div>
            </header>
        </React.Fragment>
    );
}
export default Header