import React , {useState ,useEffect} from 'react';
import { apiFilm } from '../../../../services/clientApi';
import { BASE_URL_IMAGE } from '../../../../Settings/configUrl';
import { Row, Col } from 'antd';
import { useHistory , Link} from 'react-router-dom'
const ramdomYears = () => {
    let year = Math.trunc(Math.random() * (2014 - 2022) + 2014);
    return year
}
function DetailComponent(props) {
    const {dataDetail} = props;
    const history = useHistory();
    const [imageFilm ,setImageFilm] = useState();
    const [typeFilm ,setTypeFilm] = useState([]);
    console.log(typeFilm);
    useEffect(() => {
        if(dataDetail.id){
            apiFilm.fetchApiUploadImageFilm(dataDetail.id).then((res) =>{
                setImageFilm(res.data);
            })
        }
    },[dataDetail])
    const handleCkickWatch = () => {
        if(dataDetail.kindOfFirmId === '6d086ceb-6ce0-4660-be97-34fa87cb9eca'){
            history.push(`/phim-bo/${dataDetail.name}/${dataDetail.id} `)
        }else{
            history.push(`/phim-le/${dataDetail.name}/${dataDetail.id}`)
        }
        
    }

    useEffect(() => {
        if(dataDetail.id){
            let dataTypeList = [];
            apiFilm.fetchApiTypeFilm(dataDetail.id).then((res) =>{
                dataTypeList.push(res.data);
                setTypeFilm(dataTypeList);
            })
        }
    },[dataDetail])

   
    return (
        <div>
            <section id="content" className="test">
                    <div className="clearfix wrap-content">
                        <div className="halim-movie-wrapper">
                            <div className="movie_info">
                            <Row>
                                <Col span={5}>
                                        <div className="movie-poster" onClick={handleCkickWatch}>
                                        <img className="movie-thumb" src={imageFilm ? `${BASE_URL_IMAGE}/${imageFilm.logoUrl}` : null} alt="GÓA PHỤ ĐEN"/>
                                        <div className="bwa-content">
                                            <div className="loader"></div>
                                            <a className="bwac-btn">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={19}>
                                <div className="film-poster col-md-9">
                                    <h1 className="movie-title title-1" >{dataDetail.name}</h1>
                                    <h2 className="movie-title title-2" >{dataDetail.name }  ({ramdomYears()})</h2>
                                    <ul className="list-info-group">
                                        <li className="list-info-group-item"><span>Trạng Thái</span> : <span className="quality">HD</span><span className="episode">Vietsub</span></li>
                                        <li className="list-info-group-item"><span>Điểm IMDb</span> : <span className="imdb">7.2</span></li>
                                        <li className="list-info-group-item"><span>Thời lượng</span> : {dataDetail.duration}</li>
                                        <li className="list-info-group-item"><span>Thể loại</span> :
                                        {
                                            typeFilm.length > 0 ? 
                                            typeFilm.map((item,index) => (
                                                item.typeFirmConfig.map((item,index) => (
                                                    <Link to={`/phim/the-loai/${item.typeFirm.slug}`} rel="category tag">{item.typeFirm.name} ,</Link>
                                                ))
                                            ))
                                            : 'Chưa cập nhật ....'
                                        }
                                        
                                        
                                        
                                         </li>
                                        <li className="list-info-group-item"><span>Quốc gia</span> : <a href="" rel="tag">{dataDetail.national}</a></li>
                                        <li className="list-info-group-item"><span>Đạo diễn</span> : <a className="director" rel="nofollow" href="https://phimhay.co/dao-dien/cate-shortland" title="Cate Shortland">{dataDetail.director}</a></li>
                                        <li className="list-info-group-item last-item" ><span>Diễn viên</span> : <a href="" rel="nofollow" title="C.C. Smiff">{dataDetail.actor}</a></li>
                                    </ul>
                                    <div className="movie-trailer hidden"></div>
                                </div>
                                </Col>
                            </Row>
                                   
                                
                                
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div id="halim_trailer"></div>
                        <div className="clearfix"></div>
                        <div className="section-bar clearfix">
                            <h2 className="section-title"><span style={{color: '#ffed4d'}}>Nội dung phim</span></h2>
                        </div>
                        <div className="entry-content htmlwrap clearfix">
                            <div className="video-item halim-entry-box">
                                <article id="post-38424" className="item-content">
                                    Phim <a href="https://phimhay.co/goa-phu-den-38424/">{dataDetail.name}</a> - {ramdomYears()} - {dataDetail.national}:
                                    <p>{dataDetail.desc}</p>
                                    <section id="content" className="test">
                                        <div className="clearfix wrap-content">
                                            <iframe width="560" height="315" src={dataDetail.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </section>
                                </article>
                                </div>
                            </div>
                        </div>
                </section>
                <section className="related-movies">
                    <div id="halim_related_movies-2xx" className="wrap-slider">
                        <div className="section-bar clearfix">
                            <h3 className="section-title"><span>CÓ THỂ BẠN MUỐN XEM</span></h3>
                        </div>
                        <div id="halim_related_movies-2" className="owl-carousel owl-theme related-film">
                            <article className="thumb grid-item post-38498">
                                <div className="halim-item">
                                    <a className="halim-thumb" href="chitiet.php" title="Đại Thánh Vô Song">
                                        <figure><img className="lazy img-responsive" src="https://image.bongngocdn.com/upload/poster-dai-thanh-vo-song-2021.jpg" alt="Đại Thánh Vô Song" title="Đại Thánh Vô Song"/></figure>
                                        <span className="status">HD</span><span className="episode"><i className="fa fa-play" aria-hidden="true"></i>Vietsub</span>
                                        <div className="icon_overlay"></div>
                                        <div className="halim-post-title-box">
                                            <div className="halim-post-title ">
                                                <p className="entry-title">Đại Thánh Vô Song</p>
                                                <p className="original_title">Monkey King: The One And Only</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </article>
                            <article className="thumb grid-item post-38498">
                                <div className="halim-item">
                                    <a className="halim-thumb" href="chitiet.php" title="Đại Thánh Vô Song">
                                        <figure><img className="lazy img-responsive" src="https://image.bongngocdn.com/upload/poster-dai-thanh-vo-song-2021.jpg" alt="Đại Thánh Vô Song" title="Đại Thánh Vô Song"/></figure>
                                        <span className="status">HD</span><span className="episode"><i className="fa fa-play" aria-hidden="true"></i>Vietsub</span>
                                        <div className="icon_overlay"></div>
                                        <div className="halim-post-title-box">
                                            <div className="halim-post-title ">
                                                <p className="entry-title">Đại Thánh Vô Song</p>
                                                <p className="original_title">Monkey King: The One And Only</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </article>
                            <article className="thumb grid-item post-38498">
                                <div className="halim-item">
                                    <a className="halim-thumb" href="chitiet.php" title="Đại Thánh Vô Song">
                                        <figure><img className="lazy img-responsive" src="https://image.bongngocdn.com/upload/poster-dai-thanh-vo-song-2021.jpg" alt="Đại Thánh Vô Song" title="Đại Thánh Vô Song"/></figure>
                                        <span className="status">HD</span><span className="episode"><i className="fa fa-play" aria-hidden="true"></i>Vietsub</span>
                                        <div className="icon_overlay"></div>
                                        <div className="halim-post-title-box">
                                            <div className="halim-post-title ">
                                                <p className="entry-title">Đại Thánh Vô Song</p>
                                                <p className="original_title">Monkey King: The One And Only</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </article>
                            <article className="thumb grid-item post-38498">
                                <div className="halim-item">
                                    <a className="halim-thumb" href="chitiet.php" title="Đại Thánh Vô Song">
                                        <figure><img className="lazy img-responsive" src="https://image.bongngocdn.com/upload/poster-dai-thanh-vo-song-2021.jpg" alt="Đại Thánh Vô Song" title="Đại Thánh Vô Song"/></figure>
                                        <span className="status">HD</span><span className="episode"><i className="fa fa-play" aria-hidden="true"></i>Vietsub</span>
                                        <div className="icon_overlay"></div>
                                        <div className="halim-post-title-box">
                                            <div className="halim-post-title ">
                                                <p className="entry-title">Đại Thánh Vô Song</p>
                                                <p className="original_title">Monkey King: The One And Only</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </article>
                            <article className="thumb grid-item post-38498">
                                <div className="halim-item">
                                    <a className="halim-thumb" href="chitiet.php" title="Đại Thánh Vô Song">
                                        <figure><img className="lazy img-responsive" src="https://image.bongngocdn.com/upload/poster-dai-thanh-vo-song-2021.jpg" alt="Đại Thánh Vô Song" title="Đại Thánh Vô Song"/></figure>
                                        <span className="status">HD</span><span className="episode"><i className="fa fa-play" aria-hidden="true"></i>Vietsub</span>
                                        <div className="icon_overlay"></div>
                                        <div className="halim-post-title-box">
                                            <div className="halim-post-title ">
                                                <p className="entry-title">Đại Thánh Vô Song</p>
                                                <p className="original_title">Monkey King: The One And Only</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </article>

                        </div>
                        
                    </div>
                </section>
        </div>
    );
}

export default DetailComponent;