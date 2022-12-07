import React,{useState} from 'react';
import Logo from '../../../components/logo';
import Menu from '../../../components/menu';
import MenuItems from '../../../components/menu/menuitems';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faClipboardUser,
    faEarthAsia,
    faHome,
    faListCheck,
    faUser,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink,Link } from 'react-router-dom';



const cx = classNames.bind(styles);

function Header() {
    const { t } = useTranslation(['Home']);

    const [show, setShow] = useState(false)

    return (
        <>
            <div className={cx('header-logo-mobile')}>
                    <span>Foxconn</span>
                    
                    <span className={cx('icon-mobile')} onClick={() =>  setShow(!show)}>
                        <label for="checked">
                            <FontAwesomeIcon icon={faBars} size="2x" />
                        </label>    
                    </span>
            </div>
        <input type="checkbox" id="checked" className={cx('checked')} checked={show} />
          <div className={cx('container-mobile', show)}>
                <div className={cx('wrapper-page')}>
                    
                    <div className={cx('content-mobile')}>
                        <ul onClick={() => setShow(false)}>
                            <li>
                                <Link to={config.home}>
                                    <FontAwesomeIcon icon={faHome} size="lg" />
                                    <span>Home {show}</span>
                               </Link>  
                            </li>
                            <li>
                                    <Link to={config.user}>
                                        <FontAwesomeIcon icon={faUser} size="lg" />
                                        <span>Account</span>
                                    </Link>
                            </li>
                            <li>
                                <Link to={config.attendance}>
                                    <FontAwesomeIcon icon={faClipboardUser} size="lg" />
                                    <span>Attendance</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={config.aec}>
                                    <FontAwesomeIcon icon={faListCheck} size="lg" />
                                    <span>AEC</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={config.tsc}>
                                    <FontAwesomeIcon icon={faListCheck} size="lg" />
                                    <span>TSC</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={config.aps}>
                                    <FontAwesomeIcon icon={faListCheck} size="lg" />
                                    <span>APS</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={config.language}>
                                    <FontAwesomeIcon icon={faEarthAsia} size="lg" />
                                    <span>Language</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={config.logout}>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" />
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
          </div>
         <div className={cx('wrapper')}>
            <div className={cx('wrapper-header-logo')}>
                <Logo />
            </div>
            <div className={cx('header-content')}>
                <Menu>
                    <MenuItems title={t('home')} to={config.home} icon={<FontAwesomeIcon icon={faHome} size="lg" />} />
                    <MenuItems
                        title={t('account')}
                        to={config.user}
                        icon={<FontAwesomeIcon icon={faUser} size="lg" />}
                        left="left"
                        AddClass="false"
                    />
                    <MenuItems
                        title={t('attendance')} 
                        to={config.attendance}
                        icon={<FontAwesomeIcon icon={faClipboardUser} size="lg" />}
                        left="left"
                        AddClass="false"
                    />
                    <Tippy
                        interactive
                        placement="right"
                        offset={[0, 20]}
                        render={(attrs) => (
                            <div className={cx('box')} tabIndex="-1" {...attrs}>
                                <NavLink
                                    className={(isActive) => cx('aec', isActive)}
                                    to={config.aec}
                                    icon={<FontAwesomeIcon icon={faUser} size="lg" />}
                                >
                                    AEC
                                </NavLink>
                                <NavLink
                                    to={config.tsc}
                                    className={(isActive) => cx('aec', isActive)}
                                    icon={<FontAwesomeIcon icon={faUser} size="lg" />}
                                >
                                    TSC
                                </NavLink>
                                <NavLink
                                    to={config.aps}
                                    className={(isActive) => cx('aec', isActive)}
                                    icon={<FontAwesomeIcon icon={faUser} size="lg" />}
                                >
                                    APS
                                </NavLink>
                            </div>
                        )}
                    >
                        <div className={cx('click')}>
                            <MenuItems
                                className={cx('check')}
                                title={t('progress')}
                                to={config.salary}
                                icon={<FontAwesomeIcon icon={faListCheck} size="lg" />}
                                AddClass="true"
                            />
                        </div>
                    </Tippy>
                    <MenuItems
                        title={t('language')}
                        to={config.language}
                        icon={<FontAwesomeIcon icon={faEarthAsia} size="lg" />}
                        left="left"
                        AddClass="false"
                    />
                    <MenuItems
                        title={t('logout')}
                        to={config.logout}
                        icon={<FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" />}
                        left="left"
                        AddClass="false"
                    />
                </Menu>
            </div>
        </div>
        </>
       
    );
}

export default Header;
