import React from 'react'
import '../components_styles/menu_item_left.scss'

class MenuItemLeft extends React.Component {
    render() {
        return (
            <li className="menu-left__list">
                <a 
                    href="#" 
                    className="
                            menu-left__link 
                            menu-left_left_distance 
                            menu-left_is_color_link
                            menu-left_is_size_text
                        "
                    >
                        {this.props.link}
                </a>
            </li>
        )
    }
}

export default MenuItemLeft;