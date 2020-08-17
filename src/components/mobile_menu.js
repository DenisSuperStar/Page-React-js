import React from 'react';
import '../components_styles/mobile_menu.scss';
import faq from '../assets/menu/faq.png';
import PropTypes from 'prop-types';

class MobileMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            item: [
                {id: 0, link: 'Обмен', link_name: 'Exchange'},
                {id: 1, link: 'Бонусы', link_name: 'Bonuses'},
                {id: 2, link: 'Заработок', link_name: 'Income'},
                {id: 3, link: 'FAQ', icon: faq, link_name: 'FAQ'},
                {id: 4, link: 'Связаться с поддержкой', link_name: 'Support'},
                {id: 5, link: 'Войти', link_name: 'LogIn'},
                {id: 6, link: 'Создать аккаунт', link_name: 'Account'}
            ]
        }
    }
    render() {
        const RENDER_MOBILE_MENU_ITEMS = this.state.item.map(item => {
            return (
                <li className="menu-box__item-list" key={item.id}>
                    <a 
                        href="#fa" 
                        className="
                            menu-box__item-link 
                            menu-box_link_sizes 
                            menu-box_link_colored
                        "
                        id={`menu-box__${item.link_name}`}
                    >
                        {item.link}
                        <img src={item.icon} className="menu-box__icon menu-box_icon-sizes" alt={item.link} />
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

MobileMenu.propTypes = {
    icon: PropTypes.string.isRequired
}

MobileMenu.defaultProps = {icon: ''}

export default MobileMenu;