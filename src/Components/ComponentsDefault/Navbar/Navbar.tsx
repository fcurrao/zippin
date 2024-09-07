
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className='navbar-header'>
            <Link className="logo-container" to="https://www.zippin.com.ar" title="Zippin Website">
                <img
                    className="navbar-logo"
                    src="https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-6/358708237_739715288159125_7086510517219306720_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=aw5E42QeQqsQ7kNvgGNozoc&_nc_ht=scontent.faep14-2.fna&oh=00_AYA9mKjH26sBRFugHFKJEnR_frsF3oNiCwvM3GztLNctMQ&oe=66E0FCA7"
                    alt="Zippin Logo"
                    width={60}
                    height="auto"
                />
            </Link>
            <Link to="/" aria-label="Homepage">
                <h1 className="navbar-title">Zippin</h1>
            </Link>
        </nav>
    );
};
