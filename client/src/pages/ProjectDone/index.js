import React, {useEffect, useState} from 'react';
import classNames from 'classnames/bind';
import styles from './ProjectDone.module.scss';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const cx  = classNames.bind(styles);

export default function ProjectDone() {

  const [listDone, setListDone] = useState([]);

  useEffect(() => {
      Axios.get("/getProjectDone")
      .then((result) => {                                                
        setListDone(result.data);
      })
  },[])

  return (
    <div className={cx('wrapper-sum')}>
    <div className={cx('sum-color')}>
       <div className={cx('sum-header')}>
          <span>Project Done</span>
       </div>
       <div className={cx('sum-body')}>
           <table className={cx('table')}>
              <thead>
                <tr>
                  <th>Name Machine</th>
                  <th>Progress</th>
                  <th>Name</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {listDone.map((value,key) => {
                  return (
                  <tr key={key}>
                    <td><Link to={`/${value.bophan}/${window.btoa(value.id)}`}>{value.tenmay}</Link></td>
                    <td>{(value.tiendo).toFixed(0)}%</td>
                    <td>{value.nhomthuchien}</td>
                    <td>{value.bophan}</td>
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
