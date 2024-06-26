import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logoAimEdge.jpeg';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink to="/dashboard" className="navbar-item" >
                        <img
                            src={logo}
                            style={{ width: "110", height: "40px", maxHeight: "none" }}
                            alt="logo" />
                    </NavLink>

                    <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
