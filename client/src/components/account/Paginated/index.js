import React from 'react';
import classNames from 'classnames/bind';
import styles from './Paginated.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Paging({ totalPage, setPageNumber, pageNumber, setSearch }) {
    const { t } = useTranslation(['Home']);

    return (
        <>
            <div className={cx('paging')}>
                <button
                    onClick={() => {
                        if (pageNumber >= 2) {
                            setPageNumber(pageNumber - 1);
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </button>
                <button
                    onClick={() => {
                        setPageNumber(1);
                    }}
                >
                    1
                </button>
                <button
                    onClick={() => {
                        setPageNumber(totalPage);
                    }}
                >
                    {totalPage}
                </button>
                <button
                    onClick={() => {
                        if (pageNumber >= totalPage) {
                            setPageNumber(totalPage);
                            return;
                        }
                        setPageNumber(pageNumber + 1);
                    }}
                >
                    <FontAwesomeIcon icon={faAnglesRight} />
                </button>
                <input
                    type="text"
                    placeholder={t('search')}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </div>
            <div className={cx('title-paging')}>
                <span>Page of {pageNumber}</span>
            </div>
        </>
    );
}

export default Paging;
