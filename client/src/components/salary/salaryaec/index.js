import React from 'react';
import classNames from 'classnames/bind';
import styles from './Salary.module.scss';
import Header from '../header';
import Main from '../main';

const cx = classNames.bind(styles);

function SalaryAec({ salary }) {
    return (
        <div className={cx('salary-aec')}>
            <div className={cx('salary-header')}>
                <Header salary={salary} />
            </div>
            <div className={cx('salary-main')}>
                <Main salary={salary} />
            </div>
        </div>
    );
}

export default SalaryAec;
