import React from 'react'
import styles from './modalInDay.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../components/button';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const cx = classNames.bind(styles);

export default function index(
    {
        cardInDay, 
        setShowModalDay,
        setUpdatePaid,
        showUpdatePaid,
        showUpdateDateClick,
        handleUpdate,
        handleDeletePaid,
        handleUpdatePaid,
    }    
    ) {

    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var date = day + '-' + month + '-' + year;

    

   


  return (
    <>
      <div className={cx('wrapper-out')}></div>
      <div className={cx('wrapper-modal')}>
        <div className={cx('container-day')}>
            <div className={cx('header-day')}>
                <p>Điểm Danh Ngày {date}</p>
            </div>
            <div className={cx('content-day')}>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Id-Card</th>
                            <th>Paid</th>
                            <th>###</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardInDay.map((value, key) => {

                           return (
                            <tr key={key}>
                                <td>{value.username}</td>
                                <td>{value.id_Card}</td>
                                <td className={cx('td-update-day')}>{showUpdatePaid && showUpdateDateClick.card === value.id_Card 

                                ? ( <select className={cx('input-update-day')}  onChange={(e) => {setUpdatePaid({paid: e.target.value, username: value.username,card: value.id_Card, salary: value.salary, id: value.id} )}} >
                                        <option value=''>----</option>
                                        <option value="unpaid">Unpaid</option>
                                        <option value="paid">Paid</option>
                                        <option value="sick">Sick</option>
                                    </select>
                                )

                                : <p>{value.working}</p>}</td>

                                <td>
                                    <div className={cx('td-item-day')}>
                                       <FontAwesomeIcon icon={faPenToSquare} color="#318eff" onClick={() => handleUpdatePaid({username: value.working, card: value.id_Card, working: value.working})}  />
                                       <FontAwesomeIcon icon={faTrash} color="#318eff" onClick={() => {handleDeletePaid({id: value.id})}} />
                                    </div>
                                </td>
                            </tr>
                           )
                        })}
                       
                    </tbody>
                </table>
            </div>
            <div className={cx('footer-day')}>
                <Button title="Close" primary onClick={() => setShowModalDay(false)} small />
                {showUpdatePaid && <Button title="Confirm" primary small onClick={() => {handleUpdate()}} />} 
            </div>
        </div>
      </div>
    </>
  )
}
