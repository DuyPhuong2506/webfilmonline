import React , {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import EposideFilmForm from '../Components/EposideFilmForm';
import {  createEposideFilmAction, actFetchsEposideRequest, updateEposideFilmAction} from '../../../../Redux/Actions/Admin/filmAction';
AddEposideFilm.propTypes = {};



function AddEposideFilm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { idEdit,id } = useParams();
  const isAddMode = !idEdit;
  
  const editedFilm = useSelector(state => {
    let data = {};
    state.EposideReducer.forEach((item,index) =>{
      if(item.id === idEdit){
        data = item;
      }
    })
    // const foundFilm = state.EposideReducer.find((x,i => x[i].id === idEdit);
    return data;
  });

  useEffect(() => {
    dispatch(actFetchsEposideRequest());
}, []);
console.log(editedFilm ,idEdit);
  const initialValues =
    isAddMode
    ? {
    
        episode: 0,
        urlVideo: '',
    }
    : editedFilm;

    
  const handleSubmit = (values) => {
    let data = {
      episode : parseInt(values.episode ,10),
      urlVideo : values.urlVideo,
    }
    console.log(data);
    
    if(isAddMode) {
      dispatch(createEposideFilmAction(id, data));
      history.push(`/admin/film/choose-episode/${id}`);
    }
    else{
      dispatch(updateEposideFilmAction(id,idEdit,data));
      history.push(`/admin/film/choose-episode/${id}`);
    }
  }

  return (
    <div className="photo-edit">

      <div className="photo-edit__form">
        <EposideFilmForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEposideFilm;