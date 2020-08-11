import React from 'react'
import '../components_styles/wrapper-content.scss'

class WrapperContet extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper-content">
                    <label className="wrapper-content__input-title">{this.props.text}</label>
                    <div className="input-group control">
                        <input type="text" className="control__input form-control" placeholder={this.props.prompt} disabled />
                    </div>
                </div>
            </div>
        )
    }
}

export default WrapperContet;