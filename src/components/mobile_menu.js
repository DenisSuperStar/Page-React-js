import React from 'react'
import '../components_styles/mobile_menu.scss'

class MobileMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            item: [
                {id: 0, link: 'Обмен'},
                {id: 1, link: 'Бонусы'},
                {id: 2, link: 'Заработок'},
                {id: 3, link: 'FAQ'},
                {id: 4, link: 'Связаться с поддержкой'},
                {id: 5, link: 'Войти'},
                {id: 6, link: 'Создать аккаунт'}
            ]
        }
    }
    render() {
        const RENDER_MOBILE_MENU_ITEMS = this.state.item.map(item => {
            return (
                <li className="menu-box__item-list" key={item.id}>
                    <a 
                    href="#" 
                    className="
                        menu-box__item-link 
                        menu-box_link_sizes 
                        menu-box_link_colored
                    "
                    >
                        {item.link}
                    </a>
                </li> 
            )
        })
        return (
            <div>
                <div className="humburger-menu">
                    <input type="checkbox" id="menu__toggle" className="humburger-menu__toggle" />
                    <label 
                        className="
                            humburger-menu__btn 
                            humburger-menu_sizes 
                            humburger-menu_moved
                            humburger-menu_colored
                        " 
                        htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul 
                        className="
                            menu-box 
                            menu-box_moved 
                            menu-box_sizes 
                            menu-box_outer_dists 
                            menu-box_colored_shadow
                        "
                        >
                            {RENDER_MOBILE_MENU_ITEMS}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MobileMenu;