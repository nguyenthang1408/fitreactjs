import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './headerAttendance.module.scss';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function HeaderAttendance() {

    const [quantityUser, setQuantityUser] = useState(0); 

    const [quantityUnPaid, setQuantityUnpaid] = useState(0);

    useEffect(() => {
       Axios.get("/getCountUser").then((value) => {
          setQuantityUser(value.data[0].count);
       })
    },[]);

    useEffect(() => {
       Axios.get("/getUnPaid").then((value) => {
        setQuantityUnpaid(value.data[0].upPaid);
       })
    },[])

    const working = quantityUser - quantityUnPaid;
 
    return (
        <div className={cx('Wrapper-header')}>
            <div className={cx('header-title')}>
                <h1 style={{ color: 'blue' }}>Điểm Danh</h1>
                <div className={cx('header-content')}>
                    <div className={cx('header-content-left')}>
                        <span>QUÂN SỐ</span>
                        <input type="number" value={quantityUser} readOnly />
                    </div>
                    <div className={cx('header-content-center')}>
                        <span>CÓ MẶT</span>
                        <input type="number" value={working} readOnly />  
                    </div>
                    <div className={cx('header-content-right')}>
                        <span>VẮNG MẶT</span>
                        <input type="number" value={quantityUnPaid} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

    