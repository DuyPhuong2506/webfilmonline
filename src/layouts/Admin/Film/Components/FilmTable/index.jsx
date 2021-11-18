import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { apiAdminFilm ,apiAdminTypeFilmConfig} from '../../../../../services/adminApi';
import { BASE_URL, BASE_URL_IMAGE } from '../../../../../Settings/configUrl';

function FilmTable(props) {
    console.log("render con");
    const {data ,index ,onClickDelete,onClickUpdate} = props;
    const [fileUrl, setFileUrl] = useState(null);
    const [typeFilm ,setTypeFilm] = useState([]);
    const headleClickDelete = (id) => {
        if(onClickDelete){
            onClickDelete(id)
        }
    }
    useEffect(() => {
        if(data.id){
            let dataTypeList = [];
            apiAdminTypeFilmConfig.fetchApiTypeFilm(data.id).then((res) =>{
                dataTypeList.push(res.data);
                setTypeFilm(dataTypeList);
            })
        }
    },[])
    useEffect(() => {
        apiAdminFilm.fetchApiGetImageFilm(data.id).then(res => {
            setFileUrl(res.data)
        })
      }, [])
    const headleClickUpdate = (data) => {
        if(onClickUpdate){
            onClickUpdate(data)
        }
    }
    console.log(typeFilm ,"đạksadáhdá")
    return (
        <tr>
            <td>{index + 1}</td>
            <td><div className="font-15" style={{width : '100px'}}>{data.name}</div></td>
            <td><div className="font-15" style={{width : '70px'}}>{data.director}</div></td>
            <td><div className="font-15" style={{width : '100px'}}>{data.actor}</div></td>
            <td><div className="font-15">{data.duration}</div></td>
            <td><div className="font-15">{data.national}</div></td>
            <td><div className="font-15">{data.kindOfFirmId === '6d086ceb-6ce0-4660-be97-34fa87cb9eca' ? 'Phim Bộ' : 'Phim Lẻ' }</div></td>
            <td><div className="font-15"><Link to={`film/choose-episode/${data.id}`}>Choose Episode</Link></div></td>
            <td><div className="font-15" style={{width : '100px'}}><Link to={`film/choose-type/${data.id}`}>Choose Type</Link>
            {
                typeFilm.length > 0 ? 
                typeFilm.map((item,index) => (
                    item.typeFirmConfig.map((item,index) => (
                       <span> {item.typeFirm.name} ,</span>
                    ))
                ))
                : 'Chưa cập nhật ....'
            }
            </div></td>
            <td><div className="font-15" style={{display : 'flex' ,
    flexDirection: 'column'}}><Link to={`film/upload/${data.id}`}>UP IMAGE</Link>
            <img  src={fileUrl ? `${BASE_URL_IMAGE}/${fileUrl.logoUrl}` : null} width={70} height={70} alt style={{marginLeft : '10px'}}/>
            </div></td>
            <td>
                <button type="button" className="btn btn-icon" title="Edit"><i className="fa fa-edit" 
                onClick={() => headleClickUpdate(data) }
                /></button>
                <button type="button" className="btn btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"
                onClick={() => headleClickDelete(data.id) }
                /></button>
            </td>
    </tr>
    );
}

export default FilmTable;