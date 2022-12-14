import React from 'react';
import classNames from 'classnames/bind';
import styles from './attendance.module.scss';
import HeaderAttendance from './attendanceHeader/headerAttendance';
import BodyAttendance from './attendanceBody/bodyAttendance';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const cx = classNames.bind(styles);

function Attendance() {

    return (
       <>
        <div className={cx('Wrapper-attendance')}>
            <HeaderAttendance />
            <BodyAttendance />
        </div>
        <ToastContainer
           position="top-right"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="colored"
        />
       </>
    );
}

export default Attendance;
