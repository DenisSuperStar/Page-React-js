import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemList extends React.Component {
    render() {
        return (
            <li className="column-list__item list-group__item list-group-item">{this.props.name}</li>
        )
    }
}

ItemList.defaultProps = {name: ''};

export default ItemList;