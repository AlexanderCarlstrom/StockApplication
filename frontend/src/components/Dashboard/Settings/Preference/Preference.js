import React, { useState } from "react";
import '../Settings.css';
import { Checkbox, TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";


const Preference = () => {
    return (
        <div className='preference'>
        <CheckBoxForm />
        </div>
    )
}

const CheckBox = ({value, isClicked}) => {
    return (
        <label>
            {value}
            <Checkbox
                onClick={isClicked}
            />
        </label>
    )
}

const CheckBoxForm = (props) => {

    const options = 'Brödrost Industri Skog Slev Kastrull'.split(' ');

    const GenerateCheckBox = () => {
        return options.map((option, index) => (
            <CheckBox key={index}
                isClicked={() => checked(index)}
                value={option}
            />
        ));
    };

    const checked = (index) => {

    }

    return (
        <div className='form-content'>
            <form>
            <GenerateCheckBox />
            <div>
            <Button type="submit" value="submit" className="save">
            Save
            </Button>
            </div>
            </form>
        </div>
    )

}


export default Preference;