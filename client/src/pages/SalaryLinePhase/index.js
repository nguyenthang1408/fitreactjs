import React from 'react';
import AEC from './AECID';
import classNames from 'classnames/bind';
import styles from './SalaryLinePhase.module.scss';

const cx = classNames.bind(styles);

export default function SalaryLinePhase() {
    return (
        <div className={cx('wrapper-line-phase')}>
            <AEC />
        </div>
    );
}
