import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { apiAdminFilm } from '../../../../services/adminApi';

UploadImage.propTypes = {
    
};

function UploadImage(props) {
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState();
    const [fileUrl, setFileUrl] = useState(null);
    const { id } = useParams();


    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("files", selectedFile);
        apiAdminFilm
        .fetchApiUploadImageFilm(id,formData)
        .then((res) => {
            history.push('/admin/film');
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
    return (
        <div>
            <div className="form-wrapper" style={{margin: '150px 250px'}}>
            <input
                className="input-config form-control"
                type="file"
                name="files"
                onChange={changeHandler}

            />
            <img src={fileUrl}  width={100} height={100} style={{margin: '20px'}}/>
            <br/>
            <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
            </button>

        </div>
        </div>
    );
}

export default UploadImage;