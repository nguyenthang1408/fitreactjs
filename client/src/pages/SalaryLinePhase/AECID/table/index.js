import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AddModal from '../ModalAdd';
import ModalDelete from '../ModalDeleteMachine';
import ModalUpdateTD from '../ModalUpdateTD';

const cx = classNames.bind(styles);

export default function Table({ listPhase, idCover, setListEdit, setListDelete, setChangeFinish, setChangeInDay }) {
    const [showEdit, setShowEdit] = useState(false);

    const [editId, setEditId] = useState(0);

    const [showDelete, setShowDelete] = useState(false);

    const [deleteId, setDeleteId] = useState(0);

    const [showFinish, setShowFinish] = useState(false);

    const [finnishId, setFinishId] = useState(0);

    const [showInDay, setShowInDay] = useState(false);

    const [inDayId, setInDayId] = useState(0);

    const handleEdit = (id) => {
        setShowEdit(true);
        setEditId(id);
    };

    const handleDelete = (id) => {
        setShowDelete(true);
        setDeleteId(id);
    };

    const handleFinish = (id) => {
        setShowFinish(true);
        setFinishId(id);
    };

    const handleInDay = (id) => {
        setShowInDay(true);
        setInDayId(id);
    };

    return (
        <>
            <table className={cx('table ')}>
                <thead>
                    <tr>
                        <th>Công Đoạn</th>
                        <th>Tiến Độ</th>
                        <th>Ngày Bắt Đầu</th>
                        <th>Ngày Dự Kiến</th>
                        <th>Ngày Hoàn Thành</th>
                        <th>Tổng Giờ</th>
                        <th>Trong Ngày</th>
                        <th>Thực Tế</th>
                        <th>Hiệu Suất</th>
                        <th>Tăng Ca</th>
                        <th>Thành Viên</th>
                        <th>###</th>
                    </tr>
                </thead>
                <tbody>
                    {listPhase.map((value) => {
                        if (value.parent_id === idCover) {
                            return (
                                <tr key={value.id}>
                                    <td>{value.name}</td>
                                    <td>{value.tiendo ? value.tiendo : 0}%</td>
                                    <td>{(value.ngaybatdau).substring(0, 10)}</td>
                                    <td>{(value.ngaydukien).substring(0, 10)}</td>
                                    <td className={cx('finish')}>
                                        {
                                            value.ngayhoanthanh === "0000-00-00"
                                            
                                          ? 

                                            <span className={cx('finish-span-0')} onClick={() => {handleFinish(value.id);}}>
                                        
                                          0

                                            </span> 
                                          :
                                            <span className={cx('finish-span')} onClick={() => {handleFinish(value.id);}}>
                                                
                                                {(value.ngayhoanthanh).substring(0, 10)}

                                            </span>    
                                        }
                                      
                                    </td>
                                    <td>{value.tonggio}</td>
                                    <td className={cx('finish-day')}>
                                       <span onClick={() => {handleInDay(value.id);}}>
                                            {value.trongngay}
                                       </span>                         
                                    </td>
                                    <td>{value.thucte}</td>
                                    <td>{value.hieusuat ? value.hieusuat : 0}%</td>
                                    <td>{value.tangca}</td>
                                    <td>{value.thanhvien}</td>
                                    <td>
                                        <Tippy content="Edit">
                                            <span
                                                className={cx('icon')}
                                                onClick={() => {
                                                    handleEdit(value.id);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                            </span>
                                        </Tippy>
                                        <Tippy content="Delete">
                                            <span
                                                className={cx('icon-delete')}
                                                onClick={() => {
                                                    handleDelete(value.id);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>
                                        </Tippy>
                                    </td>
                                </tr>
                            );
                        } else {
                            return null;
                        }
                    })}
                </tbody>
            </table>
            {showEdit && (
                <AddModal
                    setShowEdit={setShowEdit}
                    type="edit"
                    editId={editId}
                    listPhase={listPhase}
                    setListEdit={setListEdit}
                />
            )}
            {showDelete && (
                <ModalDelete setShowDelete={setShowDelete} setListDelete={setListDelete} deleteId={deleteId} />
            )}
            {showFinish && (
                <ModalUpdateTD
                    setShowFinish={setShowFinish}
                    finnishId={finnishId}
                    setChangeFinish={setChangeFinish}
                    type=""
                />
            )}
            {showInDay && (
                <ModalUpdateTD
                    setShowInDay={setShowInDay}
                    type="inDay"
                    inDayId={inDayId}
                    setChangeInDay={setChangeInDay}
                />
            )}
        </>
    );
}
