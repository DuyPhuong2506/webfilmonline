import React , {useState ,useEffect} from 'react';
import './movie-card.scss';
import {Link} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import { BASE_URL_IMAGE } from '../../../Settings/configUrl';
import { apiFilm } from '../../../services/clientApi';
function MovieCard(props) {
    const {dataItem} = props;
    console.log(dataItem);
    const [imageFilm ,setImageFilm] = useState();
    useEffect(() => {
        apiFilm.fetchApiUploadImageFilm(dataItem.id).then((res) =>{
            setImageFilm(res.data);
        })
    },[])

    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <Link to={`/film/${dataItem.name}/${dataItem.id}`}>
            <div class="halim-item" data-aos="flip-left" data-aos-delay="500">
                <a class="halim-thumb" href="chitiet.php" title="GÓA PHỤ ĐEN">
                    <figure><img class="lazy img-responsive" src={imageFilm ? `${BASE_URL_IMAGE}/${imageFilm.logoUrl}` : null} alt="GÓA PHỤ ĐEN" title="GÓA PHỤ ĐEN"/></figure>
                    <span class="status">HD</span><span class="episode"><i class="fa fa-play" aria-hidden="true"></i>Vietsub</span> 
                    <div class="icon_overlay"></div>
                    <div class="halim-post-title-boxaN">
                        <div class="halim-post-titleN ">
                        <p class="entry-titleN">{dataItem.name}</p>
                        <p class="original_titleN">{dataItem.name}</p>
                        </div>
                    </div>
                </a>
            </div>
        </Link>
    );
}

export default MovieCard;