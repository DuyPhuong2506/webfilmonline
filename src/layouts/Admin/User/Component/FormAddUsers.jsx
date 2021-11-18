import InputField from "./../../../../components/custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import * as Yup from "yup";
import "./FormAddUsers.scss";

FormAddUsers.propTypes = {
  onSubmit: PropTypes.func,
};

FormAddUsers.defaultProps = {
  onSubmit: null,
};

function FormAddUsers(props) {
  const { initialValues} = props;

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required")
  });

  // npm i --save react-select
  return (
    <div className="styleWidth">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={props.onSubmit}
      >
        {(formikProps) => {
          // do something here ...
          const { values, errors, touched, isSubmitting } = formikProps;
          console.log({ values, errors, touched });

          return (
            <Form>
              <FastField
                type="text"
                name="fullName"
                component={InputField}
                label="Full Name"
                placeholder="Enter yours name"
              />
              <FastField
                type="email"
                name="email"
                component={InputField}
                label="Email"
                placeholder="Enter yours email"
              />
              <FastField
                type="password"
                name="password"
                component={InputField}
                label="Password"
                placeholder="Enter yours Password"
              />

              <div className="mt-4">
                <FormGroup>
                  <Button
                     className="btn-register"
                    type="submit"
                    color= "primary" 
                  >
                    Register
                  </Button>
                </FormGroup>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormAddUsers;
