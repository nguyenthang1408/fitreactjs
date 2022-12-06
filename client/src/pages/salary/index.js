import React from 'react';
import classNames from 'classnames/bind';
import styles from './salary.module.scss';
import { Link } from 'react-router-dom';
import config from '../../config';

const cx = classNames.bind(styles);

function salary() {
    return (
        <div className={cx('salaryGlobal')}>
            <Link className={cx('link-salary')} to={config.aec}>
                <h1>AEC</h1>
            </Link>
            <Link className={cx('link-salary')} to={config.tsc}>
                <h1>TSC</h1>
            </Link>
            <Link className={cx('link-salary')} to={config.aps}>
                <h1>APS</h1>
            </Link>
        </div>
    );
}

export default salary;
