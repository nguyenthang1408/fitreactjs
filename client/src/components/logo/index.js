import React from 'react';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import config from '../../config';
import { useStore } from '../../store';
import { t } from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Logo() {
    const [state] = useStore();

    return (
        <>
        <span className={cx('icon-mobile')}><FontAwesomeIcon icon={faBars} size="2x" /></span>
        <div className={cx('header-logo')}>
            <div className={cx('header-title')}>
                <h1>
                    Vn cable thang <br /> {t('vn-cable')}
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
