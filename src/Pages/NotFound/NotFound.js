import React from 'react';
import { Link } from 'react-router-dom';

import notfound from '../../Images/notfound.png';

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <br />
            <Link to ="/"><button>Go back</button></Link>
            
        </div>
    );
};

export default NotFound;