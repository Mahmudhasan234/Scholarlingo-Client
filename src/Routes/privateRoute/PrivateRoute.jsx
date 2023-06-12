import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <Skeleton className='text-center' count={10} height={30} />
    }
    
    if(user){
       return children
    }
    
    return (
        <Navigate state={{ from: location }} to='/login' replace></Navigate>
    );
};

export default PrivateRoute;