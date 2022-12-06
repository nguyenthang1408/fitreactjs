import React from 'react';
import classNames from 'classnames/bind';
import styles from './user.module.scss';
import HeaderAccount from '../../components/account/header';
import MainAccount from '../../components/account/main';
import { Link } from 'react-router-dom';
import routes from '../../config';

import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function User() {
    const { t } = useTranslation(['Home']);

    return (
        <div className={cx('wrapper-user')}>
            <div className={cx('user-context')}>
                <Link className={cx('user-link-home')} to={routes.home}>
                    {t('home')}
                </Link>
                <span>/</span> <span className={cx('span')}>{t('user-management')}</span>
            </div>
            <div className={cx('container-user')}>
                <HeaderAccount />
                <MainAccount />
            </div>
        </div>
    );
}

export default User;
