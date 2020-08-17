import React from 'react'
import '../components_styles/navbar_right.scss'

class NavbarRight extends React.Component {
    constructor() {
        super();
        this.state = {
            menu_item: [
                {id: 0, link: "Войти"},
                {id: 1, link: "Создать аккаунт"}
            ]
        }
    }
    render() {
        const RENDER_ITEM = this.state.menu_item.map(item => {
            return (
                <div key={item.id}>
                    <li className="menu-right__list">
                        <a 
                            href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" 
                            className="
                                menu-right__link
                                menu-right_is_color_link 
                                menu-right_inner_distance
                                menu-right_is_size_text
                            "
                            id={`link_${item.id + 1}`}
                        >
                            {item.link}
                        </a>
                    </li>  
                </div>
                
            )
        })
        return (
            <div className="navbar-right">
                <ul className="menu-right menu-right_remove_list_styles">
                    {RENDER_ITEM}
                </ul>
            </div>
        )
    }
}

export default NavbarRight;