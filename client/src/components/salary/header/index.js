import React, { useState } from 'react';
import { faPlus, faHome, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import ModalAdd from '../../modalAdd';

const cx = classNames.bind(styles);

function Header({ salary }) {
    const [show, setShow] = useState(false);

    const { t } = useTranslation(['Home']);

    return (
        <>
            <div className={cx('header-aec')}>
                <div
                    className={cx('add-aec')}
                    style={{ color: '#106aef' }}
                    onClick={() => {
                        setShow(true);
                    }}
                >
                    <FontAwesomeIcon icon={faPlus} className={cx('icon-add')} />
                </div>
                <div className={cx('header-aec-center')}>
                    <Link to="/" style={{ color: '#106aef' }}>
                        <FontAwesomeIcon icon={faHome} className={cx('icon-home')} />
                    </Link>
                    <span>
                        {t('progress')} {salary}
                    </span>
                </div>
                <div className={cx('add-aec')} style={{ color: '#106aef' }}>
                    <FontAwesomeIcon icon={faKey} className={cx('icon-password')} />
                </div>
            </div>

            {show && <ModalAdd setShow={setShow} />}
        </>
    );
}

export default Header;
