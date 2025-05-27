import React, { useState } from 'react';
import useInput from './Hook/useInput';

function InputComponent() {
    // const [value, setValue] = useState('');
    // function changeText(e) {
    //     setValue(e.target.value);
    // }
    const [value, changeText] = useInput('');
    
    return (
        <>
            <input type="text" onChange={changeText}/>
            <div>
                {value}
            </div>
        </>
    )
}

export default InputComponent;