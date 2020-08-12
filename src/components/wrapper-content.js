import React from 'react';
import '../components_styles/wrapper-content.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class WrapperContet extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper-content">
                    <label className="wrapper-content__input-title">{this.props.text}</label>
                    <div className="input-group control control_is_length">
                        <input 
                            type="text" 
                            className="
                                    control__input 
                                    form-control 
                                    control-tall 
                                    control_is_colored 
                                    control_remove_border
                                    control_is_outer_distance
                                " 
                            placeholder={this.props.prompt} 
                            disabled
                            id={this.props.id} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default WrapperContet;