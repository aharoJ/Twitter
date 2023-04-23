import React, { useState, useEffect} from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determineValidatedSelectStyle } from "../../utils/DetermineStylesUtil";

interface ValidatedDateSelectorProps{
    style:string;
    valid:boolean;
    name:string;
    dropDown():JSX.Element[]
}

export const ValidatedDateSelector:React.FC <ValidatedDateSelectorProps> =({style, valid, name, dropDown})=> {

    const [active, setActive]= useState<boolean>(false);
    const [value, setValue]= useState<number>(0);
    const [color,setColor]= useState<string> ('gray');

    const changeValue= (e:React.ChangeEvent<HTMLSelectElement>)=>{
        console.log("Dispatch this change to a reducer")
        console.log("value: ",  e.target.value);
        setValue(+e.target.value)
    }

    const toggleActive= (e:React.FocusEvent<HTMLSelectElement>)=> {
        setActive(!active);
    }

    useEffect(()=>{
        setColor(determineValidatedSelectStyle(active,valid));
    }, [active,valid,value])
    
    return (
        <div className={style}>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputLabel color={color} active={active} valid={valid}>
                    {name}
                </StyledInputLabel>
                <select onChange={changeValue} onFocus={toggleActive} onBlur={toggleActive}>
                    {dropDown()}
                </select>
            </StyledInputBox>
        </div>
    )
}