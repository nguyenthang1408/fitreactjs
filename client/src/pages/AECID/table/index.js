import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AddModal from '../ModalAdd';
import ModalDelete from '../ModalDeleteMachine';
import Button from '../../../components/button';
import ModalUpdateTD from '../ModalUpdateTD';

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

    const handleEdit = (id) => {
        setShow(true);
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
                                <tr key={value.id}>
                                    <td>{value.name}</td>
                                    <td>{value.tiendo}</td>
                                    <td>{value.ngaybatdau}</td>
                                    <td>{value.ngaydukien}</td>
                                    <td className={cx('finish')}>
                                        <Button
                                            title={value.ngayhoanthanh}
                                            primary
                                            onClick={() => {
                                                handleFinish(value.id);
                                            }}
                                        />
                                    </td>
                                    <td>{value.tonggio}</td>
                                    <td className={cx('finish')}>
                                        <Button
                                            title={value.trongngay}
                                            primary
                                            onClick={() => {
                                                handleInDay(value.id);
                                            }}
                                        />
                                    </td>
                                    <td>{value.thucte}</td>
                                    <td>{value.hieusuat}</td>
                                    <td>{value.tangca}</td>
                                    <td>{value.thanhvien}</td>
                                    <td>
                                        <Tippy content="Edit" placement="bottom">
                                            <span
                                                onClick={() => {
                                                    handleEdit(value.id);
                                                }}
                                            >
                                                <FontAwesomeIcon className={cx('icon-edit')} icon={faEdit} />
                                            </span>
                                        </Tippy>
                                        <Tippy placement="bottom" content="Delete">
                                            <span
                                                onClick={() => {
                                                    handleShowDelete(value.id);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faTrash} className={cx('icon-delete')} />
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
            {show && (
                <AddModal
                    title="edit"
                    setShow={setShow}
                    setListAdd
                    editId={editId}
                    listPhase={listPhase}
                    setListEdit={setListEdit}
                />
            )}

            {showDelete && (
                <ModalDelete setShowDelete={setShowDelete} deleteId={deleteId} setListDelete={setListDelete} />
            )}

            {showFinish && (
                <ModalUpdateTD
                    finishId={finishId}
                    setShowFinish={setShowFinish}
                    type=""
                    setChangeFinish={setChangeFinish}
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
