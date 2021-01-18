import React from 'react'
import PropTypes from 'prop-types';

const ErrorSign = ({mensaje}) => {
    return ( 
        <div>
            {mensaje}
        </div>
     );
}

ErrorSign.propTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default ErrorSign;
