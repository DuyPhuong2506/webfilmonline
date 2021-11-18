import React , {useState ,useEffect} from 'react';
import { BASE_URL_IMAGE } from '../../../Settings/configUrl';
import { apiFilm } from '../../../services/clientApi';
import { useHistory} from 'react-router-dom'
function TopViewCard(props) {
    const {dataItem} = props;
    const history = useHistory();
    const [imageFilm ,setImageFilm] = useState();
    useEffect(() => {
        apiFilm.fetchApiUploadImageFilm(dataItem.id).then((res) =>{
            setImageFilm(res.data);
        })
    },[])
    const handleCkickTopViewDetail = () => {
      if(dataItem.kindOfFirmId === '6d086ceb-6ce0-4660-be97-34fa87cb9eca'){
          history.push(`/film/${dataItem.name}/${dataItem.id} `)
      }else{
          history.push(`/film/${dataItem.name}/${dataItem.id}`)
      }
      
  }
    return (
      
            <div id="halim-ajax-popular-post" class="popular-post" onClick={handleCkickTopViewDetail}>
                            <div class="item post-37176">
                              <a href="" title="Luật tâm thức">
                                <div class="item-link">
                                  <img
                                    src={imageFilm ? `${BASE_URL_IMAGE}/${imageFilm.logoUrl}` : null}
                                    class="lazy post-thumb"
                                    alt="Luật tâm thức"
                                    title="Luật tâm thức"
                                  />
                                  <span class="is_trailer">Trailer</span>
                                </div>
                                <p class="title">{dataItem.name}</p>
                              </a>
                              <div class="viewsCount"> {dataItem.viewCount}k lượt xem</div>
                              <div>
                                <span class="user-rate-image post-large-rate stars-large-vang"></span>
                              </div>
                            </div>
                          </div>

    );
}

export default TopViewCard;