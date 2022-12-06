import React from 'react';
import classNames from 'classnames/bind';
import styles from './attendance.module.scss';

const cx = classNames.bind(styles);

function Attendance({ children }) {
    return <div className={cx('attendance')}>{children}</div>;
}

export default Attendance;
