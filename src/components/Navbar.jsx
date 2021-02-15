import React from 'react';
import logo from "../images/logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="nav__text">
                    <ul className="navbar__left">
                        <div className="navbar__logo">
                            <img src={logo} alt="" />
                        </div>
                    </ul>

                    <ul className="navbar__right">
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>

                    </ul>
            
                </div>

            </div>

        </div>
    );
};

export default Navbar;