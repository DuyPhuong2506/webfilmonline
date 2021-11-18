import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React , {useState} from 'react';
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

SelectedMutil.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectedMutil.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  options: [],
}

function SelectedMutil(props) {
  const { field, form, options, label, placeholder, disabled ,isMulti ,onSubmit} = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  
  const [values , setValues] = useState([]);

  
  const selectedOption = options.find(option => option.value === value);

  const handleChange = values => {
    setValues(values);
  };
  
  const handleSelectedOptionChange = (selectedOption) => {
    let data = [];
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;
    console.log(selectedValue);
    data.push(selectedValue);

    const changeEvent = {
      target: {
        name: name,
        value: values
      }
    };
    field.onChange(changeEvent);
  }

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
        value={values}
        onChange={handleChange}
        isMulti={isMulti}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        className={showError ? 'is-invalid' : ''}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectedMutil;