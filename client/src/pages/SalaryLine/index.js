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
                                <th className={cx('table-th-1')} scope="col">
                                    {t('machine-name')}
                                </th>
                                <th className={cx('table-th-2')} scope="col">
                                    {t('progress')}
                                </th>
                                <th className={cx('table-th-3')} scope="col">
                                    {t('start-day')}
                                </th>
                                <th className={cx('table-th-4')} scope="col">
                                    {t('end-date')}
                                </th>
                                <th className={cx('table-th-5')} scope="col">
                                    {t('member')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listMachineLine.map((value) => {
                                return (
                                    <tr key={value.id}>
                                        <td className={cx('table-td-1')}>
                                            <Link
                                                className={cx('link-machine')}
                                                to={`/${salary}/line/phase/${window.btoa(value.id)}`}
                                            >
                                                {value.tenmay}
                                            </Link>
                                        </td>
                                        <td className={cx('table-td-2')}>{value.tiendo}</td>
                                        <td className={cx('table-td-3')}>{(value.ngaybatdau).slice(0, 10)}</td>
                                        <td className={cx('table-td-4')}>{(value.ngaydukien).slice(0, 10)}</td>
                                        <td className={cx('table-td-5')}>{value.nhomthuchien}</td>
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
