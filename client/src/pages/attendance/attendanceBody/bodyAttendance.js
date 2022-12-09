import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './bodyAttendance.module.scss';
import Table from './table/table';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function BodyAttendance() {

    const [list, setList] = useState([]);

   useEffect(() => {
    Axios.get("/listUser").then((value) => {
        setList(value.data);
    })
   },[])


    return (
        <div className={cx('Wrapper-body')}>
            <div className={cx('title-table')}>
                <div className={cx('table-attendance-name')}>
                    <h3>Danh Sách Điểm danh</h3>
                </div>
                <div className={cx('table-attendance-search')}>
                    <div className={cx('input-name')}>
                        <input id="name" className={cx('input-name-input')} type="text" placeholder=" " onChange={() => {}} />
                        <label htmlFor="name" className={cx('form-label-name')}>
                            Mã nhân viên    
                        </label>
                    </div>
                    <div className={cx('input-salary')}>
                        <input id="salary" className={cx('input-salary-input')} type="text" placeholder=" " onChange={() => {}} />
                        <label htmlFor="salary" className={cx('form-label-salary')}>
                                Bộ phận
                        </label>
                    </div>  
                    <div className={cx('input-date')}>
                        <input className={cx('input-date-input')} type="date" onChange={() => {}}  />
                    </div>
                </div>
            </div>
            <div className={cx('table')}>
                <Table list={list} />                                                                                                                                                                 
            </div>
        </div>
    );
}               
