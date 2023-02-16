import './Home.css';
import SearchGrid from './SearchGrid';
import Select from './Select';
import React, { useState } from 'react';

function Search() {

    const [ formValues, setFormValues] = useState({firtstName:"", lastName:"", dob:"", ssn:"", gender:"", address:"", zip:""});

    const handleSubmit = (event) => {
        alert('A name was submitted: ');
        event.preventDefault();
    }

    const genderOptions = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'Other', value: 'other' }]

    function handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({...formValues, [name]: value.trim()}); 
    }
    return (   
        <>                         
        <div className="border-box">
            <form onSubmit={handleSubmit}>
                <div className="form-header">Patient Search</div>
                <div className="form-fields-class">
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="firstName">First Name<span className="req">*</span></label>
                            <input id="name" type="text" name="firstName" placeholder="First Name" onChange={(event) => handleUserInput(event)} maxLength={100}></input>                           
                        </span>
                        <span>
                            <label htmlFor="lastName">Last Name<span className="req">*</span></label>
                            <input id="name" type="text" name="lastName" placeholder="Last Name" onChange={(event) => handleUserInput(event)} maxLength={100}></input>
                        </span>
                    </div>
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="dob">DOB<span className="req">*</span></label>
                            <input id="dob" type="date" name="dob" placeholder="DD-MM-YYYY" onChange={(event) => handleUserInput(event)} max={new Date().toISOString().split("T")[0]}></input>
                        </span>
                        <span>
                            <label htmlFor="ssn">SSN<span className="req">*</span></label>
                            <input id="ssn" type="number" name="ssn" placeholder="SSN" onChange={(event) => handleUserInput(event)}></input>
                        </span>
                    </div>
                    <div className="fieldRowsGender">
                        <span>
                            <label htmlFor="gender">Gender<span className="req">*</span></label>
                            <Select options={genderOptions} handleInput ={handleUserInput} name="gender" id="gender"/>
                        </span>
                    </div>
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="address">Address</label>
                            <input id="address" type="text" name="address" placeholder="Address" disabled={!formValues.firstName || !formValues.lastName || !formValues.dob || !formValues.ssn || !formValues.gender} onChange={(event) => handleUserInput(event)}></input>
                        </span>
                        <span>
                            <label htmlFor="zip">Zip</label>
                            <input id="zip" type="text" name="zip" placeholder="Zip" disabled={!formValues.firstName || !formValues.lastName || !formValues.dob || !formValues.ssn || !formValues.gender} onChange={(event) => handleUserInput(event)}></input>
                        </span>
                    </div>
                </div>
                <div>
                    <button type="button" disabled={!formValues.firstName || !formValues.lastName || !formValues.dob || !formValues.ssn || !formValues.gender}>Search Patient</button>
                </div>
            </form>
        </div>
        <div>
            <SearchGrid />
        </div>
        </>  
    );
}

export default Search;
