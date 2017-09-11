import React from 'react';
import PropTypes from 'prop-types';
import './avatar.scss';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='input-field-container'>
                <img className="avatar" src="http://hinhanhdepvip.com/wp-content/uploads/2016/07/girl-xinh-de-thuong-2.jpg" alt="">
            </div>
        );
    }
}

// InputField.propTypes = {
//     type        : PropTypes.string,
//     defaultValue: PropTypes.bool,
//     name        : PropTypes.string,
//     onChange    : PropTypes.func,
//     className   : PropTypes.string,
//     placeholder : PropTypes.string,
//     message     : PropTypes.string
// };

export default InputField;
