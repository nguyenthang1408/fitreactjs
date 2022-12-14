import React from 'react';
import styles from './table.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../../components/button'



const cx = classNames.bind(styles);

export default function table({ list , handleConfirm, handleOptionChange, cardInDay, changeRender }) {


    return (
        <div className={cx('table')}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Card-Id</th>
                        <th>###</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value,key) => {
                        return(
                            <tr key={key}>
                                <td>{value.username}</td>
                                <td>{value.id_Card}</td>
                                <td>
                                      <div>
                                        <select  onChange={(e) => {handleOptionChange({paid: e.target.value, username: value.username,card: value.id_Card, salary: value.salary} )}} >
                                            <option value=''>----</option>
                                            <option value="unpaid">Unpaid</option>
                                            <option value="paid">Paid</option>
                                            <option value="sick">Sick</option>
                                        </select>
                                          {
                                         
                                            cardInDay.find((card) => {
                                                return(card.id_Card === value.id_Card)
                                            })
                                            
                                               ?    
                                                                     
                                                <Button title='Confirm' outline disabled onClick={() => {handleConfirm({username: value.username,card: value.id_Card, salary: value.salary})}}  /> 
     
                                               :
                                                <Button title='Confirm' primary onClick={() => {handleConfirm({username: value.username,card: value.id_Card, salary: value.salary})}}  />
                                           
                                                                      
                                          }                         
                                      </div>
                                </td>
                            </tr>
                           )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}
