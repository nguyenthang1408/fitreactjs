import React from 'react';
import classNames from 'classnames/bind';
import styles from './chart.module.scss';

const cx = classNames.bind(styles);

function Chart({ title, AddClass }) {
    return <div className={cx('item-chart', AddClass)}>{title}</div>;
}

export default Chart;
    