import React from 'react';
import classNames from 'classnames/bind';
import styles from './modalEdit.module.scss';
import Button from '../../button';
import { useState } from 'react';
import Axios from 'axios';

const cx = classNames.bind(styles);

function Modal({ close, setShow, listUser, id }) {
    const [user, setUser] = useState([]);
    const [password, setPassWord] = useState([]);

    Axios.defaults.withCredentials = true;

    const handleButton = () => {
        Axios.post('/user/update', {
            username: user,
            password: password,
            id: id,
        }).then((res) => {
            close(false);
            setShow(user);
        });
    };

    return (
        <>
            <div className={cx('container-modal-out')}></div>
            {listUser.map((value, key) => {
                if (value.id === id) {
                    return (
                        <div className={cx('container-modal')} key={key}>
                            <div className={cx('modal-header')}>
                                <h3>Sửa Tài Khoản</h3>
                            </div>
                            <div className={cx('modal-title')}>
                                <label>Tên Đăng Nhập</label>
                                <input
                                    type="text"
                                    placeholder={value.username}
                                    value={value.user}
                                    onChange={(e) => {
                                        setUser(e.target.value);
                                    }}
                                />
                                <label>Mật Khẩu</label>
                                <input
                                    type="password"
                                    placeholder={value.password}
                                    onChange={(e) => {
                                        setPassWord(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={cx('modal-footer')}>
                                <Button title="Đóng" small primary onClick={() => close(false)} />
                                <Button title="Xác Nhận" small primary type="primary" onClick={handleButton} />
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </>
    );
}

export default Modal;
