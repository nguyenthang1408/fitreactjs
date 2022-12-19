import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import { useTranslation } from 'react-i18next';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Main({ salary, changeSalary }) {
    const { t } = useTranslation(['Home']);

    const [listSalary, setListSalary] = useState([]);


    useEffect(() => {
        salary
            ? Axios.get(`/show/${salary}`).then((res) => {
                  setListSalary(res.data);
              })
            : setListSalary('');
    }, [salary, changeSalary]);

    return (
        <div className={cx('main-aec')}>
            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th className={cx('salary-table-th-1')}>
                            {t('machine-name')}
                        </th>
                        <th className={cx('salary-table-th-2')}>
                            {t('progress')}
                        </th>
                        <th className={cx('salary-table-th-3')}>
                            {t('start-day')}
                        </th>
                        <th className={cx('salary-table-th-4')}>
                            {t('end-date')}
                        </th>
                        <th className={cx('salary-table-th-5')}>
                            {t('member')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listSalary.map((value) => {
                        if (value.type === 'machine') {
                            return (
                                <tr key={value.id}>
                                    <td className={cx('salary-table-td-1')} >
                                        <Link className={cx('link-machine')} to={`/${salary}/${window.btoa(value.id)}`}>
                                            {value.tenmay}
                                        </Link>
                                    </td>
                                    <td className={cx('salary-table-td-2')} >{value.tiendo}%</td>
                                    <td className={cx('salary-table-td-3')} >{(value.ngaybatdau).slice(0,10)}</td>
                                    <td className={cx('salary-table-td-4')} >{(value.ngaydukien).slice(0,10)}</td>
                                    <td className={cx('salary-table-td-5')} >{value.mathe}</td>
                                </tr>
                            );
                        } else {
                            return (
                                <tr key={value.id}>
                                    <td className={cx('salary-table-td-1')} >
                                        <Link
                                            className={cx('link-machine')}
                                            to={`/${salary}/line/${window.btoa(value.id)}`}
                                        >
                                            {value.tenmay}
                                        </Link>
                                    </td>
                                    <td className={cx('salary-table-td-2')} >{value.tiendo}%</td>
                                    <td className={cx('salary-table-td-3')} >{(value.ngaybatdau).slice(0,10)}</td>
                                    <td className={cx('salary-table-td-4')} >{(value.ngaydukien).slice(0,10)}</td>
                                    <td className={cx('salary-table-td-5')} >{value.mathe}</td>
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
