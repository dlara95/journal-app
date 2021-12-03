import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from "react-router";


export const PrivateRoute = ({
    isAuthenticated,
    children,
}) => {

    return isAuthenticated ? children : <Navigate to="/auth/login" />;
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}