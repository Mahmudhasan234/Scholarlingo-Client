import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const DashBoardHome = () => {
    const { user } = useContext(AuthContext)
console.log(user)
    return (
        <div>
            <h1 className="text-4xl font-bold">Welcome {user.displayName}</h1>
            <img src="https://img.freepik.com/free-vector/happy-tiny-people-near-huge-welcome-word-flat-illustration_74855-10808.jpg?w=996&t=st=1686575701~exp=1686576301~hmac=46b5de6cba80cf162273d0d7953ec3d9bf88bff1c8535c6663aaeaf88a72375e" alt="" />
        </div>
    );
};

export default DashBoardHome;