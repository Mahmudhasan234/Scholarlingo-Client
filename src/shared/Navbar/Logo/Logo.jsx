import React, { useEffect, useState } from 'react';

const Logo = ({logo}) => {

    return (
        <div>
            <img className='h-12' src={logo} alt="" />
        </div>
    );
};

export default Logo;