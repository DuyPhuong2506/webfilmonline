import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { actFetchsTypeRequest, createTypeFilmAction, updateTypeFilmAction } from '../../../../Redux/Actions/Admin/filmAction';
import { ToSlug } from '../../../../utils/helper';
import TypeFilmForm from '../Components/TypeFilmForm';

AddTypeFilm.propTypes = {};

function AddTypeFilm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const isAddMode = !id;
  const editedFilm = useSelector(state => {
    const foundFilm = state.TypeFilmReducer.find(x => x.id === id);
    return foundFilm;
  });
  useEffect(() => {
    dispatch(actFetchsTypeRequest());
}, []);

  const initialValues = isAddMode
    ? {
      name: '',
      slug: '',
    }
    : editedFilm;

  const handleSubmit = (values) => {
    let data = {
      name : values.name,
      slug : ToSlug(values.name),
    }
    console.log(data);
    return new Promise(resolve => {
      setTimeout(() => {
        if(isAddMode) {
          dispatch(createTypeFilmAction(data));
        }else{
          dispatch(updateTypeFilmAction(id,data));
        }
        history.push("/admin/typefilm");
        resolve(true);
      }, 1000);
    });
    
  }

  return (
    <div className="photo-edit">

      <div className="photo-edit__form">
        <TypeFilmForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddTypeFilm;