import React, { useEffect, useState } from 'react';

const Logo = ({logo}) => {

    return (
        <div>
            <img className='h-6 md:h-8 lg:12' src={logo} alt="" />
        </div>
    );
};

export default Logo;