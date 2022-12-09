import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AECID.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faHome } from '@fortawesome/free-solid-svg-icons';
import Table from './table';
import AddModal from './ModalAdd';

const cx = classNames.bind(styles);

export default function AECID() {
    const { id } = useParams();

    const [show, setShow] = useState(false);

    const [listPhase, SetListPhase] = useState([]);

    const [listAdd, setListAdd] = useState([]);

    const idCover = window.atob(id);

    const [listEdit, setListEdit] = useState([]);

    const [listDelete, setListDelete] = useState([]);

    const [changeFinish, setChangeFinish] = useState([]);

    const [changeInDay, setChangeInDay] = useState([]);

    useEffect(() => {
        Axios.get('/phase').then((res) => {
            SetListPhase(res.data);
        });
    }, [listAdd, listEdit, listDelete, changeFinish, changeInDay]);

    const handleAddMachine = () => {
        setShow(true);
    };

    return (
        <>
            <div className={cx('Wrapper-machine')}>
                <div className={cx('wrapper-color')}>
                    <div className={cx('header-machine')}>
                        <FontAwesomeIcon className={cx('icon-add')} icon={faAdd} size="6x" onClick={handleAddMachine} />
                        <div className={cx('header-center')}>
                            <Link to="/">
                                <FontAwesomeIcon className={cx('icon-home')} icon={faHome} size="5x" />
                            </Link>
                            <span>tiendomaymoc</span>
                        </div>
                    </div>
                    <div className={cx('table-machine')}>
                        <Table
                            listPhase={listPhase}
                            idCover={idCover}
                            setListEdit={setListEdit}
                            setListDelete={setListDelete}
                            setChangeFinish={setChangeFinish}
                            setChangeInDay={setChangeInDay}
                        />
                    </div>
                </div>
            </div>

            {show && <AddModal setShow={setShow} setListAdd={setListAdd} idCover={idCover} title="" />}
        </>
    );
}
