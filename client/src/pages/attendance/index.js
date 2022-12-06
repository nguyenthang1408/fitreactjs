import React from 'react';
import classNames from 'classnames/bind';
import styles from './attendance.module.scss';
import HeaderAttendance from './attendanceHeader/headerAttendance';
import BodyAttendance from './attendanceBody/bodyAttendance';

const cx = classNames.bind(styles);

function Attendance() {
    return (
        <div className={cx('Wrapper-attendance')}>
            <HeaderAttendance />
            <BodyAttendance />
        </div>
    );
}

export default Attendance;
