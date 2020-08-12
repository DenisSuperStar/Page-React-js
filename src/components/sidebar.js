import React from 'react'
import WrapperContent from './wrapper-content.js'
import '../components_styles/sidebar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            credited: [
                {id: 0, text: "Отдаете (QIWI RUB)", help: "Min: 5000; Max: 100 000"},
                {id: 1, text: "Получаете (Яндекс Деньги)", help: "Min: 4850.00; Max: 9700.00"}
            ],
            requisites: [
                {id: 0, text: 'QIWI.кошелек ("без +")', prompt: "Пример: 38066..., 7916..., ..."},
                {id: 1, text: 'Яндекс счет', prompt: "Пример: 410011234567890"},
                {id: 2, text: "E-mail", prompt: "user@mail.com"}
            ]
        }
    }
    render () {
        const RENDER_CREDITED = this.state.credited.map(item => {
            return <WrapperContent text={item.text} prompt={item.help} key={item.id} />
        })
        const RENDER_REQUISITIES = this.state.requisites.map(item => {
            return <WrapperContent text={item.text} prompt={item.prompt} key={item.id} />
        })
        return (
            <div>
                <div className="sidebar">
                    <h2 className="sidebar__title">Сумма обмена</h2>
                    <form className="form-crediting">
                        {RENDER_CREDITED}
                    </form>

                    <h2 className="sidebar__wrapper-content">Реквизиты</h2>
                    <form className="form-requisites">
                        {RENDER_REQUISITIES}
                        <label className="checkbox-container">
                            <span className="checkbox-container__text">Я согласен c <a href="#" className="checkbox-container__link">условиями и правилами сервиса</a></span>
                            <input type="checkbox" className="checkbox-container__checkbox" />
                            <span className="checkbox-container__checkmark"></span>
                        </label>
                        <button type="submit" className="btn btn-lg btn-exchange">Обменять</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Sidebar;