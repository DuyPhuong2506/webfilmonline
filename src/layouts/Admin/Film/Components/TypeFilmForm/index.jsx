import PropTypes from 'prop-types';
import React, { useState} from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';


TypeFilmForm.propTypes = {
  onSubmit: PropTypes.func,
};

TypeFilmForm.defaultProps = {
  onSubmit: null,
}

function TypeFilmForm(props) {
    const {  isAddMode ,dataList ,onSubmit} = props;

    const [values , setValues] = useState([]);

    const handleChange = values => {
        setValues(values);
      };
  // npm i --save react-select
  const handleClickForm = () => {
    if(onSubmit){
        onSubmit(values);
    }

  }
  return (
    <div className="styleWidth">
        <FormGroup>
            <Label for="typefilm">Nhập Loại Film</Label>
            <Select
        
                    value={values}
                    onChange={handleChange}
                    isMulti
                    placeholder="Nhap vào đây...."
                    options={dataList.map((option) => ({
                        value: option.id,
                        label: option.name
                    }))}
                />

            <div className="mt-4">
              <FormGroup>
                <Button type="submit" color={isAddMode ? 'primary' : 'success'}
                    onClick={handleClickForm}
                >
                Add
                </Button>
              </FormGroup>
            </div>
        </FormGroup>
            
    </div>
  );
}

export default TypeFilmForm;