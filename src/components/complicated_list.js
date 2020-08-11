import React from 'react';
import ItemList from '../components/item_list.js';
import ItemTitle from '../components/list_title.js';
import '../components_styles/complicated_list.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class ListComplicated extends React.Component {
    constructor() {
        super();
        this.state = {
            send: [
                {id: 0, name: 'QIWI RUB'},
                {id: 1, name: 'Приват 24UAH'},
                {id: 2, name: 'Яндекс Деньги'},
                {id: 3, name: 'Visa/MasterCard UAH'},
                {id: 4, name: 'Ощадбанк'},
                {id: 5, name: 'Монобанк'},
                {id: 6, name: 'ПУМБ'},
                {id: 7, name: 'Райфайззен UAH'},
                {id: 8, name: 'Bitcoin (BTC)'},
                {id: 9, name: 'Bitcoin Cash (BCH)'}
            ],
            accept: [
                {id: 0, name: 'Приват 24UAH'},
                {id: 1, name: 'Яндекс Деньги'},
                {id: 2, name: 'Visa/MasterCard UAH'},
                {id: 3, name: 'Ощадбанк'},
                {id: 4, name: 'Монобанк'},
                {id: 5, name: 'ПУМБ'},
                {id: 6, name: 'Райфайззен UAH'},
                {id: 7, name: 'Bitcoin (BTC)'},
                {id: 8, name: 'Bitcoin Cash (BCH)'}
            ],
            price: [
                {id: 0, price: '185 955.00'},
                {id: 1, price: ''},
                {id: 2, price: '145 898.00'},
                {id: 3, price: '139 911.00'},
                {id: 4, price: '128 490.00'},
                {id: 5, price: '135 107.00'},
                {id: 6, price: '134 717.00'},
                {id: 7, price: '1.90'},
                {id: 8, price: '7.22'}
            ]
        }
    }
    render () {
        const RENDER_SEND_ITEMS = this.state.send.map(item => {
            return <ItemList name={item.name} key={item.id} />
        })
        const RENDER_ACCEPT_ITEMS = this.state.accept.map(item => {
            return <ItemList name={item.name} key={item.id} />
        })
        const RENDER_PRICE = this.state.price.map(coin => {
            return <ItemList name={coin.price} key={coin.id} />
        })
        return (
            <div>
                <div className="list-complicated-container">
                    <div className="part-list-container first-part-list">
                        <ItemTitle header="Отдаете" />
                        <ul className="column-list list-group">
                            {RENDER_SEND_ITEMS}
                        </ul>
                    </div>

                    <div className="part-list-container second-part-list">
                        <ItemTitle header="Получаете" />
                        <ul className="column-list list-group">
                            {RENDER_ACCEPT_ITEMS}
                        </ul>
                    </div>

                    <div className="part-list-container third-part-list">
                        <ItemTitle header="Доступный резерв" />
                        <ul className="column-list list-group">
                            {RENDER_PRICE}
                        </ul>
                    </div>
                </div>  
            </div>
        )
    }
}

export default ListComplicated;