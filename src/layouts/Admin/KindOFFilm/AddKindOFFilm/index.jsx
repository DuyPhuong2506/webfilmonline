import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { actFetchsKindRequest, createKindFilmAction, updateKindFilmAction } from '../../../../Redux/Actions/Admin/filmAction';
import KindOFFilmForm from './../Components/KindOFFilmForm'

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const isAddMode = !id;
  const editedFilm = useSelector(state => {
    const foundFilm = state.KindFilmReducer.find(x => x.id === id);
    return foundFilm;
  });
  console.log(editedFilm);
  useEffect(() => {
    dispatch(actFetchsKindRequest());
}, []);

  const initialValues = isAddMode
    ? {
      name: '',
    }
    : editedFilm;

  const handleSubmit = (values) => {
    let data = {
      name : values.name,
    }
    return new Promise(resolve => {
      setTimeout(() => {
        if(isAddMode) {
          dispatch(createKindFilmAction(data));
        }else{
          dispatch(updateKindFilmAction(id,data));
        }
        history.push("/admin/kindoffilm");
        resolve(true);
      }, 1000);
    });
    
  }

  return (
    <div className="photo-edit">

      <div className="photo-edit__form">
        <KindOFFilmForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;