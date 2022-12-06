import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalAdd.module.scss';
import Button from '../button';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function ModalAdd({ setShow }) {
    const [showMachine, setShowMachine] = useState(false);

    const [showMachineColor, setShowMachineColor] = useState('');

    const [showLine, setShowLine] = useState(false);

    const [showLineColor, setShowLineColor] = useState('');

    const [nameMachine, setNameMachine] = useState('');

    const [startDay, setStartDay] = useState('');

    const [endDate, setEndDate] = useState('');

    const [salary, setSalary] = useState('');

    const [idCard, setIdCard] = useState('');

    const handleShowMachine = () => {
        setShowMachine(true);
        setShowLine(false);
        setShowMachineColor('active');
        setShowLineColor('no-active');
    };

    const handleShowLine = () => {
        setShowLine(true);
        setShowMachine(false);
        setShowMachineColor('no-active');
        setShowLineColor('active');
    };

    const Add = () => {
        Axios.post('http://localhost:3001/machine/add', {
            name: nameMachine,
            progress: '0',
            startDay: startDay,
            endDate: endDate,
            member: 0,
            salary: salary,
            idCard: idCard,
            type: 'machine',
        }).then((res) => {
            if (res.data === 'existing sql') {
                setShow(false);
                alert('trung ma');
                return;
            }
            setShow(false);
        });
    };

    const AddLine = () => {
        Axios.post('http://localhost:3001/machine/add', {
            name: nameMachine,
            progress: '0',
            startDay: startDay,
            endDate: endDate,
            member: 0,
            salary: salary,
            idCard: idCard,
            type: 'line',
        }).then((res) => {
            if (res.data === 'existing sql') {
                setShow(false);
                alert('trung ma');
                return;
            }
            setShow(false);
        });
    };

    console.log(salary);

    const close = () => {
        setShow(false);
    };

    const closeLine = () => {
        setShow(false);
    };

    return (
        <>
            <div className={cx('wrapper-out')}></div>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    {!showMachine && !showLine && <span>Please Choose</span>}
                    {showMachine && <span>Add Machine</span>}
                    {showLine && <span>Add Line</span>}
                    <div className={cx('header-button')}>
                        <button onClick={handleShowMachine} className={cx(showMachineColor)}>
                            Progress Machine
                        </button>
                        <button onClick={handleShowLine} className={cx(showLineColor)}>
                            Progress Line
                        </button>
                    </div>
                </div>
                {showMachine && (
                    <div className={cx('body')}>
                        <input
                            type="text"
                            placeholder="Name Machine"
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
                            <option value="">Select Salary</option>
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
                )}

                {showLine && (
                    <div className={cx('body')}>
                        <input
                            type="text"
                            placeholder="Add Line"
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
                )}

                <div className={cx('footer')}>
                    {showMachine && (
                        <>
                            <Button title="Add" primary onClick={Add} />
                            <Button title="Close" primary onClick={close} />
                        </>
                    )}
                    {showLine && (
                        <>
                            <Button title="AddLine" primary onClick={AddLine} />{' '}
                            <Button title="Close" primary onClick={closeLine} />
                        </>
                    )}
                    {!showMachine && !showLine && <Button title="Close" primary onClick={closeLine} />}
                </div>
            </div>
        </>
    );
}
