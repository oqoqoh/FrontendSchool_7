import React, { useState } from 'react';
import useInput from '../Hooks/useinput';

function InputComponent() {
    const [value, onChange] = useInput;

    return (
        <>
            <input type="text" onChange={onChange} />
            <div>{value}</div>
        </>
    );
}

export default InputComponent;
