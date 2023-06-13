import React from 'react';

const Logo = ({logo}) => {

    return (
        <div>
            <img className='h-4 md:h-8 lg:12' src={logo? logo : 'https://i.ibb.co/FmGd9Pz/removal-ai-tmp-6481260c2086f.png'} alt="" />
        </div>
    );
};

export default Logo;