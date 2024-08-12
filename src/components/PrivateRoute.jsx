import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, path }) {
    const location = useLocation();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
}

export default PrivateRoute;