import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useRole from '../../hooks/useRole';

const SellerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [role, isRoleLoading] = useRole(user?.email);
    const location = useLocation();

    if (loading || isRoleLoading) {
        return <div className='h-[100vh] flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user && role === 'seller') {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;