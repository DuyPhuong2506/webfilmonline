import React, { useEffect, useState } from "react";
import './footer.scss';
import {  apiAdminConfig } from "../../../services/adminApi";
import { Link } from 'react-router-dom';
import bg from '../../../assets/footer-bg.jpg';


const logo = "http://watchvideo-001-site1.btempurl.com/api/Configs/getImage"
const Footer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
      apiAdminConfig.fetchApiListConfig().then((res) => {
          setData(res.data);
        });
    }, []);
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">tMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
                <div className="footer__content__contact">
                    <Link to="/">Liên hệ {data.length > 0?data[0].email : ""}</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
