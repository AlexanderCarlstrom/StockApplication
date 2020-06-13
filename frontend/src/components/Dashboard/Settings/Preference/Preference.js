import React, { useState } from "react";
import './Preference.css';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Preference = () => (
            <div className='preference'>
            <CheckBox />
            </div>
        );

const CheckBox = () => {
    const [state, setState] = useState({
        optionA: true,
        optionB: true,
        optionC: true,
        optionD: true,
    });

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.checked });
    };

    return (
        <div>
            <form onSubmit={(e) => handleChange()}>
                <label>
                Option 1
                <Checkbox 
                    type='checkbox'
                    id='optionA'
                    value={state.optionA}
                />
                </label>
                <label>
                Option 2
                <Checkbox 
                    type='checkbox'
                    id='optionB'
                    value={state.optionB}
                />
                </label>
                <label>
                Option 3
                <Checkbox 
                    type='checkbox'
                    id='optionC'
                    value={state.optionC}
                />
                </label>
                <label>
                Option 4
                <Checkbox 
                    type='checkbox'
                    id='optionD'
                    value={state.optionD}
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