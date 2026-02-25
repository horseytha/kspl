import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ roles }) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }

    if (roles && !roles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
