import React from 'react'

class ItemTitle extends React.Component {
    render() {
        return (
            <h4 class="part-list-container__title">{this.props.header}</h4>
        )
    }
}

export default ItemTitle;