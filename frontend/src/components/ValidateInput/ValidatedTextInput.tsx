import React, {useEffect, useState} from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determineValidatedTextLabel } from "../../utils/DetermineStylesUtil";

import './ValidatedInput.css';

interface ValidatedInputProps{
    valid: boolean;
    name:string;
    label:string;
    changeValue(e:React.ChangeEvent<HTMLInputElement>):void;
    data?:string
    attributes?: Record<string, string | number | boolean>
}

export const ValidatedTextInput:React.FC<ValidatedInputProps>= ({valid, name, label, changeValue, data, attributes})=>{ // this is a component?

    const [value, setValue]= useState<string>(data ? data : '');
    const [borderActive, setBorderActive]= useState<boolean>(false);
    const [labelActive, setLabelActive]= useState<boolean>(false);
    const [color, setColor]= useState<string>('gray');
    
    const focus=():void => {
        setBorderActive(!borderActive);
        if (!value){
            setLabelActive(!labelActive);
        }
    }

    const update= (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setValue(e.target.value);
        console.log("send the info back to the dispatcher");
        changeValue(e);
    }

    useEffect(()=>{

        if(value && !labelActive){
            setLabelActive(true);
        }

        setColor(determineValidatedTextLabel(borderActive,valid))

    }, [valid, value, borderActive, labelActive, color])
    
    return(
        <div className="validated-input">
            <StyledInputBox active={borderActive} valid={valid}>
                <StyledInputLabel color={color} active={labelActive}
                    valid={valid}>{label}
                </StyledInputLabel>
                <input className="validated-input-value"
                    name={name}
                    onFocus={focus}
                    onBlur={focus}
                    onChange={update}
                    value={data}
                    {...attributes}
                />
                {attributes && attributes.maxLength && (borderActive || !valid)
                ? <span className="validated-input-remainder">{value.length} / {attributes.maxLength}</span>
                : <></>
                }
            </StyledInputBox>
        </div>
    )
}
