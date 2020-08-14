import React from 'react';
import MobileMenu from './mobile_menu.js'
import NavbarLeft from './navbar-left.js'
import NavbarRight from './navbar-right.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components_styles/menu.scss';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar-container">
                    <div>
                    <a className="navbar-brand" href="#">Navbar</a>
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