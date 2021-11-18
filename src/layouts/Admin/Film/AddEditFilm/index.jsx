import React , {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { apiAdminKindFilm , } from '../../../../services/adminApi';
import FilmForm from '../Components/FilmForm';
import { createFilmAction ,updateFilmAction ,actFetchsRequest} from '../../../../Redux/Actions/Admin/filmAction';
AddEditFilm.propTypes = {};



function AddEditFilm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [dataList , setDataList] = useState([{id : '' , name : ''}]);
  const isAddMode = !id;
  const editedFilm = useSelector(state => {
    const foundFilm = state.FilmsReducer.find(x => x.id === id);
    return foundFilm;
  });

  console.log(editedFilm);
  useEffect(() => {
    dispatch(actFetchsRequest());
}, []);

  useEffect(() => {
    apiAdminKindFilm.fetchApiListKindOfFilm().then(res => {
        setDataList(res.data);
    })
  }, [])
  const initialValues =
    isAddMode
    ? {
      name: '',
      director: '',
      duration : '',
      actor: '',
      year: 0,
      desc: '',
      trailer: '',
      national: '',
      kindOfFirmId: null,
      image : ''
    }
    : {...editedFilm ,kindOfFirmId: null};

    
  const handleSubmit = (values) => {
    console.log(values.kindOfFirmId);
    let data = {
      name : values.name,
      director : values.director,
      actor : values.actor,
      duration : values.duration,
      year : values.year,
      desc : values.desc,
      trailer : values.trailer,
      national : values.national,
      kindOfFirmId : values.kindOfFirmId,
    }
    if(isAddMode) {
      dispatch(createFilmAction(data));
    }
    else{
      dispatch(updateFilmAction(id,data));
      
    }
    setTimeout(() =>{
      history.push("/admin/film");
    },100)
  }

  return (
    <div className="photo-edit">

      <div className="photo-edit__form">
        <FilmForm
          dataList={dataList}
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditFilm;