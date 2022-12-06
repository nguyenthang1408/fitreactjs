import React from 'react';
import styles from './table.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function table() {
    return (
        <div className={cx('table')}>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Peter</td>
                        <td>Griffin</td>
                    </tr>
                    <tr>
                        <td>Lois</td>
                        <td>Griffin</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
