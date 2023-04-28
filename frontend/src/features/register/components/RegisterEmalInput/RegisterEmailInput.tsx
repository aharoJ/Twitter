import React, {useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/Store";
import { updateRegister } from "../../../../redux/Slices/RegisterSlice";
import { validateEmail } from "../../../../services/Validators";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";

export const RegisterEmailInput:React.FC=()=> {
    const [validEmail, setValidEmail]= useState<boolean>(true);

    const dispatch:AppDispatch= useDispatch();

    const updateEmail= (e:React.ChangeEvent<HTMLInputElement>):void =>{
        dispatch(updateRegister({
            name:"email",
            value: e.target.value
        }));

        let valid= validateEmail(e.target.value);
        setValidEmail(valid);

        dispatch(updateRegister({
            name: "emailValid",
            value: valid
        }));
    }

    return (
        <div className="register-email-input">
            <ValidatedTextInput valid={validEmail} label={"Email"} name={"email"} changeValue={updateEmail}/>
        </div>

    )
}