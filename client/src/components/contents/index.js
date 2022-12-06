import React from 'react';
import classNames from 'classnames/bind';
import styles from './contents.module.scss';

const cx = classNames.bind(styles);

function Content({ children }) {
    return <div className={cx('titles')}>{children}</div>;
}

export default Content;
