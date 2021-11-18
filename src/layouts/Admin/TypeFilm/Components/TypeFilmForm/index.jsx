
import InputField from './../../../../../components/custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import { ChangeToSlug } from '../../../../../utils/helper';

TypeFilmForm.propTypes = {
  onSubmit: PropTypes.func,
};

TypeFilmForm.defaultProps = {
  onSubmit: null,
}

function TypeFilmForm(props) {
  const { initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vui Lòng Nhập Tên Phim'),
  });

  // npm i --save react-select
  return (
    <div className="styleWidth">
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        // do something here ...
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="name"
              component={InputField}
                id="titleSlug"
              label="Thể Loại Phim"
              placeholder="Eg: Wow nature ..."
              onKeyDown={ChangeToSlug}
            />
            <FastField
              name="slug"
              component={InputField}
                id="slugName"
              label="Slug"
              placeholder="Eg: Wow nature ..."
            />

            <div className="mt-4">
              <FormGroup>
                <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                  {isSubmitting && <Spinner size="sm" />}
                  {isAddMode ? 'Add KindOF' : 'Update KindOF'}
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

export default TypeFilmForm;