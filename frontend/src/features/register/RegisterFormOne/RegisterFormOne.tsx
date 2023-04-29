import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/Store';
import { incrementStep } from '../../../redux/Slices/RegisterSlice';

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
    const dispatch:AppDispatch= useDispatch();

    const [buttonActive, setButtonActive]= useState<boolean>(false);

    const nextPage= ()=>{
        dispatch(incrementStep());
    }


    useEffect(()=> {

        if (registerState.dobValid && registerState.emailValid && registerState.firstNameValid && registerState.lastNameValid){
        setButtonActive(true);
        } else{
            setButtonActive(false); 
        }

    }, [registerState])

  return (
    <div className="reg-step-one-container">
        <div className="reg-step-one-content">
            <RegisterNameInputs firstName={registerState.firstName} lastName={registerState.lastName}/>
            <RegisterEmailInput email={registerState.email}/>
            <RegisterDateInput date={registerState.dob}/> 
        </div>
        <StyledNextButton 
            disabled={!buttonActive}
            color={"black"}
            active={buttonActive}
            onClick={nextPage} >
                Next
            </StyledNextButton>
    </div>
  )
}
