import React from 'react';
import '../components_styles/wrapper-content.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

class WrapperContet extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper-content">
                    <label className="wrapper-content__input-title">{this.props.text}</label>
                    <div className="input-group control control_input-group">
                        
                        <img src={this.props.icon} className="control__icon control_img_sizes" id={this.props.imgid} alt={this.props.prompt} />
                        
                        <input 
                            type="text" 
                            className="
                                    control__input 
                                    form-control 
                                    control_input-size 
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

WrapperContet.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    imgid: PropTypes.string.isRequired,
    prompt: PropTypes.string,
    id: PropTypes.string.isRequired
}

WrapperContet.defaultProps = {icon: '', imgid: '', id: ''};

export default WrapperContet;