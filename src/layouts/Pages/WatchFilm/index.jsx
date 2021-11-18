import React, { useState, useEffect } from "react";
import "./styles.scss";
import { apiWatchFilm } from "../../../services/clientApi";
import { apiAdminFilm } from "../../../services/adminApi";
import {  useParams } from "react-router-dom";
import TopViewCard from "../../Client/TopViewCard"
import { Row, Col } from "antd";
function WatchFilm(props) {
  const [listWatch, setListWatch] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);
  const [dataList, setDataList] = useState([]);
  const { id } = useParams();
  const [urlFilm, setUrlFilm] = useState("");
  useEffect(() => {
    apiAdminFilm.fetchApiListFilm().then((res) => {
      let data = res.data;
      let dataItem = data.find((dataDetail) => dataDetail.id === id);
      setDataDetail(dataItem);
      setDataList(data.slice(0,10));
    });
  }, []);
  console.log(dataList);
  useEffect(() => {
    apiWatchFilm.fetchWatchFilms().then((res) => {
      if (id) {
        let listFilms = [];
        let dataList = res.data;
        listFilms = dataList.filter((item, index) => item.filmId === id);
        listFilms.sort(function (a, b) {
          return a.episode - b.episode;
        });
        console.log(listFilms);
        setListWatch(listFilms);
      }
    });
  }, []);
  if (listWatch.length > 0) {
    console.log(listWatch[0]);
  }
  const handleWatchFilm = (urlFilm) => {
    setUrlFilm(urlFilm);
    console.log("alright");
  };
  console.log(urlFilm);
  console.log(id);
  console.log(listWatch);
  return (
    <div className="watch-film">
      <div className="container">
        <div className="halim-panel-filter">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-6">
                <div className="yoast_breadcrumb hidden-xs">
                  <span>
                    <span>
                      <a href="">Phim mới</a> »{" "}
                      <span>
                        <a href="danhmuc.php">
                          {dataDetail ? dataDetail.national : ""}
                        </a>{" "}
                        »{" "}
                        <span className="breadcrumb_last" aria-current="page">
                          {dataDetail ? dataDetail.name : ""}
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            id="ajax-filter"
            className="panel-collapse collapse"
            aria-expanded="true"
            role="menu"
          >
            <div className="ajax"></div>
          </div>
        </div>
        <div className="container">
          <Row>
            <Col span={18}>
              <main id="main-contents" className="col-xs-12 col-sm-12">
                <section id="content" className="test">
                  <div className="clearfix wrap-content">
                    {/* <iframe width="100%" height="500" src="https://www.youtube.com/embed/r958O404e4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> */}
                    <iframe
                      width="100%"
                      height="500"
                      src={
                        urlFilm === ""
                          ? listWatch.length > 0
                            ? listWatch[0].urlVideo
                            : ""
                          : urlFilm
                      }
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <div className="button-watch">
                      <ul className="halim-social-plugin col-xs-4 hidden-xs">
                        <li
                          className="fb-like"
                          data-href=""
                          data-layout="button_count"
                          data-action="like"
                          data-size="small"
                          data-show-faces="true"
                          data-share="true"
                        ></li>
                      </ul>
                      <ul className="col-xs-12 col-md-8">
                        <div id="autonext" className="btn-cs autonext">
                          <i className="icon-autonext-sm"></i>
                          <span>
                            <i className="hl-next"></i> Autonext:{" "}
                            <span id="autonext-status">On</span>
                          </span>
                        </div>
                        <div id="explayer" className="hidden-xs">
                          <i className="hl-resize-full"></i> Expand
                        </div>
                        <div id="toggle-light">
                          <i className="hl-adjust"></i> Light Off
                        </div>
                        <div id="report" className="halim-switch">
                          <i className="hl-attention"></i> Report
                        </div>
                        <div className="luotxem">
                          <i className="hl-eye"></i>
                          <span>#</span> lượt xem
                        </div>
                        <div className="luotxem">
                          <a
                            className="visible-xs-inline"
                            data-toggle="collapse"
                            href="#moretool"
                            aria-expanded="false"
                            aria-controls="moretool"
                          >
                            <i className="hl-forward"></i> Share
                          </a>
                        </div>
                      </ul>
                    </div>
                    <div className="collapse" id="moretool">
                      <ul className="nav nav-pills x-nav-justified">
                        <li
                          className="fb-like"
                          data-href=""
                          data-layout="button_count"
                          data-action="like"
                          data-size="small"
                          data-show-faces="true"
                          data-share="true"
                        ></li>
                        <div
                          className="fb-save"
                          data-uri=""
                          data-size="small"
                        ></div>
                      </ul>
                    </div>

                    <div className="clearfix"></div>
                    <div className="clearfix"></div>
                    <div className="title-block">
                      <a
                        href="javascript:;"
                        data-toggle="tooltip"
                        title="Add to bookmark"
                      >
                        <div
                          id="bookmark"
                          className="bookmark-img-animation primary_ribbon"
                          data-id="37976"
                        >
                          <div className="halim-pulse-ring"></div>
                        </div>
                      </a>
                      <div className="title-wrapper-xem full">
                        <h4 style={{ color: "white" }}>Chi tiết phim ...</h4>
                        <p className="entry-title">
                          <a href="" title="" className="tl">
                            {dataDetail
                              ? dataDetail.desc
                              : "Chi tiep xem tai wwww.Coisubin.org.com"}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div
                      className="entry-content htmlwrap clearfix collapse"
                      id="expand-post-content"
                    >
                      <article
                        id="post-37976"
                        className="item-content post-37976"
                      ></article>
                    </div>
                    <div className="clearfix"></div>
                    <div className="text-center">
                      <div id="halim-ajax-list-server"></div>
                    </div>
                    <div id="halim-list-server">
                      <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active server-1">
                          <a
                            href="#server-0"
                            aria-controls="server-0"
                            role="tab"
                            data-toggle="tab"
                          >
                            <i className="hl-server"></i> Vietsub
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active server-1"
                          id="server-0"
                        >
                          <div className="halim-server">
                            <ul className="halim-list-eps d-flex">
                              <li
                                className="halim-episode"
                                style={{ marginRight: "7px" }}
                              >
                                <span
                                  className="halim-btn halim-btn-2 active halim-info-1-1 box-shadow"
                                  data-post-id="37976"
                                  data-server="1"
                                  data-episode="1"
                                  data-position="first"
                                  data-embed="0"
                                  data-title=""
                                  data-h1=""
                                >
                                  #
                                </span>
                              </li>
                              {listWatch.length > 0
                                ? listWatch.map((item, index) => (
                                    <li
                                      className="halim-episode "
                                      style={{ marginRight: "7px" }}
                                    >
                                      <span
                                        className="halim-btn halim-btn-2 active halim-info-1-1 box-shadow"
                                        data-post-id="37976"
                                        data-server="1"
                                        data-episode="1"
                                        data-position="first"
                                        data-embed="0"
                                        data-title=""
                                        data-h1=""
                                        onClick={() =>
                                          handleWatchFilm(item.urlVideo)
                                        }
                                      >
                                        Tập {item.episode}
                                      </span>
                                    </li>
                                  ))
                                : "Chưa có tập film"}
                            </ul>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="htmlwrap clearfix">
                      <div id="lightout"></div>
                    </div>
                  </div>
                </section>
                <section className="related-movies">
                  <div id="halim_related_movies-2xx" className="wrap-slider">
                    <div className="section-bar clearfix">
                      <h3 className="section-title">
                        <span>review</span>
                      </h3>
                    </div>
                    <div id="fb-root"></div>
                    <div
                      className="fb-comments"
                      width="100%"
                      data-href="https://mocmeo.com"
                      data-width="10"
                      data-numposts="5"
                    ></div>
                  </div>
                </section>
              </main>
            </Col>
            <Col span={6}>
              <aside id="sidebarWatch">
                <div
                  id="halim_tab_popular_videos-widget-7"
                  class="widget halim_tab_popular_videos-widget"
                >
                  <div class="section-bar clearfix">
                    <div class="section-title">
                      <span>Top Views</span>
                      <ul class="halim-popular-tab" role="tablist">
                        <li role="presentation" class="active">
                          <a
                            class="ajax-tab"
                            role="tab"
                            data-toggle="tab"
                            data-showpost="10"
                            data-type="today"
                          >
                            Day
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            class="ajax-tab"
                            role="tab"
                            data-toggle="tab"
                            data-showpost="10"
                            data-type="week"
                          >
                            Week
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            class="ajax-tab"
                            role="tab"
                            data-toggle="tab"
                            data-showpost="10"
                            data-type="month"
                          >
                            Month
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            class="ajax-tab"
                            role="tab"
                            data-toggle="tab"
                            data-showpost="10"
                            data-type="all"
                          >
                            All
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <section class="tab-content">
                    <div
                      role="tabpanel"
                      class="tab-pane active halim-ajax-popular-post"
                    >
                      <div class="halim-ajax-popular-post-loading hidden"></div>
                      {
                          dataList.length > 0 ?
                          dataList.map((item,index) => (
                            <TopViewCard dataItem={item} />
                          ))
                      : 'Đang cập nhật ....'
                      }
                    </div>
                  </section>
                </div>
              </aside>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default WatchFilm;
