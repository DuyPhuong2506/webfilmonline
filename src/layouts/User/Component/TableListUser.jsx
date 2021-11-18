import React from 'react';
import {Link} from 'react-router-dom';

function TableListUser(props) {
    const {data ,index, handleDelete} = props;
    const headleClickDelete = (id) => {
          if(handleDelete){
            handleDelete(id)
          }
      
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td><div className="font-15">{data.fullName}</div></td>
            <td><div className="font-15">{data.email}</div></td>
            {/* <td>
            <Link to={`/admin/kindoffilm/edit/${data.id}`}>
                <button type="button" className="btn btn-icon" title="Edit"><i className="fa fa-edit" />
                </button>
                </Link>
                <button type="button" className="btn btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"
                onClick= {(() => headleClickDelete(data.id))}
                /></button>
            </td> */}
    </tr>
    );
}

export default TableListUser;