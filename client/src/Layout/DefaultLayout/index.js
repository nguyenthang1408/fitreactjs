import React from 'react';
import Header from '../components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
// import { useStore } from '../../store';
// import Logout from '../../pages/logout';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    // const [state] = useStore();

    return (
        <div className={cx('container')}>
            {/* {state.user ? ( */}
            <>
                <Header />
                <div className={cx('content')}>{children}</div>
            </>
            {/* ) : (
                <Logout />
            )} */}
        </div>
    );
}

export default DefaultLayout;
