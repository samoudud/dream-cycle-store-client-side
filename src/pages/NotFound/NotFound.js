import React from 'react';
import err from '../../images/error.png'
import Navigation from '../Shared/Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <img src={err} alt="" />
        </div>
    );
};

export default NotFound;