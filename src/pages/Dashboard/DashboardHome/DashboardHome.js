import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>Welcome {user?.displayName}</h2>
        </div>
    );
};

export default DashboardHome;