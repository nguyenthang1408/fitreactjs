import React from 'react';
import classNames from 'classnames/bind';
import styles from './TSC.module.scss';
import SalaryAec from '../../components/salary/salaryaec';

const cx = classNames.bind(styles);

function TSC() {
    return (
        <div className={cx('wrapper-tsc')}>
            <SalaryAec salary="TSC" />
        </div>
    );
}

export default TSC;
