import React from 'react';
import classNames from 'classnames/bind';
import styles from './headerAttendance.module.scss';

const cx = classNames.bind(styles);

export default function HeaderAttendance() {
    return (
        <div className={cx('Wrapper-header')}>
            <div className={cx('header-title')}>
                <h1 style={{ color: 'blue' }}>Điểm Danh</h1>
                <div className={cx('header-content')}>
                    <div className={cx('header-content-left')}>
                        <span>QUÂN SỐ</span>
                        <input type="number" value="177" readOnly />
                    </div>
                    <div className={cx('header-content-center')}>
                        <span>CÓ MẶT</span>
                        <input type="number" value="177" readOnly />  
                    </div>
                    <div className={cx('header-content-right')}>
                        <span>VẮNG MẶT</span>
                        <input type="number" value="177" readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

    