import React from 'react'

class MenuItemLeft extends React.Component {
    render() {
        return (
            <li className="menu-left__list">
                <a href="#" className="menu-left__link">{this.props.link}</a>
            </li>
        )
    }
}

export default MenuItemLeft;