import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const RequireAuth = ({ children }) => {

    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', color: '#ff3d55' }} />
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;


}

export default RequireAuth;