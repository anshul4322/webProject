import React from "react";

function Select(props) {
    const { options, handleInput, name, id } = props;
    return (
        <select name={name} id={id} onChange={(event) => handleInput(event)}>
            <option value="none" selected disabled hidden>Select</option>
            {options && options.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
            ))
            }
        </select>
    );
}

export default Select;
