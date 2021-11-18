import React , {useEffect,useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { apiAdminTypeFilm , apiAdminTypeFilmConfig } from '../../../../services/adminApi';
import TypeFilmForm from '../Components/TypeFilmForm';




function AddTypeFilm(props) {
  const history = useHistory();
  const { idEdit,id } = useParams();
  const [dataList , setDataList] = useState([{id : '' , name : ''}]);
  const isAddMode = !idEdit;


  useEffect(() => {
    
}, []);

  useEffect(() => {
    apiAdminTypeFilm.fetchApiListTypeFilm().then(res => {
        setDataList(res.data);
    })
  }, [])
  const initialValues =
    isAddMode
    ? { typeFirm: [] }
    : "";
  

    
  const handleSubmit = (values) => {
    console.log(values);
    if(isAddMode) {
        values.forEach(value  => {
        
            apiAdminTypeFilmConfig
            .fetchApiAddTypeFilmConfig({firms : id , typeFirm : value.value})
            .then((res) => {
              history.push("/admin/film");
            })
            .catch((err) => {
              console.log(err.message);
            });
          })
    }
    else{
    //   dispatch(updateFilmAction(id,data));
      
    }
    setTimeout(() =>{
    //   history.push("/admin/film");
    },100)
  }

  return (
    <div className="photo-edit">

      <div className="photo-edit__form">
        <TypeFilmForm
            dataList={dataList}
            isAddMode={isAddMode}
            initialValues={initialValues}
            onSubmit={handleSubmit} 
        />
      </div>
    </div>
  );
}

export default AddTypeFilm;