import React from 'react'
import classNames from 'classnames/bind';
import styles from './ModalDelete.module.scss';
import Button from '../../../../components/button';

const cx = classNames.bind(styles);

export default function ModalDelete({setShowDeletePaid, handleDeletePaidDay}) {
  return (
    <>
       <div className={cx('wrapper-delete-paid-out')}></div>
       <div className={cx('wrapper-delete-paid')}>
          <div className={cx('header-delete-paid')}>
              <h2>Are You Delete ?</h2>
          </div>
          <div className={cx('wrapper-content-paid')}>
              <div className='content-paid-button'>
                  <Button title="Yes" primary onClick={() => {handleDeletePaidDay()}} />
              </div>
              <div className='content-paid-button'>
                  <Button title="No" primary onClick={() => {setShowDeletePaid(false)}} />
              </div>
          </div>
       </div>
    </>
  )
}
