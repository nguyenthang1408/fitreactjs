import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainAccount.module.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from '../../modal';
import ModalEdit from '../../modal/modalEdit';
import ModalDelete from '../../modal/modalDelete';
import Button from '../../button';
import Paging from '../Paginated';

import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function MainAccount() {
    const { t } = useTranslation(['Home']);

    const [showModal, setShowModal] = useState(false);

    const [showModalEdit, setShowModalEdit] = useState(false);

    const [editId, setEditId] = useState(0);

    const [showModalDelete, setShowModalDelete] = useState(false);

    const [deleteId, setDeleteId] = useState(0);

    const [listUser, setListUser] = useState([]);

    const [show, setShow] = useState('');

    const [totalPage, setTotalPage] = useState([]);

    const [pageNumber, setPageNumber] = useState(1);

    const [search, setSearch] = useState('');

    const handleAdd = () => {
        setShowModal(true);
    };

    const handleEdit = (id) => {
        setEditId(id);
        setShowModalEdit(true);
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowModalDelete(true);
    };

    useEffect(() => {
        Axios.get(`/user?search=${search}&page=${pageNumber}`).then((res) => {
            setListUser(res.data.result);
            setTotalPage(res.data.totalPage);
        });
    }, [show, pageNumber, search]);

    return (
        <div className={cx('main-account')}>
            <div className={cx('main-account-select')}>
                <Paging
                    totalPage={totalPage}
                    setPageNumber={setPageNumber}
                    pageNumber={pageNumber}
                    setSearch={setSearch}
                />
            </div>
            <div className={cx('main-account-table')}>
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th className={cx('table-th-1')} style={{ }}>
                                #
                            </th>
                            <th className={cx('table-th-2')} style={{ }}>
                                {t('account')}
                            </th>
                            <th className={cx('table-th-3')} style={{ }}>
                                {t('password')}
                            </th>
                            <th className={cx('table-th-4')} style={{ }}>
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td className={cx('table-td-1')} style={{ }}>
                                        <FontAwesomeIcon icon={faUser} /> {value.id}
                                    </td>
                                    <td className={cx('table-td-2')} style={{ }}>{value.username}</td>
                                    <td className={cx('table-td-3')} style={{ }}>***</td>
                                    <td className={cx('table-td-4')} style={{ }}>
                                        <div className={cx('table-td-option')}>
                                            <Button title={t('add')} small primary onClick={handleAdd} />

                                            <Button
                                                title={t('edit')}
                                                small
                                                primary
                                                onClick={() => {
                                                    handleEdit(value.id);
                                                }}
                                            />

                                            <Button
                                                title={t('delete')}
                                                small
                                                primary
                                                onClick={() => {
                                                    handleDelete(value.id);
                                                }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {showModal && <Modal close={setShowModal} setShow={setShow} />}
            {showModalEdit && <ModalEdit close={setShowModalEdit} setShow={setShow} listUser={listUser} id={editId} />}
            {showModalDelete && (
                <ModalDelete close={setShowModalDelete} setShow={setShow} listUser={listUser} id={deleteId} />
            )}
        </div>
    );
}

export default MainAccount;
