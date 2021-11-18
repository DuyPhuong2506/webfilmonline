import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { memo } from 'react';
import { ACCESS_TOKEN } from '../../Settings/configUrl';

function InfoComponent(props) {
    const history = useHistory();
    let path = window.location.pathname;
    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.removeItem(ACCESS_TOKEN)
        setTimeout(() => {
            history.push('/admin');
        }, 1000);
    }
    return (
        <>
            <ul className="navbar-nav flex-row justify-content-end align-items-center">
                <li className="nav-item d-block d-md-none">
                    <NavLink to="" className="nav-link content__icon--right">
                        <i className="fa fa-search" />
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                        <img src="https://vaithuhayho.com/wp-content/uploads/2021/03/anh-nen-dep-2.jpg"
                            alt="*"
                            height={25}
                            width={25} />
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="*">
                                <i className="fa fa-user" />
                                Account
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="*">
                                <i className="fa fa-cog" />
                                Setting
                            </a>
                        </li>
                        <li onClick={handleLogout}>
                            <a className="dropdown-item" href="">
                                <i className="fa fa-outdent" />
                                Logout
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default memo(InfoComponent);