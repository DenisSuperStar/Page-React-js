import React from 'react';
import MobileMenu from './mobile_menu.js'
import NavbarLeft from './navbar-left.js'
import NavbarRight from './navbar-right.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components_styles/menu.scss';
import logo from '../assets/signs/wm_logo.png';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar-container">
                    <div>
                    <a className="navbar-brand" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                        <img src={logo} className="d-inline-block align-top" alt="logo" />
                    </a>
                    </div>
                    <div id="menu__shown">
                        <NavbarLeft />
                        <NavbarRight />
                    </div>
                    <div id="menu__hidden">
                        <MobileMenu />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;