import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalUpdateTD.module.scss';
import Button from '../../../components/button';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function ModalUpdateTD({
    finishId,
    setShowFinish,
    setChangeFinish,
    inDayId,
    setShowInDay,
    type,
    setChangeInDay,
    idCover,

}) {
    const [finish, setFinish] = useState('');

    const handleClose = () => {
        setShowFinish(false);
    };

    const handleCloseInDay = () => {
        setShowInDay(false);
    };

    const handleConfirm = () => {
        Axios.put('/phase/finish', { finish: finish, id: finishId, idCover: idCover }).then((value) => {
            setChangeFinish(value.config.data);
            setShowFinish(false);
        });
    };

    const handleConfirmInDay = () => {
        if (finish > 8 && finish <= 11) {
            Axios.put('/phase/inDay', { inDay: finish, id: inDayId }).then((value) => {
                setChangeInDay(value.config.data);
                setShowInDay(false);
            });
        } else {
            alert('value min 9 - max 12');
        }
    };

    return (
        <>
            <div className={cx('out-wrapper')}></div>;
            {type === 'inDay' ? (
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <span>Update</span>
                    </div>
                    <div className={cx('body')}>
                        <label>In Day</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                setFinish(e.target.value);
                            }}
                        />
                    </div>
                    <div className={cx('footer')}>
                        <Button title="Confirm" primary onClick={handleConfirmInDay} />
                        <Button title="Close" primary onClick={handleCloseInDay} />
                    </div>
                </div>
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <span>Update</span>
                    </div>
                    <div className={cx('body')}>
                        <label>Finish</label>
                        <input
                            type="date"
                            onChange={(e) => {
                                setFinish(e.target.value);
                            }}
                        />
                    </div>
                    <div className={cx('footer')}>
                        <Button title="Confirm" primary onClick={handleConfirm} />
                        <Button title="Close" primary onClick={handleClose} />
                    </div>
                </div>
            )}
        </>
    );
}
