import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

function TypeFilmTable(props) {
  const {data ,index ,onClickDelete,onClickUpdate} = props;
  const headleClickDelete = (id) => {
      if(onClickDelete){
          onClickDelete(id)
      }
  }
  const headleClickUpdate = (data) => {
      if(onClickUpdate){
          onClickUpdate(data)
      }
  }
    
    return (
        <tr>
            <td>{index + 1}</td>
            <td><div className="font-15">{data.name}</div></td>
            <td><div className="font-15">{data.slug}</div></td>
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

export default TypeFilmTable;