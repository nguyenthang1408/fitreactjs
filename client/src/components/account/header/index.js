import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderAccount.module.scss';

import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function HeaderAccount() {
    const { t } = useTranslation(['Home']);

    return (
        <div className={cx('header-account')}>
            <h3>{t('user-management')}</h3>
        </div>
    );
}

export default HeaderAccount;
