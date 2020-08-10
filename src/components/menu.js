import React from 'react'

class Menu extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar-container">
                    <div class="navbar-left">
                        <ul class="menu-left">
                            <a class="menu-left__navbar-brand" href="#">NavBar</a>
                            <li class="menu-left__list">
                                <a href="#" class="menu-left__link">Обмен</a>
                            </li>
                            <li class="menu-left__list">
                                <a href="#" class="menu-left__link">Бонусы</a>
                            </li>
                            <li class="menu-left__list">
                                <a href="#" class="menu-left__link">Заработок</a>
                            </li>
                            <li class="menu-left__list">
                                <a href="#" class="menu-left__link">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar-right">
                        <ul class="menu-right">
                            <li class="menu-right__list">
                                <a href="#" class="menu-right__link">Войти</a>
                            </li>
                            <li class="menu-right__list">
                                <a href="#" class="menu-right__link">Создать аккаунт</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;