import React from 'react';
import {Link} from 'react-router-dom';
import "./FormListConfig.scss"
const logo = "http://watchvideo-001-site1.btempurl.com/api/Configs/getImage"
function FormListConfig(props) {
    const {data ,index, handleDelete} = props;
    const headleClickDelete = (id) => {
          if(handleDelete){
            handleDelete(id)
          }
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td><div className="font-15">{data.name}</div></td>
            <td><img src={logo} className="font-15 logoadmin"></img></td>
            <td><div className="font-15">{data.email}</div></td>
            {/* <td>
            <Link to={'/admin/config/add'}>
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

export default FormListConfig;