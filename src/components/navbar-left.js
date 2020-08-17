import React from 'react';
import '../components_styles/navbar-left.scss';
import faq from '../assets/menu/faq.png';

class NavbarLeft extends React.Component {
    constructor() {
        super();
        this.state = {
            item: [
                {id: 0, link: 'Обмен', link_name: 'Exchange'},
                {id: 1, link: 'Бонусы', link_name: 'Bonuses'},
                {id: 2, link: 'Заработок', link_name: 'Income'},
                {id: 3, link: 'FAQ', icon: faq, link_name: 'FAQ'},
                {id: 4, link: 'Связаться с поддержкой', link_name: 'Support'}
            ]
        }
    }
    render () {
        const RENDER_MENU_ITEMS = this.state.item.map(item => {
            return (
                <li className="menu-left__list" key={item.id} id={`${item.link_name}__list`}>
                    <a 
                        href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" 
                        className="
                                menu-left__link 
                                menu-left_outer 
                                menu-left_color_link
                                menu-left_size_text
                            "
                        >
                            {item.link}
                            <img 
                                src={item.icon}
                                className="menu-left__icon menu-left_scale"
                                id={item.link_name}
                                alt={item.link_name} 
                            />
                    </a>
                </li>
            ) 
        })
        return (
            <div className="navbar-left">
                <ul className="menu-left">
                    {RENDER_MENU_ITEMS}
                </ul> 
            </div>
        )
    }
}

NavbarLeft.defaultProps = {icon: ''}

export default NavbarLeft;