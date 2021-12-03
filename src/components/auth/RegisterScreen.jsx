import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegister } from '../../actions/auth';
import { setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.ui);

    const { msgError } = state;

    const [formValues, handleInputChange] = useForm({
        name: 'Noah',
        email: 'noah@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { email, password, name, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegister(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each others.'));
            return false;
        }
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange} />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange} />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange} />
                <input
                    type="password"
                    name="password2"
                    placeholder="Confirm"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary btn-block mb-5">Login</button>

                <Link to="/auth/login" className="link mt-5">Already registered?</Link>

            </form>
        </>
    )
}
