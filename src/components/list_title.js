import React from 'react'
import '../components_styles/list_title.scss'

class ItemTitle extends React.Component {
    render() {
        return (
            <h4 className="part-list-container__title" id={`${this.props.id}__title`}>{this.props.header}</h4>
        )
    }
}

export default ItemTitle;