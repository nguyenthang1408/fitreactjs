import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ModalUpdate.module.scss';
import Button from '../../../components/button';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function AddModal({ editId, listPhase, setListEdit, setShowUpdate }) {
    const [name, setName] = useState('');
    const [startDay, setStartDay] = useState('');
    const [endDate, setEndDate] = useState('');
    const [card, setCard] = useState([]);
    const [userName, setUserName] = useState('');
    const [listUserInput,setListUserInput] = useState([]);
    const [idCard, setIdCard] = useState('');


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


    const handleEdit = () => {
        Axios.put('/phase/edit', {
            id: editId,
            name: name,
            startDay: startDay,
            endDate: endDate,
            member: userName,
        }).then((res) => {
            if (res) {
                setListEdit(res.config.data);
                setShowUpdate(false);
            }
        });
    };

    const close = () => {
        setShowUpdate(false);
    };

    const handleCard = (value) => {
        setCard([]);
        setIdCard(value.id_Card);
        setUserName(value.username);
    } 
    
    return (
        <>            
        <div className={cx('wrapper-out-update')}></div>    
                {listPhase.map((value) => {
                    
                     if (value.id === editId)
                     {
                         return (
                        <div className={cx('wrapper')} key={value.id} >
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
                            <div className={cx('footer-modal')}>
                                <Button title="Edit" primary onClick={handleEdit} />
                                <Button title="Close" outline onClick={close} />
                            </div>
                        </div>

                         )
                     }
                     else
                     {
                        return( <div key={value.id}></div>)
                       
                     }
                })}           
        </>
    );
}
