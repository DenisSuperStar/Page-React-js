import React from 'react'

class WrapperContet extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper-content">
                    <label className="wrapper-content__input-title">{this.props.text}</label>
                    <div className="form-control">
                        <input type="text" className="form-control__input" placeholder={this.props.prompt} disabled />
                    </div>
                </div>
            </div>
        )
    }
}

export default WrapperContet;