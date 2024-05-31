import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const isAuthenticated = () => {
    // Replace this with your actual authentication logic
    return !!localStorage.getItem('authToken');
};

const AuthGuard = ({ children }) => {
    const [isAuth, setIsAuth] = useState(isAuthenticated());
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if (!isAuth) {
            // Redirect to the login page if not authenticated
            navigate('/auth/signin', { state: { from: location }, replace: true });
        }
    }, [isAuth, navigate, location]);

    useEffect(() => {
        const checkAuth = () => {
            setIsAuth(isAuthenticated());
        };

        // Check authentication status on mount
        checkAuth();

        // Optionally, add an event listener to detect token changes
        window.addEventListener('storage', checkAuth);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('storage', checkAuth);
        };
    }, []);

    if (!isAuth) {
        // Optionally, render a loading spinner or null while checking authentication
        return (
            <p>Loading...</p>
        );
    }

    return children;
};

export default AuthGuard;
