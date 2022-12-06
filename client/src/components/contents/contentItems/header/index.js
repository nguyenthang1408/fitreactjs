import React from 'react';
import classNames from 'classnames/bind';
import styles from './contentItems.module.scss';
import ChartPie from '../../../chartpie';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ContentItems({ title, show, percent, hide, size, salary, AddClass }) {
    const { t } = useTranslation(['home']);

    const [listProgress, setListProgress] = useState([]);
    useEffect(() => {
        salary
            ? Axios.get(`http://localhost:3001/show/${salary}`).then((res) => {
                  setListProgress(res.data);
              })
            : setListProgress('');
    }, [salary]);

    return (
        <div className={cx('title-title', AddClass)}>
            <div className={cx('title-header', { show })}>
                <h1>
                    <Link to={salary} className={cx('link-salary')}>
                        <span>{title}</span>
                    </Link>
                    {!hide && <ChartPie percent={percent} size={size} />}
                </h1>
            </div>
            {hide ? (
                <div className={cx('title-main-show')}>
                    <div className="title-main-show-chart">
                        <ChartPie percent={percent} size={size} />
                    </div>
                    <div className="title-main-show-h2">
                        <h2>{t('sum')}:43</h2>
                        <h2>{t('project-loading')}:32</h2>
                        <h2>{t('project-done')}:11</h2>
                        <h2>{t('efficiency')}</h2>
                    </div>
                </div>
            ) : (
                <div className={cx('title-main-hide')}>
                    <div className={cx('title-main-hide-chart')}>
                        <span>{t('machine-name')}</span>
                    </div>
                    <div className={cx('title-main-hide-h2')}>
                        <table className={cx('table')}>
                            <tbody>
                                {listProgress.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.tenmay}</td>
                                            <td>{val.tiendo}%</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContentItems;
