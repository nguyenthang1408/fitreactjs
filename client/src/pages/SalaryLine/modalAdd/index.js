import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalAdd.module.scss';
import Button from '../../../components/button';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function ModalAdd({ setShow }) {
    const [nameMachine, setNameMachine] = useState('');

    const [startDay, setStartDay] = useState('');

    const [endDate, setEndDate] = useState('');

    const [salary, setSalary] = useState('');

    const [idCard, setIdCard] = useState('');

    const AddLine = () => {
        Axios.post('http://localhost:4000/line/add', {
            name: nameMachine,
            progress: 0,
            startDay: startDay,
            endDate: endDate,
            member: 0,
            salary: salary,
            idCard: idCard,
            type: 'line',
        }).then((res) => {
            setShow(false);
        });
    };

    const closeLine = () => {
        setShow(false);
    };

    return (
        <>
            <div className={cx('wrapper-out')}></div>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <span>Add Line</span>
                </div>

                <div className={cx('body')}>
                    <input
                        type="text"
                        placeholder="Machine Line"
                        onChange={(e) => {
                            setNameMachine(e.target.value);
                        }}
                    />
                    <input
                        type="date"
                        placeholder="Start Day"
                        onChange={(e) => {
                            setStartDay(e.target.value);
                        }}
                    />
                    <input
                        type="date"
                        placeholder="End Date"
                        onChange={(e) => {
                            setEndDate(e.target.value);
                        }}
                    />
                    <select
                        className={cx('cars')}
                        onChange={(e) => {
                            setSalary(e.target.value);
                        }}
                    >
                        <option disabled>Select</option>
                        <option value="AEC">AEC</option>
                        <option value="TSC">TSC</option>
                        <option value="APS">APS</option>
                    </select>
                    <input
                        type="text"
                        placeholder="ID Card"
                        onChange={(e) => {
                            setIdCard(e.target.value);
                        }}
                    />
                </div>

                <div className={cx('footer')}>
                    <Button title="AddLine" primary onClick={AddLine} />{' '}
                    <Button title="Close" primary onClick={closeLine} />
                </div>
            </div>
        </>
    );
}
