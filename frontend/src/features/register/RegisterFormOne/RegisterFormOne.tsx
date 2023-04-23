import React, { useState, useEffect } from 'react'

import { validateName } from '../../../services/Validators';

import { ValidatedInput } from '../../../components/ValidateInput/ValidatedInput';

import './RegisterFormOne.css';
import { Label } from '@mui/icons-material';
import { RegisterDateInput } from '../components/RegisterDateInput/RegisterDateInput';

interface FormOneState{
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
}

export const RegisterFormOne:React.FC = () => 
{

    const [stepOneState, setStepOneState]= useState<FormOneState>({
        firstName:"",
        lastName:"",
        email:"",
        dateOfBirth:""
    });

    const updateUser= (e:React.ChangeEvent<HTMLInputElement>): void =>{
        setStepOneState({...stepOneState, [e.target.name]: e.target.value});
    }

    useEffect(()=> {
        console.log("state change: ", stepOneState);
    }, [stepOneState])

  return (
    <div className="reg-step-one-container">
        <div className="reg-step-one-container">
            <ValidatedInput name={"firstName"} label={"First"} 
                errorMessage='Whats your name?'
                changeValue={updateUser}
                validator={validateName} 
            />
            <ValidatedInput name={"lastName"} label={"Last"} 
                errorMessage='Whats your name?'
                changeValue={updateUser}
                validator={validateName} 
            />
            <ValidatedInput name={"email"} label={"email"} 
                errorMessage='Please enter a valid email.'
                changeValue={updateUser}
                validator={()=> true} 
            />
            <RegisterDateInput />
        </div>
    </div>
  )
}
