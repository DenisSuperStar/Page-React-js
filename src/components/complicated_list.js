import React from 'react';
import ItemList from '../components/item_list.js';
import ItemTitle from '../components/list_title.js';
import '../components_styles/complicated_list.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import qiwi from '../assets/icons/kiwi.png';
import privat from '../assets/icons/privat24.png';
import yandex from '../assets/icons/yandex.png';
import vis_master from '../assets/icons/visa_mastercard.png';
import oschad from '../assets/icons/ukbank.png';
import mono from '../assets/icons/monobank.png';
import pumb from '../assets/icons/pumb.png';
import raiffeisen from '../assets/icons/raiffeisen.png'

class ListComplicated extends React.Component {
    constructor() {
        super();
        this.state = {
            send: [
                {id: 0, name: 'QIWI RUB', icon: qiwi, iname: 'qiwi'},
                {id: 1, name: 'Приват 24UAH', icon: privat, iname: 'privat'},
                {id: 2, name: 'Яндекс Деньги', icon: yandex, iname: 'yandex'},
                {id: 3, name: 'Visa/MasterCard UAH', icon: vis_master, iname: 'vis_master'},
                {id: 4, name: 'Ощадбанк', icon: oschad, iname: 'oschad'},
                {id: 5, name: 'Монобанк', icon: mono, iname: 'mono'},
                {id: 6, name: 'ПУМБ', icon: pumb, iname: 'pumb'},
                {id: 7, name: 'Райфайззен UAH', icon: raiffeisen, iname: 'raiffeisen'},
                {id: 8, name: 'Bitcoin (BTC)', iname: 'bitcoin'},
                {id: 9, name: 'Bitcoin Cash (BCH)', iname: 'bitcash'}
            ],
            accept: [
                {id: 0, name: 'Приват 24UAH', icon: privat, iname: 'privat'},
                {id: 1, name: 'Яндекс Деньги', icon: yandex, iname: 'yandex'},
                {id: 2, name: 'Visa/MasterCard UAH', icon: vis_master, iname: 'vis_master'},
                {id: 3, name: 'Ощадбанк', icon: oschad, iname: 'oschad'},
                {id: 4, name: 'Монобанк', icon: mono, iname: 'mono'},
                {id: 5, name: 'ПУМБ', icon: pumb, iname: 'pumb'},
                {id: 6, name: 'Райфайззен UAH', icon: raiffeisen, iname: 'raiffeisen'},
                {id: 7, name: 'Bitcoin (BTC)', iname: 'bitcoin'},
                {id: 8, name: 'Bitcoin Cash (BCH)', iname: 'bitcash'}
            ],
            price: [
                {id: 0, price: '185 955.00'},
                {id: 1, price: '0'},
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
            return <ItemList 
                name={item.name} 
                key={item.id} 
                icon={item.icon} 
                id={`fa-${item.iname}`} 
            />
        })
        const RENDER_ACCEPT_ITEMS = this.state.accept.map(item => {
            return <ItemList name={item.name} key={item.id} icon={item.icon} id={`fa-${item.iname}`} />
        })
        const RENDER_PRICE = this.state.price.map(coin => {
            return <ItemList name={coin.price} key={coin.id} id={`third-${coin.id + 1}`} />
        })
        return (
            <div>
                <div 
                    className="
                            list-complicated-container 
                            list-complicated-container_shadow
                        "
                >
                    <div className="part-list-container" id="first">
                        <ItemTitle header="Отдаете" id="first-header" />
                        <ul className="column-list list-group">
                            {RENDER_SEND_ITEMS}
                        </ul>
                    </div>

                    <div className="
                            part-list-container 
                            part-list-container_is_outer_dists
                            part-list-container_top-dist
                        "
                        id="second"
                    >
                        <ItemTitle header="Получаете" id="second-header" />
                        <ul className="column-list list-group">
                            {RENDER_ACCEPT_ITEMS}
                        </ul>
                    </div>

                    <div className="
                            part-list-container
                            part-list-container_is_outer_dists
                            part-list-container_top-dist
                        "
                        id="third"
                    >
                        <ItemTitle header="Доступный резерв" id="third-header" />
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