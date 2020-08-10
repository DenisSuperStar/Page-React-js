import React from 'react'
import WrapperContent from './wrapper-content.js'

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
            return <WrapperContent text={item.text} prompt={item.help} />
        })
        const RENDER_REQUISITIES = this.state.requisites.map(item => {
            return <WrapperContent text={item.text} prompt={item.prompt} />
        })
        return (
            <div>
                <div class="sidebar">
                    <h2 class="sidebar__title">Сумма обмена</h2>
                    <form class="form-crediting">
                        {RENDER_CREDITED}
                    </form>

                    <h2 class="wrapper-content__requisites">Реквизиты</h2>
                    <form class="form-requisites">
                        {RENDER_REQUISITIES}
                        <label class="checkbox-container">
                            <span class="checkbox-container__text">Я согласен c <a href="#" class="checkbox-container__link">условиями и правилами сервиса</a></span>
                            <input type="checkbox-container__checkbox" />
                            <span class="checkbox-container__checkmark"></span>
                        </label>
                        <button type="submit" class="btn-exchange">Обменять</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Sidebar;