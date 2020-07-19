import React, { useState } from 'react';
import LinkButton from '../button';
import BurgerNavSvg from '../images/svgs/burger-nav';
import CloseSvg from '../images/svgs/close';
// import '../../breakpoints.css'
import '../../fonts.css';
import './header.css';
import '../../colors.css';

function Header({ ...props }) {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNavBurger = () => {
        return setMobileNavOpen(!mobileNavOpen);
    }

    return (
        <React.Fragment>
            <header className="header header--orange w-100">

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
                            <img className="header__logo--mobile" src="./header_logo_small.svg" alt="header logo mobile tn" />
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