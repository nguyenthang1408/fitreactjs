import React from 'react';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import config from '../../config';
import { useStore } from '../../store';
import { t } from 'i18next';


const cx = classNames.bind(styles);

function Logo() {
    const [state] = useStore();

    return (
        <>
        <div className={cx('header-logo')}>
            <div className={cx('header-title')}>
                <h1>
                    Vn cable <br /> {t('vn-cable')}
                </h1>
            </div>
            <div className={cx('header-user')}>
                {}
                {state.user ? (
                    <span>{state.user}</span>
                ) : (
                    <Link className={cx('login-user')} to={config.logout}>
                        Login
                    </Link>
                )}
            </div>
        </div>
        </>
    );
}

export default Logo;
