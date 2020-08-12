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
                        <a href="#" className="menu-right__link menu-right_inner-distance">{item.link}</a>
                    </li>  
                </div>
                
            )
        })
        return (
            <div className="navbar-right">
                <ul className="menu-right">
                    {RENDER_ITEM}
                </ul>
            </div>
        )
    }
}

export default NavbarRight;