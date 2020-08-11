import React from 'react'
import '../components_styles/wrapper-content.css'

class WrapperContet extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper-content">
                    <label className="wrapper-content__input-title">{this.props.text}</label>
                    <div className="control input-group">
                        <input type="text" className="control__input form-control" placeholder={this.props.prompt} disabled />
                    </div>
                </div>
            </div>
        )
    }
}

export default WrapperContet;