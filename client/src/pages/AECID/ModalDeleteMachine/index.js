import React from 'react';
import classNames from 'classnames/bind';
import styles from './ModalDelete.module.scss';
import Button from '../../../components/button';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function ModalDelete({ setShowDelete, setListDelete, deleteId }) {
    const handleClose = () => {
        setShowDelete(false);
    };

    const handleDelete = () => {
        Axios.delete(`http://localhost:4000/phase/delete/${deleteId}`).then((value) => {
            setListDelete(value.config.data);
            setShowDelete(false);
        });
    };

    return (
        <>
            <div className={cx('out-wrapper-delete')}></div>
            <div className={cx('wrapper-delete')}>
                <div className={cx('header-delete')}>
                    <span>Delete Machine</span>
                </div>
                <div className={cx('body-delete')}>
                    <span>Do you want to delete ?</span>
                </div>
                <div className={cx('footer-delete')}>
                    <Button title="Delete" primary onClick={handleDelete} />
                    <Button title="Close" outline onClick={handleClose} />
                </div>
            </div>
        </>
    );
}
