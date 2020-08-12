import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components_styles/item_list.scss'

class ItemList extends React.Component {
    render() {
        return (
            <li 
                className="
                    column-list__item 
                    list-group-item 
                    list-group__item 
                    column-list_is_size_text
            ">
                {this.props.name}
            </li>
        )
    }
}

ItemList.defaultProps = {name: ''};

export default ItemList;