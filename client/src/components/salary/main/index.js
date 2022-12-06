import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Main({ salary }) {
    const { t } = useTranslation(['Home']);

    const [listSalary, setListSalary] = useState([]);

    useEffect(() => {
        salary
            ? Axios.get(`http://localhost:3001/show/${salary}`).then((res) => {
                  setListSalary(res.data);
              })
            : setListSalary('');
    }, [salary]);

    return (
        <div className={cx('main-aec')}>
            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th style={{ width: '10vw' }} scope="col">
                            {t('machine-name')}
                        </th>
                        <th style={{ width: '20vw' }} scope="col">
                            {t('progress')}
                        </th>
                        <th style={{ width: '20vw' }} scope="col">
                            {t('start-day')}
                        </th>
                        <th style={{ width: '20vw' }} scope="col">
                            {t('end-date')}
                        </th>
                        <th style={{ width: '20vw' }} scope="col">
                            {t('member')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listSalary.map((value) => {
                        if (value.type === 'machine') {
                            return (
                                <tr key={value.id}>
                                    <td style={{ width: '10vw' }}>
                                        <Link className={cx('link-machine')} to={`/${salary}/${window.btoa(value.id)}`}>
                                            {value.tenmay}
                                        </Link>
                                    </td>
                                    <td style={{ width: '20vw' }}>{value.tiendo}%</td>
                                    <td style={{ width: '20vw' }}>{value.ngaybatdau}</td>
                                    <td style={{ width: '20vw' }}>{value.ngaydukien}</td>
                                    <td style={{ width: '20vw' }}>{value.mathe}</td>
                                </tr>
                            );
                        } else {
                            return (
                                <tr key={value.id}>
                                    <td style={{ width: '10vw' }}>
                                        <Link
                                            className={cx('link-machine')}
                                            to={`/${salary}/line/${window.btoa(value.id)}`}
                                        >
                                            {value.tenmay}
                                        </Link>
                                    </td>
                                    <td style={{ width: '20vw' }}>{value.tiendo}%</td>
                                    <td style={{ width: '20vw' }}>{value.ngaybatdau}</td>
                                    <td style={{ width: '20vw' }}>{value.ngaydukien}</td>
                                    <td style={{ width: '20vw' }}>{value.mathe}</td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Main;
