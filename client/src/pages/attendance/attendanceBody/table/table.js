import React from 'react';
import styles from './table.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function table({list}) {
    
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
                    {list.map((value,key) => {
                        return(
                            <tr key={key}>
                                <td>{value.username}</td>
                                <td>{value.id_Card}</td>
                            </tr>
                           )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}
