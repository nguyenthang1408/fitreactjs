import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProjectSum.module.scss';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const cx  = classNames.bind(styles);

export default function ProjectSum() {

  const [listSum, setListSum] = useState([]);

  useEffect(() => {
      Axios.get("/getProjectSum")
      .then((result) => {
        setListSum(result.data);
      })
  },[])

  return (
    <div className={cx('wrapper-sum')}>
      <div className={cx('sum-color')}>
         <div className={cx('sum-header')}>
            <span>All Project</span>
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
                  {listSum.map((value,key) => {
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
