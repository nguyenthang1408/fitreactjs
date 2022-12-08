import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import classNames from 'classnames/bind';
import styles from './language.module.scss';

const cx = classNames.bind(styles);

function Language() {
    const { i18n } = useTranslation('Home');

    useEffect(() => {
        if (localStorage.getItem('i18nextLng')?.length > 2) {
            i18next.changeLanguage('en');
        }
    }, []);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className={cx('wrapper-language')}>
            <h2 className={cx('title-language')}>Please select language</h2>
            <Form.Select
                size="lg"
                onChange={handleLanguageChange}
                value={localStorage.getItem('i18nextLng')}
                className={cx('select-language')}
            >
                <option value="en">English</option>
                <option value="cn">中国</option>
            </Form.Select>
        </div>
    );
}

export default Language;
