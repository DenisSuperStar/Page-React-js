import React from 'react';
import MenuLeft from './menu_item_left.js';
import NavbarRight from './navbar-right.js';
import '../components_styles/menu.scss';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            menu_left: [
                {id: 0, link: "Обмен"},
                {id: 1, link: "Бонусы"},
                {id: 2, link: "Заработок"},
                {id: 3, link: "FAQ"},
                {id: 4, link: 'Связаться с поддержкой'}
            ]
        }
    }
    render() {
        const RENDER_MENU_ITEMS = this.state.menu_left.map(item => {
            return <MenuLeft link={item.link} key={item.id} />
        })
        return (
            <div>
                <nav className="navbar-container">
                    <div className="navbar-left">
                        <ul className="menu-left menu-left_remove_list-styles">
                            <a className="menu-left__navbar-brand" href="#">NavBar</a>
                            {RENDER_MENU_ITEMS}
                        </ul>
                    </div>
                    <NavbarRight />
                </nav>
            </div>
        )
    }
}

export default Menu;