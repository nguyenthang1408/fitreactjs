import React from 'react';
import classNames from 'classnames/bind';
import styles from './logout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/button';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useStore, actions } from '../../store';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

Axios.defaults.withCredentials = true;

function Logout() {
    let navigate = useNavigate();

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [err, setErr] = useState('');

    const [state, dispatch] = useStore();

    const { user } = state;

    const handleLogout = () => {
        Axios.get('/logout').then((res) => {
            dispatch(actions.setUser());
            navigate('/');
        });
    };

    const handleLogin = () => {
        if (username === '' && password === '') {
            return setErr('Password and name are not valid!');
        }

        Axios.post('/login', {
            username: username,
            password: password,
        }).then((res) => {
            if (res.data.message === "User doesn't exist") {
                dispatch(actions.setUser());
                setErr("User doesn't exist");
            } else {
                dispatch(actions.setUser(res.data[0].username));
                navigate('/');
            }
        });
    };

    useEffect(() => {
        Axios.get('/login').then((res) => {
            if (res.data.loggedIn === true) {
                dispatch(actions.setUser(res.data.user[0].username));
            }
        });
    }, [dispatch]);

    return (
        <div className={cx('wrapper-logout')}>
            <div className={cx('body-logout')}>
                <div className={cx('logout-header')}>
                    {user ? <h1>Logout</h1> : <h1>Login Here</h1>}
                    <span>{user}</span>

                    <span>{err}</span>
                </div>
                <div className={cx('content-logout')}>
                    <div className={cx('username-logout')}>
                        {user ? (
                            <input
                                disabled
                                type="text"
                                placeholder="Username"
                                value={user}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        ) : (
                            <input
                                type="text"
                                placeholder="Username"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        )}
                        <FontAwesomeIcon className={cx('icon-user-logout')} size="2x" icon={faUser} />
                    </div>
                    <div className={cx('password-logout')}>
                        {user ? (
                            <input
                                disabled
                                type="password"
                                placeholder="Password"
                                value="***********"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        ) : (
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        )}
                        <FontAwesomeIcon icon={faLock} className={cx('icon-password-logout')} size="2x" />
                    </div>
                </div>
                <div className={cx('logout-submit')}>
                    {user ? (
                        <Button title="Logout" large primary onClick={handleLogout} />
                    ) : (
                        <Button title="Login" large primary onClick={handleLogin} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Logout;
