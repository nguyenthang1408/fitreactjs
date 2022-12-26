import React from 'react';
import Content from '../../components/contents';
import Contentitems from '../../components/contents/contentItems/header';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Attendance from '../../components/contents/contentItems/attendance';
import Chart from '../../components/contents/contentItems/attendance/chart';
import { useTranslation } from 'react-i18next';
// import { useFetch } from '../../CustomHook/fetchReducer';
import { useFetch1 } from '../../CustomHook/fetch';

const cx = classNames.bind(styles);

function Contents() {

    const {data: user, isLoading, error} = useFetch1("/getSumSalary");


    const { t } = useTranslation(['Home']);

    
    if (error) {
        return 'Something wrong!!!';
    };



    return (
        isLoading ? (<p>isLoading</p>) :
        (
            <div className={cx('container-content')}>
            <div className={cx('container-progress')}>
                <Content>
                    <Contentitems title={t('project')} show="show" percent="33" hide={true} size="lg" salary="" AddClass="sizeL"  />
                    {user.map((value, key) => {
                        return (
                            <Contentitems key={key} title={value.bophan} show="" percent={((value.sum)/(value.count)).toFixed(1)} hide={false} size="xs" salary={value.bophan} AddClass="left" />
                        )
                    })}
                </Content>
            </div>
            <div className={cx('container-attendance-content')}>
                <Attendance>
                    <Chart title={t('attendance-of-the-day')} AddClass="" />
                    <Chart title={t('attendance-of-the-week')} AddClass="left" />
                </Attendance>
            </div>
        </div>
        )
    );
}

export default Contents;
