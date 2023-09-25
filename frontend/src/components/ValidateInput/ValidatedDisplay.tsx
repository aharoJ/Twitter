import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/Store";
import { updateRegister } from "../../redux/Slices/RegisterSlice";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";

import './ValidatedInput.css';

interface ValidatedDisplayProps{
    label:string;
    value:string;
}

export const ValidatedDisplay:React.FC<ValidatedDisplayProps> = ({label, value}) => {

    const [focused, setFocused]= useState<boolean>(false);

    const dispatch:AppDispatch= useDispatch();

    const focus= ()=>{
        setFocused(!focused);

        dispatch(updateRegister({
            name: "step",
            value: 1
        }));
    }

    return (
        <div className="validated-input">
            <StyledInputBox active={false} valid={true}>
                <StyledInputLabel color={focused ? "blue" : "gray"} active={!focused} valid={true}>
                    {label}
                </StyledInputLabel>
                <input className="validated-input-value" onFocus={focus} value={value}/>
            </StyledInputBox>
        </div>
    )    
}