import React from 'react';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <p className='text-center'>Loading...</p>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }

   
};

export default RequireAuth;