import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './styles.scss';

import MovieSearch from '../MovieSearch';

const logo = "http://watchvideo-001-site1.btempurl.com/api/Configs/getImage"
const headerNav = [
    {
        display: 'Trang Chủ',
        path: '/'
    },
    {
        display: 'Phim Bộ',
        path: '/phim-bo'
    },
    {
        display: 'Phim Lẻ',
        path: '/phim-le'
    }
];

const HeaderMenu = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap containerHome">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">Coisubin</Link>
                </div>
                <MovieSearch />
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu;
