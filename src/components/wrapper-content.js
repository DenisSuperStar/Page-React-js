import React from 'react'

class WrapperContet extends React.Component {
    render() {
        return (
            <div>
                <div class="wrapper-content">
                    <label class="wrapper-content__input-title">{this.props.text}</label>
                    <div class="form-control">
                        <input type="text" class="form-control__input" placeholder={this.props.prompt} />
                    </div>
                </div>
            </div>
        )
    }
}

export default WrapperContet;