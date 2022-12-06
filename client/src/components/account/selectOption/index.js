import classNames from 'classnames/bind';
import React from 'react';
import styles from './SelectOption.module.scss';

const cx = classNames.bind(styles);

function SelectOption() {
    return (
        <div className={cx('select-option')}>
            <select>
                <option disabled>Chọn</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
            </select>
        </div>
    );
}

export default SelectOption;
