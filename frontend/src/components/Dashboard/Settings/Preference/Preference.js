import React, { useState } from "react";
import "../Settings.css";
import { Checkbox, FormGroup, Button } from "@material-ui/core";
import UserConsumer from "../../../../logic/UserConsumer";

const Preference = (props) => {
  return (
    <div className="preference">
      <CheckBoxForm user={props.user} />
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



const CheckBoxForm = (props) => {
  const user = props.user;
  const options = [
    { name: "Construction", clicked: user.preferences.construction },
    { name: "IT", clicked: user.preferences.it },
    { name: "Finance", clicked: user.preferences.finance },
    { name: "Medicine", clicked: user.preferences.medicin },
    { name: "Currency", clicked: user.preferences.currency },
  ];
  const [selectedOptions, setSelectedOptions] = useState(options);

  const GenerateCheckBox = () => {
    return options.map((option, index) => (
      <CheckBox
        key={index}
        isClicked={() => checked(index)}
        checked={option.clicked}
        value={option.name}
      />
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

export default UserConsumer(Preference);
