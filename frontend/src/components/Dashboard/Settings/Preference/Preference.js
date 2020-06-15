import React, { useState } from "react";
import '../Settings.css';
import { Checkbox, TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";


const Preference = () => {
    return (
        <div className='preference'>
        <CheckBox />
        </div>
    )
}


const CheckBox = () => {
    const [state, setState] = useState({
        optionA: true,
        optionB: true,
        optionC: true,
        optionD: true,
    });
    const [option, setOptions] = useState([]);

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.checked });
    };

    return (
        <div className='form-content'>
            <form onSubmit={(e) => handleChange()}>
                <label>
                Option 1
                <Checkbox 
                    type='checkbox'
                    id='optionA'
                    value={1}
                />
                </label>
                <label>
                Option 2
                <Checkbox 
                    type='checkbox'
                    id='optionB'
                    value={2}
                />
                </label>
                <label>
                Option 3
                <Checkbox 
                    type='checkbox'
                    id='optionC'
                    value={3}
                />
                </label>
                <label>
                Option 4
                <Checkbox 
                    type='checkbox'
                    id='optionD'
                    value={4}
                />
                </label>
                <div>
                <Button type="submit" value="submit" className="save">
                Save
                </Button>
                </div>
            </form>
        </div>
    );
};


export default Preference;