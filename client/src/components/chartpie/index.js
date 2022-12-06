import React from 'react';
import classNames from 'classnames/bind';
import styles from './chartPie.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const cx = classNames.bind(styles);

function ChartPie({ percent, size }) {
    return (
        <div className={cx('pie-animate', size)}>
            <CircularProgressbar
                className={cx('pie-animate-chart')}
                styles={buildStyles({
                    textColor: 'red',
                    pathColor: 'gold',
                    trailColor: 'turquoise',
                })}
                value={percent}
                text={`${percent}%`}
            />
        </div>
    );
}

export default ChartPie;
