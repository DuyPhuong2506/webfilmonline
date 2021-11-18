import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { apiAdmin, apiAdminUser } from '../../../../services/adminApi';
import FormAddUsers from '../Component/FormAddUsers';

AddUsers.propTypes = {};

function AddUsers(props) {
  const history = useHistory();
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    let data = {
      fullName : values.fullName,
      email: values.email,
      password: values.password,
    }
    apiAdminUser.fetchApiAddUsers(data)
    .then(res => {
      history.push('/admin/user');

    })
  }
  return (
    <div className="photo-edit">

      <div className="photo-edit__form">
        <FormAddUsers
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddUsers;