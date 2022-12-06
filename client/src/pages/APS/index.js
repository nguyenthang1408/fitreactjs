import React from 'react';
import classNames from 'classnames/bind';
import styles from './APS.module.scss';
import SalaryAec from '../../components/salary/salaryaec';

const cx = classNames.bind(styles);

function APS() {
    return (
        <div className={cx('wrapper-aps')}>
            <SalaryAec salary="APS" />
        </div>
    );
}

export default APS;
