import React from 'react'
import '../components_styles/navbar-left.scss'

class NavbarLeft extends React.Component {
    constructor() {
        super();
        this.state = {
            item: [
                {id: 0, link: 'Обмен'},
                {id: 1, link: 'Бонусы'},
                {id: 2, link: 'Заработок'},
                {id: 3, link: 'FAQ'},
                {id: 4, link: 'Связаться с поддержкой'}
            ]
        }
    }
    render () {
        const RENDER_MENU_ITEMS = this.state.item.map(item => {
            return (
                <li className="menu-left__list" key={item.id}>
                    <a 
                        href="#" 
                        className="
                                menu-left__link 
                                menu-left_outer 
                                menu-left_color_link
                                menu-left_size_text
                            "
                        >
                            {item.link}
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

export default NavbarLeft;