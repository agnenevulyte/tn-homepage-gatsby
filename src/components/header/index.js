import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";
import './header.css';
// import BurgerNavSvg from '../images/svgs/burger-nav';
// import CloseSvg from '../images/svgs/close';
import PropTypes from "prop-types";

function Header({ siteTitle, menuLinks, ...props }) {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNavBurger = () => {
        return setMobileNavOpen(!mobileNavOpen);
    }

    return (
        <React.Fragment>
            <div className='row'>
                <header className="header header--orange">
                    <div className={`header__open_mob_nav ${mobileNavOpen ? "mobNavOpen" : "mobNavClosed"}`}>


                        <div className={`header__mob_popout_container`}>


                            <div >
                                <nav className={` ${mobileNavOpen ? "slideIn" : "slideOut"} `}>
                                    <ul style={{ display: "flex", flex: 1 }}>
                                        {menuLinks.map(link => (
                                            <li
                                                key={link.name}
                                                style={{
                                                    listStyleType: `none`,
                                                    padding: `1rem`,
                                                }}
                                            >
                                                <Link style={{ color: `white` }} to={link.link}>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>


                    <div className="header__container container container--large d-flex flex-row no-gutters w-100">


                        <div className="header__branding d-flex flex-row">

                            <div className="header__logo_container_desktop">
                                <Link href={'/'}>
                                    <img src="./header_logo.svg" alt="header logo tn" />
                                </Link>


                            </div>

                            <div className="header__burger_container">
                                buttons!!!
                        </div>

                            <div className="header__mobile_nav_container">
                                <img src="./header_logo_small.svg" alt="header logo small" />
                            </div>
                            <div className="header__desktop_nav_container">

                                <nav>
                                    <ul style={{ display: "flex", flex: 1 }}>
                                        {menuLinks.map(link => (
                                            <li
                                                key={link.name}
                                                style={{
                                                    listStyleType: `none`,
                                                    padding: `1rem`,
                                                }}
                                            >
                                                <Link style={{ color: `white` }} to={link.link}>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                            </div>

                        </div>

                    </div>

                </header>
            </div>
        </React.Fragment>
    )
}


Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header;