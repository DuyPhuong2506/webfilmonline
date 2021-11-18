
import InputField from './../../../../../components/custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

FilmForm.propTypes = {
  onSubmit: PropTypes.func,
};

FilmForm.defaultProps = {
  onSubmit: null,
}

function FilmForm(props) {
    const { initialValues, isAddMode ,dataList} = props;
    const validationSchema = Yup.object().shape({
        episode: Yup.number().required('Vui Lòng Nhập Số Tập'),
        urlVideo: Yup.string().required('Vui Lòng Nhập Link Phim'),

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
              name="episode"
              component={InputField}

              label="Tập Phim"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="urlVideo"
              component={InputField}

              label="Link Phim"
              placeholder="Eg: Wow nature ..."
            />

            <div className="mt-4">
              <FormGroup>
                <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                  {isSubmitting && <Spinner size="sm" />}
                  {isAddMode ? 'Add Tập' : 'Update Tập'}
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

export default FilmForm;