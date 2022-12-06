import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './menuitems.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ title, to, icon, left, AddClass }) {
    return (
        <NavLink className={(isActive) => cx('menuitems', isActive, left, AddClass)} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItems;
