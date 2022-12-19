import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import AddModal from '../ModalAdd';
import ModalDelete from '../ModalDeleteMachine';
import ModalUpdateTD from '../ModalUpdateTD';
import ModalUpdate from '../ModalUpdate';

const cx = classNames.bind(styles);

export default function Table({ listPhase, idCover, setListEdit, setListDelete, setChangeFinish, setChangeInDay }) {
    const [show, setShow] = useState(false);

    const [editId, setEditId] = useState([]);

    const [showDelete, setShowDelete] = useState(false);

    const [deleteId, setDeleteId] = useState(0);

    const [showFinish, setShowFinish] = useState(false);

    const [finishId, setFinishId] = useState(0);

    const [showInDay, setShowInDay] = useState(false);

    const [inDayId, setInDayId] = useState(0);

    const [showUpdate, setShowUpdate] = useState(false);

    const handleEdit = (id) => {
        setShowUpdate(true);
        setEditId(id);
    };

    const handleShowDelete = (id) => {
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


                                value.tiendo !== 100 ?


                                <tr key={value.id}>
                                    <td>{value.name}</td>
                                    <td>{value.tiendo}</td>
                                    <td>{(value.ngaybatdau).slice(0,10)}</td>
                                    <td>{(value.ngaydukien).slice(0,10)}</td>
                                    <td className={cx('finish')}>
                                    { (value.ngayhoanthanh) === '0000-00-00' 
                                        ?
                                        <span className={cx('span-0')} onClick={() => {handleFinish(value.id)}}>
                                             0
                                        </span>
                                        : 
                                        <span className={cx('span-finnish')} onClick={() => {handleFinish(value.id)}}>
                                            {(value.ngayhoanthanh).slice(0,10)}
                                        </span>
                                        }
                                    </td>
                                    <td>{value.tonggio}</td>
                                    <td className={cx('finish-day')}>
                                       <span  onClick={() => {handleInDay(value.id);}}>
                                               {value.trongngay}
                                        </span>
                                    </td>
                                    <td>{value.thucte}</td>
                                    <td>{value.hieusuat}</td>
                                    <td>{value.tangca}</td>
                                    <td>{value.thanhvien}</td>
                                    <td>
                                        <div className={cx('a')}>

                                                <span
                                                    onClick={() => {
                                                        handleEdit(value.id);
                                                    }}
                                                >
                                                    <FontAwesomeIcon className={cx('icon-edit')} icon={faEdit} />
                                                </span>
                                                <span
                                                    onClick={() => {
                                                        handleShowDelete(value.id);
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} className={cx('icon-delete')} />
                                                </span>
                                        </div>
                                    </td>
                                </tr>

                                :  <tr key={value.id} style={{backgroundColor: "#f1eded"}}>

                                <td>{value.name}</td>
                                <td>{value.tiendo}</td>
                                <td>{(value.ngaybatdau).slice(0,10)}</td>
                                <td>{(value.ngaydukien).slice(0,10)}</td>
                                <td className={cx('finish')}>
                                { (value.ngayhoanthanh) === '0000-00-00' 
                                    ?
                                    <span className={cx('span-0')} >
                                         0
                                    </span>
                                    : 
                                    <span className={cx('span-finnish')} >
                                        {(value.ngayhoanthanh).slice(0,10)}
                                    </span>
                                    }
                                </td>
                                <td>{value.tonggio}</td>
                                <td className={cx('finish-day')}>
                                   <span>
                                           {value.trongngay}
                                    </span>
                                </td>
                                <td>{value.thucte}</td>
                                <td>{value.hieusuat}</td>
                                <td>{value.tangca}</td>
                                <td>{value.thanhvien}</td>
                                <td>
                                    <div className={cx('a')}>

                                            <span>
                                                <FontAwesomeIcon className={cx('icon-edit')} icon={faEdit} />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon icon={faTrash} className={cx('icon-delete')} />
                                            </span>
                                    </div>
                                </td>
                            </tr>
                            );
                        } else {
                            return null;
                        }
                    })}
                </tbody>
            </table>
            {show && (
                <AddModal
                    setShow={setShow}
                    setListAdd
                    editId={editId}
                    setListEdit={setListEdit}
                />
            )}

            {showUpdate && 
            <ModalUpdate 
                setShowUpdate={setShowUpdate}
                editId={editId}
                listPhase={listPhase}
                setListEdit={setListEdit} 
            />}

            {showDelete && (
                <ModalDelete setShowDelete={setShowDelete} deleteId={deleteId} setListDelete={setListDelete} />
            )}

            {showFinish && (
                <ModalUpdateTD
                    finishId={finishId}
                    setShowFinish={setShowFinish}
                    type=""
                    setChangeFinish={setChangeFinish}
                    idCover={idCover}
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
