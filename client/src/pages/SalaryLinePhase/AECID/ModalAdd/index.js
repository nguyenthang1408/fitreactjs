import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalAdd.module.scss';
import Button from '../../../../components/button';
import Axios from 'axios';
import { useStore } from '../../../../store';

const cx = classNames.bind(styles);

export default function AddModal({ setShow, setListAdd, idCover, type, setShowEdit, editId, listPhase, setListEdit }) {
    const [name, setName] = useState('');
    const [startDay, setStartDay] = useState('');
    const [endDate, setEndDate] = useState('');

    const [idCard, setIdCard] = useState('');

    const [listUserInput,setListUserInput] = useState([]);

    const [card, setCard] = useState([]);

    const [userName, setUserName] = useState('');
    
    const [state] = useStore();

    const {idP} = state;

    const idPP = parseInt(idP);
    

    const handleAdd = () => {
        if (endDate > startDay) {
            Axios.post('/phase/line/add', {
                id: idCover,
                name: name,
                startDay: startDay,
                endDate: endDate,
                member: userName,
                idCard: idCard,
                idP: idPP,
            }).then((res) => {
                if (res) {
                    setListAdd(res.config.data);
                    setShow(false);
                }
            });
        } else {
            alert('startDay > endDate');
        }
    };

    const handleEdit = () => {
        Axios.put('/phase/line/update', {
            id: editId,
            name: name,
            startDay: startDay,
            endDate: endDate,
            member: userName,
            idCard: idCard,
        }).then((res) => {
            if (res) {
                setListEdit(res.config.data);
                setShowEdit(false);
            }
        });
    };

    const close = () => {
        setShow(false);
    };

    const closeEdit = () => {
        setShowEdit(false);
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
            {type === '' ? (
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
                        <div className={cx('input-id-card')}>
                            <input
                                type="text"
                                placeholder="ID Card"
                                value={idCard}
                                onChange={(e) => {setIdCard(e.target.value)}}
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
                    <div className={cx('footer-modal')}>
                        <Button title="Add" primary onClick={handleAdd} />
                        <Button title="Close" outline onClick={close} />
                    </div>
                </div>
            ) : (
                listPhase.map((value) => {
                    if (value.id === editId) {
                        return (
                            <div className={cx('wrapper')}>
                                <div className={cx('Header-modal')}>
                                    <span>Add - Phase</span>
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
                                    <div className={cx('input-id-card')}>
                                     <input
                                            type="text"
                                            placeholder={value.thanhvien}
                                            value={idCard}
                                            onChange={(e) => {setIdCard(e.target.value)}}
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
                                <div className={cx('footer-modal')}>
                                    <Button title="Edit" primary onClick={handleEdit} />
                                    <Button title="Close" outline onClick={closeEdit} />
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
