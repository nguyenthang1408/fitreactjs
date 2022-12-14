import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './bodyAttendance.module.scss';
import Table from './table/table';
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalDay from '../Modal';

const cx = classNames.bind(styles);

export default function BodyAttendance() {

    const [list, setList] = useState([]);

    const [dayChange,setDayChange] = useState({});

    const [cardInDay, setCardInDay] = useState([]);

    const [search, setSearch] = useState(0);

    const [showModalDay, setShowModalDay] = useState(false);

    const [updatePaid, setUpdatePaid] = useState('');

    const [showUpdatePaid, setShowUpdatePaid] = useState(false);

    const [showUpdateDateClick, setShowUpdateDateClick] = useState('');



    const handleOptionChange = (valueOption) => {
        setDayChange(valueOption);
    }

    useEffect(() => {
       Axios.get("/getInDay").then((value) => {
        setCardInDay(value.data);
       })
    },[cardInDay])

    const handleConfirm = (valueConfirm) => {
        if(valueConfirm.card === dayChange.card && valueConfirm.username === dayChange.username)
        {
            Axios.post("/postDayChange",
            {
                username: dayChange.username,
                card: dayChange.card,
                paid: dayChange.paid,
                salary: dayChange.salary,
            })
            .then((value) => {
                if(value.data === 'Success')
                {
                    toast.success('🦄 Success!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });

                }
            })
            
        }
        else
        {
            toast.warn('🦄 Please select!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }


   useEffect(() => {
    Axios.get("/listUser").then((value) => {
        setList(value.data);
    }) 

   },[])

   
   const handleInDay = (value) => {
       setShowModalDay(true);
    }


    
    const handleUpdate = () => {
     Axios.put("/updatePaid",{
        paid: updatePaid.paid,
        id: updatePaid.id,
     })
     .then((value) => {
        if(value.data === 'Success')
        {
            setShowModalDay(false);
            toast.success('🦄 Success!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

        }
        else
        {
            toast.warn('🦄 Please select!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
     })
    }

 
    return (
       <>
        <div className={cx('Wrapper-body')}>
            <div className={cx('title-table')}>
                <div className={cx('table-attendance-name')}>
                    <h3 onClick={() => {handleInDay()}}>Lịch Sử Điểm danh</h3>
                </div>
                <div className={cx('table-attendance-search')}>
                    <div className={cx('input-name')}>
                        <input id="name" className={cx('input-name-input')} type="text" placeholder=" " onChange={() => {}} />
                        <label htmlFor="name" className={cx('form-label-name')}>
                            Mã nhân viên    
                        </label>
                    </div>
                    <div className={cx('input-salary')}>
                        <input id="salary" className={cx('input-salary-input')} type="text" placeholder=" " onChange={() => {}} />
                        <label htmlFor="salary" className={cx('form-label-salary')}>
                                Bộ phận
                        </label>
                    </div>  
                    <div className={cx('input-date')}>
                        <input className={cx('input-date-input')} type="date" onChange={() => {}}  />
                    </div>
                </div>
            </div>
            <div className={cx('table')}>
                <Table list={list} handleConfirm={handleConfirm} handleOptionChange={handleOptionChange} cardInDay={cardInDay} setSearch={setSearch} search={search} />                                                                                                                                                                 
            </div>
        </div>
        {showModalDay 
        && <ModalDay 
        cardInDay={cardInDay} 
        setShowModalDay={setShowModalDay} 
        setUpdatePaid={setUpdatePaid}
        showUpdatePaid={showUpdatePaid}
        setShowUpdatePaid={setShowUpdatePaid}
        setShowUpdateDateClick={setShowUpdateDateClick}
        showUpdateDateClick={showUpdateDateClick}
        handleUpdate={handleUpdate}
        />
        }
        </>
    );
}               
