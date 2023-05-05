import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/Store';
import { incrementStep } from '../../../redux/Slices/RegisterSlice';

import './RegisterFormOne.css';
import { RegisterDateInput } from '../components/RegisterDateInput/RegisterDateInput';
import { RegisterNameInputs } from '../components/RegisterNameInput/RegisterNameInputs';
import { RegisterEmailInput } from '../components/RegisterEmalInput/RegisterEmailInput';
import { StyledNextButton } from '../components/RegisterNextButton/RegisterNextButton';

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
            <h1 className="reg-step-one-header">Create your account</h1>
            <RegisterNameInputs firstName={registerState.firstName} lastName={registerState.lastName}/>
            <RegisterEmailInput email={registerState.email}/>
            <div className="reg-step-one-dob-disclaimer">
                <p className="reg-step-one-dob-header"> Date of birth</p>
                <span className="reg-step-one-dob-text">
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, pet, or somethign else.
                </span>
            </div>
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
