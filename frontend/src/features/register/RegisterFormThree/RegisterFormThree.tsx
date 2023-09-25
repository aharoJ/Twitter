import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import { stringifyDate } from "../../../utils/DateUtils";
import { ValidatedDisplay } from '../../../components/ValidateInput/ValidatedDisplay';
import { StyledNextButton } from "../components/RegisterNextButton/RegisterNextButton";

import './RegisterFormThree.css'

export const RegisterFormThree:React.FC=()=>{
    
    const state = useSelector((state:RootState)=> state.register)
    return(
        <div className="reg-step-three-container">
            <div className="reg-step-three-content">
                <h1 className="reg-step-three-header"> Create your account</h1>
                
                <div className="reg-step-three-value">
                    <ValidatedDisplay label={"Name"} value={` ${state.firstName} ${state.lastName}` }/>
                </div>
                
                <div className="reg-step-three-value">
                    <ValidatedDisplay label={"Email"} value={state.email}/>
                </div>
                
                <div className="reg-step-three-value">
                    <ValidatedDisplay label={"Birth Date"} value={stringifyDate(state.dob)}/>
                </div>
                <p className="reg-step-three-policy">
                    By Signing up you agree <span className="reg-step-three-link"> Terms of Service</span> and 
                    <span className="reg-step-three-link"> Privacy Policy </span>, including <span className="reg-step-three-link"> Cookie Use </span> Twitter may use your contact information, inclduing your email adddress and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services including ads.<span className="reg-step-three-link"> Learn more </span>. Others will be able to find you by email or phone number, when provided unless you choose otherwise. <span className="reg-step-three-link"> here </span>.
                </p>
            </div>

            <StyledNextButton onClick={()=>{alert("signing up")}} color={"blue"} active={true}> 
                Sign Up
            </StyledNextButton>

        </div>
    
    )
}