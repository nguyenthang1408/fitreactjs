import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalAdd.module.scss';
import Button from '../../../components/button';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function ModalAdd({ setShow, parent_Id, setChangeAdd }) {
    const [nameMachine, setNameMachine] = useState('');

    const [startDay, setStartDay] = useState('');

    const [endDate, setEndDate] = useState('');

    const [salary, setSalary] = useState('');

    const [idCard, setIdCard] = useState('');

    const [listUserInput, setListUserInput] = useState([])

    const [card, setCard] = useState([]);

    const [userName, setUserName] = useState('');

    const AddLine = () => {
        Axios.post('/line/add', {
            name: nameMachine,
            progress: 0,
            startDay: startDay,
            endDate: endDate,
            member: userName,
            salary: salary,
            idCard: idCard,
            type: 'line',
            parent_Id: parent_Id,
        }).then((res) => {
            setShow(false);
            setChangeAdd(res)
        });
    };

    const closeLine = () => {
        setShow(false);
    };

    useEffect(() => {
        Axios.get("/listUser").then((value) => {
            setListUserInput(value.data)
        });
    },[]);

    useEffect(() => {

        if(idCard)
        {
            setCard(listUserInput.filter((value) => {
                return (value.id_Card).toLocaleLowerCase().startsWith(idCard.toLocaleLowerCase());
             }));
        }else{
            setCard([]);    
        }
    
    },[listUserInput,idCard])



    const handleCard = (value) => {
        setCard([]);
        setIdCard(value.id_Card);
        setUserName(value.username);
    } 

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
                        <option value="AEC">AEC</option>
                        <option value="TSC">TSC</option>
                        <option value="APS">APS</option>
                    </select>
                    <div className={cx('input-id-card')}>
                        <input
                            type="text"
                            placeholder="ID Card"
                            value={idCard}
                            onChange={(e) => {
                                setIdCard(e.target.value);
                            }}
                            onBlur={() => {
                                setTimeout(() => {
                                    setCard([]);
                                },100)
                            }}
                        />
                       <div className={cx('wrapper-id-card')}>

                            <div className={cx('content-card')}>
                            {card.map((value, key) => {
                                return(
                                    <span key={key} onClick={() => {handleCard(value)}}>{value.id_Card}</span>       
                                )
                            })}
                            </div>
                            </div>
                    </div>
                </div>

                <div className={cx('footer')}>
                    <Button title="AddLine" primary onClick={AddLine} />{' '}
                    <Button title="Close" primary onClick={closeLine} />
                </div>
            </div>
        </>
    );
}
