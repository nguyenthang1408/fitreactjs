import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Salary.module.scss';
import Header from '../header';
import Main from '../main';

const cx = classNames.bind(styles);

function SalaryAec({ salary }) {
    
    const [changeSalary, setChangeSalary] = useState();

    return (
        <div className={cx('salary-aec')}>
            <div className={cx('salary-header')}>
                <Header salary={salary} setChangeSalary={setChangeSalary} />
            </div>
            <div className={cx('salary-main')}>
                <Main salary={salary} changeSalary={changeSalary} />
            </div>
        </div>
    );
}

export default SalaryAec;
