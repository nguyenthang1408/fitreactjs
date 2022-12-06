import React from 'react';
import classNames from 'classnames/bind';
import styles from './AEC.module.scss';
import SalaryAec from '../../components/salary/salaryaec';

const cx = classNames.bind(styles);

function AEC() {
    return (
        <div className={cx('wrapper-aec')}>
            <SalaryAec salary="AEC" />
        </div>
    );
}

export default AEC;
