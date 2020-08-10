import React from 'react'

class ItemList extends React.Component {
    render() {
        return (
            <li className="column-list__item">{this.props.name}</li>
        )
    }
}

ItemList.defaultProps = {name: ''};

export default ItemList;