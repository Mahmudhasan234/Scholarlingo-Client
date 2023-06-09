import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const PrivateRoute = () => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    
    if(user){
       return children
    }
    
    return (
        <Navigate state={{ from: location }} to='/login' replace></Navigate>
    );
};

export default PrivateRoute;