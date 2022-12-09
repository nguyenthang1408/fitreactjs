import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalAdd.module.scss';
import Button from '../../../components/button';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function AddModal({ setShow, setListAdd, idCover, title, editId, listPhase, setListEdit }) {
    const [name, setName] = useState('');
    const [startDay, setStartDay] = useState('');
    const [endDate, setEndDate] = useState('');
    const [member, setMember] = useState('');

    const handleAdd = () => {
        if (startDay < endDate) {
            Axios.post('/phase/add', {
                id: idCover,
                name: name,
                startDay: startDay,
                endDate: endDate,
                member: member,
            }).then((res) => {
                if (res) {
                    setListAdd(res.config.data);
                    setShow(false);
                }
            });
        } else {
            alert('startDay < endDate');
        }
    };

    const handleEdit = () => {
        Axios.put('/phase/edit', {
            id: editId,
            name: name,
            startDay: startDay,
            endDate: endDate,
            member: member,
        }).then((res) => {
            if (res) {
                setListEdit(res.config.data);
                setShow(false);
            }
        });
    };

    const close = () => {
        setShow(false);
    };

    return (
        <>
            <div className={cx('wrapper-out')}></div>
            {title === '' ? (
                <div className={cx('wrapper')}>
                    <div className={cx('Header-modal')}>
                        <span>Add - Phase</span>
                    </div>
                    <div className={cx('body-modal')}>
                        <label>Name Phase</label>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <label>Start Day</label>
                        <input
                            type="date"
                            placeholder=""
                            onChange={(e) => {
                                setStartDay(e.target.value);
                            }}
                        />
                        <label>End Date</label>
                        <input
                            type="date"
                            placeholder=""
                            onChange={(e) => {
                                setEndDate(e.target.value);
                            }}
                        />
                        <label>Member</label>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(e) => {
                                setMember(e.target.value);
                            }}
                        />
                    </div>
                    <div className={cx('footer-modal')}>
                        <Button title="Add" primary onClick={handleAdd} />
                        <Button title="Close" outline onClick={close} />
                    </div>
                </div>
            ) : (
                listPhase.map((value) => {
                    if (value.id === editId) {
                        return (
                            <div className={cx('wrapper')} key={value.id}>
                                <div className={cx('Header-modal')}>
                                    <span>Edit - Phase</span>
                                </div>
                                <div className={cx('body-modal')}>
                                    <label>Name Phase</label>
                                    <input
                                        type="text"
                                        placeholder={value.name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                    <label>Start Day</label>
                                    <input
                                        type="date"
                                        placeholder={value.ngaybatdau}
                                        onChange={(e) => {
                                            setStartDay(e.target.value);
                                        }}
                                    />
                                    <label>End Date</label>
                                    <input
                                        type="date"
                                        placeholder={value.ngaydukien}
                                        onChange={(e) => {
                                            setEndDate(e.target.value);
                                        }}
                                    />

                                    <label>Member</label>
                                    <input
                                        type="text"
                                        placeholder={value.thanhvien}
                                        onChange={(e) => {
                                            setMember(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className={cx('footer-modal')}>
                                    <Button title="Edit" primary onClick={handleEdit} />
                                    <Button title="Close" outline onClick={close} />
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })
            )}
        </>
    );
}
