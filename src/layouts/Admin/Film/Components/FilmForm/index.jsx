
import InputField from './../../../../../components/custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import SelectField from '../../../../../components/custom-fields/SelectField';

FilmForm.propTypes = {
  onSubmit: PropTypes.func,
};

FilmForm.defaultProps = {
  onSubmit: null,
}

function FilmForm(props) {
    const { initialValues, isAddMode ,dataList} = props;
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Vui Lòng Nhập Tên Phim'),
        director: Yup.string().required('Vui Lòng Nhập Tên Phim'),
        actor: Yup.string().required('Vui Lòng Nhập Tên Phim'),
        duration: Yup.string().required('Vui Lòng Nhập Tên Phim'),
        year: Yup.number().required('Vui Lòng Nhập Tên Phim'),
        trailer: Yup.string().required('Vui Lòng Nhập Tên Phim'),
        national: Yup.string().required('Vui Lòng Nhập Tên Phim'),
        kindOfFirmId: Yup.string()
        .required('This field is required.')
        .nullable(),

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

              label="Ten Phim"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="director"
              component={InputField}

              label="Director"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="actor"
              component={InputField}

              label="Actor"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="duration"
              component={InputField}

              label="Duration"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="year"
              component={InputField}

              label="Year"
              placeholder="Eg: Wow nature ..."
            />
             <FastField
              name="trailer"
              component={InputField}

              label="Trailer"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="desc"
              component={InputField}
              type="textarea"
              label="Mieu Ta"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="national"
              component={InputField}

              label="National"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="kindOfFirmId"
              component={SelectField}

              label="Loai Phim"
              placeholder="What's your photo category?"
              options={dataList.map((option) => ({
                value: option.id,
                label: option.name
            }))}
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

export default FilmForm;