import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword, startLoginGoogle } from '../../actions/auth';
import { useSelector } from 'react-redux';

const LoginScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.ui);

    const { loading } = state;

    const [formValues, handleInputChange] = useForm({
        email: 'noah3@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    };

    const handleGoogleLogin = () => {
        dispatch(startLoginGoogle(email, password));
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>Login</button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">Create new account</Link>

            </form>
        </>
    )
}

export default LoginScreen;
