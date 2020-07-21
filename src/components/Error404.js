import React from 'react';
import Error404 from './404.png'

const Error = () => {
    return ( 
    <div className="Error">
        <div className="Error-contenedor">
            <img src={Error404} alt="Error" />
        </div>
    </div> );
}
 
export default Error ;