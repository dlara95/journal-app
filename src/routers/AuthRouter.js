import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import LoginScreen from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>
                    <Route
                        index
                        path="/login"
                        element={<LoginScreen />} />
                    <Route
                        index
                        path="/register"
                        element={<RegisterScreen />} />

                    <Route path="*" element={<LoginScreen />} />
                </Routes>
            </div>
        </div>
    )
}
