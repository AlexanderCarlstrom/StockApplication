import React, { useState } from 'react';
import '../Settings.css';
import { Checkbox, FormGroup, Button } from '@material-ui/core';

const Preference = () => {
  return (
    <div className="preference">
      <CheckBoxForm />
    </div>
  );
};

const CheckBox = ({ value, isClicked, checked }) => {
  return (
    <label>
      <Checkbox onChange={isClicked} checked={checked} />
      {value}
    </label>
  );
};

const CheckBoxForm = () => {
  const options = [
    { name: 'Finans', clicked: true },
    { name: 'Trees', clicked: true },
    { name: 'Industri', clicked: false },
  ];

  const [selectedOptions, setSelectedOptions] = useState(options);

  const GenerateCheckBox = () => {
    return selectedOptions.map((option, index) => (
      <CheckBox key={index} isClicked={() => checked(index)} checked={option.clicked} value={option.name} />
    ));
  };

  const checked = (index) => {
    let optionsArr = [...selectedOptions];
    optionsArr[index].clicked = !optionsArr[index].clicked;
    setSelectedOptions(optionsArr);

    console.log(optionsArr);
  };

  const handleSubmit = (e) => {};

  return (
    <div className="form-content">
      <FormGroup onSubmit={handleSubmit}>
        <GenerateCheckBox />
        <div>
          <Button type="submit" value="submit" className="save">
            Save
          </Button>
        </div>
      </FormGroup>
    </div>
  );
};

export default Preference;
