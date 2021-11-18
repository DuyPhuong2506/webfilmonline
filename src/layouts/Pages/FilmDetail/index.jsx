import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { apiAdminFilm } from '../../../services/adminApi';
import DetailComponent from './Components/DetailComponent';
FilmDetail.propTypes = {
    
};

function FilmDetail(props) {
    const { id } = useParams();
    const [dataDetail ,setDataDetail] = useState([]);

    useEffect(() => {
        apiAdminFilm.fetchApiListFilm().then(res => {
            let data = res.data;
            let dataItem = data.find(dataDetail => dataDetail.id === id);
            setDataDetail(dataItem);
        })
}, []);
    return (
        <div className="section section-filmdetail">
            <div class="container">
        <div class="row container" id="wrapper">
            <div class="halim-panel-filter">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="yoast_breadcrumb hidden-xs"><span><span><a href="danhmuc.php">Phim Mới</a> » <span><a href="danhmuc.php">{dataDetail.national}</a> » <span class="breadcrumb_last" aria-current="page">{dataDetail.name}</span></span>
                                </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ajax-filter" class="panel-collapse collapse" aria-expanded="true" role="menu">
                    <div class="ajax"></div>
                </div>
            </div>
            <main id="main-contents" class="">
                {
                    dataDetail ? <DetailComponent dataDetail={dataDetail}/> : 'Chờ loading .............'
                }
            </main>
            <aside id="sidebar" class="col-xs-12 col-sm-12 col-md-4"></aside>
            </div>
        </div>
        </div>
    );
}

export default FilmDetail;