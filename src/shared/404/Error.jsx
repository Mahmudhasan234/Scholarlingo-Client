import React from 'react';
import Logo from '../Navbar/Logo/Logo';


const Error = () => {
    return (
        <div className='flex flex-col items-center'>
          <img className='h-[600px]' src="https://img.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg?w=740&t=st=1686667744~exp=1686668344~hmac=a3db37f782765c43fdbe9193a0f06573a4484c7a01df88a1a676f45703dd2190" alt="" />
          <div>
            <p>We are so sorry we faced a problem 😔  😔  😔 </p>
            <br />
            <Logo></Logo>

          </div>
        </div>

    );
};

export default Error;