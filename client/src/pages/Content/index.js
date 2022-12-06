import React from 'react';
import Content from '../../components/contents';
import Contentitems from '../../components/contents/contentItems/header';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Attendance from '../../components/contents/contentItems/attendance';
import Chart from '../../components/contents/contentItems/attendance/chart';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Contents() {
    const { t } = useTranslation(['Home']);
    return (
        <div className={cx('container')}>
            <div className={cx('container-progress')}>
                <Content>
                    <Contentitems title={t('project')} show="show" percent="33" hide={true} size="lg" salary="" AddClass="sizeL"  />
                    <Contentitems title="AEC" show="" percent="12" hide={false} size="xs" salary="AEC" AddClass="left" />
                    <Contentitems title="TSC" show="" percent="14" hide={false} size="xs" salary="TSC" AddClass="left" />
                    <Contentitems title="APS" show="" percent="44" hide={false} size="xs" salary="APS" AddClass="left" />
                </Content>
            </div>
            <div className={cx('container-attendance')}>
                <Attendance>
                    <Chart title={t('attendance-of-the-day')} AddClass="" />
                    <Chart title={t('attendance-of-the-week')} AddClass="left" />
                </Attendance>
            </div>
        </div>
    );
}

export default Contents;
