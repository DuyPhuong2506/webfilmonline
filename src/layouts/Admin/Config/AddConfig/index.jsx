import React, { useEffect, useState } from "react";
import { apiAdmin, apiAdminConfig } from "../../../../services/adminApi";
import { useHistory, useParams } from "react-router-dom";
import "./styles.scss";
AddConfig.propTypes = {};
function AddConfig(props) {
  const [title, setTitle] = useState("");
  const [dataList, setDataList] = useState([]);
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
//   console.log(dataList[0]);
console.log(title);
  useEffect(() => {
    apiAdminConfig.fetchApiListConfig()
    .then((res) => {
      setDataList(res.data);
    });
  }, []);
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("files", selectedFile);
    apiAdminConfig
      .fetchApiAddConfig(formData)
      .then((res) => {
        history.push("/admin/config");
      })
      .catch((err) => {
        console.log(err.message);
      });
      apiAdminConfig
      .fetchApiAddEmail(title)
      .then((res) => {
        history.push("/admin/config");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="form-wrapper">
      <input
        className="input-config form-control"
        type="file"
        name="files"
        onChange={changeHandler}
      />
      <label htmlFor="email" className="mt-5 email-label" />
      Email
      <input
        className="input-config form-control"
        type="email"
        name="email"
        placeholder={dataList.length > 0 ? dataList[0].email : ""}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default AddConfig;
