import React, { useState, useEffect } from "react";
import "../Settings.css";
import { Checkbox, FormGroup, Button } from "@material-ui/core";
import UserConsumer from "../../../../logic/UserConsumer";

const Preference = (props) => {
  return (
    <div className="preference">
      <CheckBoxForm user={props.user} actions={props.actions} />
    </div>
  );
};

const CheckBox = ({ value, isClicked, checked }) => {
  return (
    <label>
      <Checkbox color="primary" onChange={isClicked} checked={checked} />
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
  const [mounted, setMounted] = useState(false);

  const GenerateCheckBox = () => {
    return selectedOptions.map((option, index) => (
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

    //console.log(optionsArr);
  };

  useEffect(() => {
    user.preferences = updatePreferencesFromCheckboxValues();
    if (!mounted) {
      setMounted(true);
    } else {
      props.actions.onUpdatePreferences(user).then((result) => {
        if (!result) {
          alert("could not save user info");
        }
      });
    }
  }, [selectedOptions]);

  const updatePreferencesFromCheckboxValues = () => {
    const returnObject = {
      construction: selectedOptions[0].clicked,
      it: selectedOptions[1].clicked,
      finance: selectedOptions[2].clicked,
      medicin: selectedOptions[3].clicked,
      currency: selectedOptions[4].clicked,
    };
    return returnObject;
  };

  const handleSubmit = (e) => {
    // if (!mounted) {
    //   setMounted(true);
    // } else {
    //   props.actions.onUpdatePreferences(selectedOptions).then((result) => {
    //     if (!result) {
    //       alert("could not save user info");
    //     }
    //   });
    // }
  };

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
