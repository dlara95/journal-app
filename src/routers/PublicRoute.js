import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from "react-router";


export const PublicRoute = ({
    isAuthenticated,
    children,
}) => {

    return  isAuthenticated ? <Navigate to="/" /> : children;

}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}