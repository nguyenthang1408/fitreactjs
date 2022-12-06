import React from 'react';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';
import Button from '../button';
import { useState } from 'react';
import Axios from 'axios';

const cx = classNames.bind(styles);

function Modal({ close, setShow }) {
    const [user, setUser] = useState([]);
    const [password, setPassWord] = useState([]);

    const handleButton = () => {
        Axios.post('http://localhost:3001/user/add', {
            username: user,
            password: password,
        }).then((res) => {
            if (res.data === 'existing sql') {
                close(false);
                alert('trung ma');
                return;
            }
            close(false);
            setShow(user);
        });
    };

    return (
        <>
            <div className={cx('container-modal-out')}></div>
            <div className={cx('container-modal')}>
                <div className={cx('modal-header')}>
                    <h3>Thêm Tài Khoản</h3>
                </div>
                <div className={cx('modal-title')}>
                    <label>Tên Đăng Nhập</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setUser(e.target.value);
                        }}
                    />
                    <label>Mật Khẩu</label>
                    <input
                        type="password"
                        onChange={(e) => {
                            setPassWord(e.target.value);
                        }}
                    />
                </div>
                <div className={cx('modal-footer')}>
                    <Button title="Đóng" small primary onClick={() => close(false)} />
                    <Button title="Xác Nhận" small primary onClick={handleButton} />
                </div>
            </div>
        </>
    );
}

export default Modal;
