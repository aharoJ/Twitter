import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store';

import './RegisterFormOne.css';
import { RegisterDateInput } from '../components/RegisterDateInput/RegisterDateInput';
import { RegisterNameInputs } from '../components/RegisterNameInput/RegisterNameInputs';
import { RegisterEmailInput } from '../components/RegisterEmalInput/RegisterEmailInput';
import { StyledNextButton } from '../components/RegisterNextButton/RegisterNextButton';

interface FormOneState{
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
}

export const RegisterFormOne:React.FC = () => 
{

    const registerState= useSelector((state:RootState) => state.register);

    const [buttonActive, setButtonActive]= useState<boolean>(false);


    useEffect(()=> {

        if (registerState.dobValid && registerState.emailValid && registerState.firstNameValid && registerState.lastNameValid){
        setButtonActive(true);
        } else{
            setButtonActive(false); 
        }

    }, [registerState])

  return (
    <div className="reg-step-one-container">
        <div className="reg-step-one-container">
            <RegisterNameInputs />
            <RegisterEmailInput/>
            <RegisterDateInput /> 
        </div>
        <StyledNextButton 
            disabled={!buttonActive}
            color={"black"}
            active={buttonActive}
            onClick={()=> console.log(" Go to the next page")} >
                Next
            </StyledNextButton>
    </div>
  )
}
