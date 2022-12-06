import React from 'react';
import classNames from 'classnames/bind';
import styles from './modalDelete.module.scss';
import Button from '../../button';
import Axios from 'axios';

const cx = classNames.bind(styles);

function ModalDelete({ close, setShow, listUser, id }) {
    const handleButton = () => {
        Axios.delete(`http://localhost:3001/user/delete/${id}`)
            .then((res) => {
                close(false);
                setShow(id);
            })
            .catch((e) => {
                console.log(e);
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
                                <h3>Xóa Tài Khoản</h3>
                            </div>
                            <div className={cx('modal-title')}>
                                <label>Bạn Muốn Xóa Tài Khoản</label>
                            </div>
                            <div className={cx('modal-footer')}>
                                <Button title="Không" small primary onClick={() => close(false)} />
                                <Button title="Đồng Ý" small primary onClick={handleButton} />
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

export default ModalDelete;
