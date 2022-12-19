import React, {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import style from './Efficiency.module.scss';
import Axios from 'axios';


const cx = classNames.bind(style);

export default function ProjectEfficiency() {
  
  const [listEfficiency, setListEfficiency] = useState([]);

  useEffect(() => {
      Axios.get("/getEfficiency")
      .then((result) => {                                    
        setListEfficiency(result.data);
      })
  },[])

  return (
    <div className={cx('wrapper-sum')}>
      <div className={cx('sum-color')}>
         <div className={cx('sum-header')}>
            <span>Efficiency</span>
         </div>
         <div className={cx('sum-body')}>
             <table className={cx('table')}>
                <thead>
                  <tr>
                    <th>UserName</th>
                    <th>Id_Card</th>
                    <th>Salary</th>
                    <th>Efficiency</th>
                  </tr>
                </thead>
                <tbody>
                  {listEfficiency.map((value,key) => {
                    return (
                    <tr key={key}>
                      <td>{value.username}</td>
                      <td>{value.id_Card}</td>
                      <td>{value.salary}</td>
                      <td>{(value.efficiency).toFixed(0)}%</td>
                    </tr>
                    )
                  })}
                </tbody>
             </table>
         </div>
      </div>
    </div>
  )
}
