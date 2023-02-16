import './Home.css';
import Select from './Select';
import React, { useState, setState } from 'react';

function Home() {

    // const initialState = {
    //     firstName: "",
    //     lastName: "",
    //     gender: "",
    //     dob: "",
    //     race: "",
    //     ethenticity: "",
    //     carrierName: "",
    //     memberId: "",
    //     groupName: "",
    //     relationship: "",
    // }

    const [ formValues, setFormValues] = useState({});
    const [ isFormValid, setIsFormValid ] = useState(false);

    const handleSubmit = (event) => {
        alert('A name was submitted: ');
        event.preventDefault();
    }

    function handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({...formValues, [name]: value.trim()});
      }
      console.log("formValues: ", formValues);

    const genderOptions = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]
    const raceOptions = [{ label: 'race1', value: 'race1' }, { label: 'race2', value: 'race2' }];
    const ethenticityOptions = [{ label: 'ethenticity1', value: 'ethenticity1' }, { label: 'ethenticity2', value: 'ethenticity2' }];
    const carrierNameOptions = [{ label: 'carrierName1', value: 'carrierName1' }, { label: 'carrierName2', value: 'carrierName2' }];
    const relationshipOptions = [{ label: 'Single', value: 'single' }, { label: 'Married', value: 'Married' }];

    return (
        <div className="border-box">
            <form onSubmit={handleSubmit}>
                <div className="form-header">Patient Information</div>
                <div className="form-fields-class">
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="firstName">First Name<span className="req">*</span></label>
                            <input id="name" type="text" name="firstName" placeholder="First Name" onChange={(event) => handleUserInput(event)}></input>
                        </span>
                        <span>
                            <label htmlFor="lastName">Last Name<span className="req">*</span></label>
                            <input id="name" type="text" name="lastName" placeholder="Last Name" onChange={(event) => handleUserInput(event)}></input>
                        </span>
                    </div>
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="gender">Gender<span className="req">*</span></label>
                            <Select options={genderOptions} handleInput ={handleUserInput} name="gender" id="gender"/>
                        </span>
                        <span>
                            <label htmlFor="dob">DOB<span className="req">*</span></label>
                            <input id="dob" type="date" name="dob" placeholder="MM/DD/YYYY" onChange={(event) => handleUserInput(event)}></input>
                        </span>
                    </div>
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="race">Race<span className="req">*</span></label>
                            <Select options={raceOptions} handleInput ={handleUserInput} name="race" id="race"/>
                        </span>
                        <span>
                            <label htmlFor="ethenticity">Ethenticity</label>
                            <Select options={ethenticityOptions} handleInput ={handleUserInput} name="ethenticity" id="ethenticity"/>
                        </span>
                    </div>
                </div>
                <div className="form-header">Patient Insurance Information</div>
                <div className="form-fields-class">
                    <div className="carrierClass">
                        <span>
                            <label htmlFor="carrierName">Carrier Name<span className="req">*</span></label>
                            <Select options={carrierNameOptions} handleInput ={handleUserInput} name="carrierName" id="carrierName"/>
                        </span>
                    </div>
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="memberId">Member ID<span className="req">*</span></label>
                            <input id="memberId" type="text" name="memberId" placeholder="Member ID" onChange={(event) => handleUserInput(event)}></input>
                        </span>
                        <span>
                            <label htmlFor="groupNumber">Group Number</label>
                            <input id="groupNumber" type="text" name="groupNumber" placeholder="Group Number" onChange={(event) => handleUserInput(event)}></input>
                        </span>
                    </div>
                    <div className="carrierClass">
                        <span>
                            <label htmlFor="relationship">Relationship</label>
                            <Select options={relationshipOptions} handleInput ={handleUserInput} name="relationship" id="relationship"/>
                        </span>
                    </div>
                    <div>
                    <button type="button" disabled={!isFormValid}>Validate Insurance</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Home;
