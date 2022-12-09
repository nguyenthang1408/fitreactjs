import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import styles from './salary.module.scss';
import { Link, useParams } from 'react-router-dom';
import Header from '../SalaryLine/header';
import Axios from 'axios';

const cx = classNames.bind(styles);

export default function SalaryLine() {
    const { t } = useTranslation(['Home']);

    const [listMachineLine, setListMachineLine] = useState([]);

    const { salary } = useParams();

    useEffect(() => {
        Axios.get('/line').then((res) => {
            setListMachineLine(res.data);
        });
    }, []);

    return (
        <div className={cx('wrapper-Line')}>
            <div className={cx('wrapper-color')}>
                <div className={cx('salary-header')}>
                    <Header salary={salary} />
                </div>
                <div className={cx('wrapper')}>
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
                            {listMachineLine.map((value) => {
                                return (
                                    <tr key={value.id}>
                                        <td style={{ width: '10vw' }}>
                                            <Link
                                                className={cx('link-machine')}
                                                to={`/${salary}/line/phase/${window.btoa(value.id)}`}
                                            >
                                                {value.tenmay}
                                            </Link>
                                        </td>
                                        <td style={{ width: '20vw' }}>{value.tiendo}</td>
                                        <td style={{ width: '20vw' }}>{value.ngaybatdau}</td>
                                        <td style={{ width: '20vw' }}>{value.ngaydukien}</td>
                                        <td style={{ width: '20vw' }}>{value.nhomthuchien}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
