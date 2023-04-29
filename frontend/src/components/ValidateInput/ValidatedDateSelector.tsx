import React, { useState, useEffect} from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determineValidatedSelectStyle } from "../../utils/DetermineStylesUtil";

import './ValidatedInput.css'
import { ExpandMoreRounded } from "@mui/icons-material";

interface ValidatedDateSelectorProps{
    style:string;
    valid:boolean;
    name:string;
    dropDown():JSX.Element[],
    dispatcher(name:string, value:string|number|boolean):void;
    data?:number;
}

export const ValidatedDateSelector:React.FC <ValidatedDateSelectorProps> =({style, valid, name, dropDown, dispatcher, data})=> {

    const [active, setActive]= useState<boolean>(false);
    const [value, setValue]= useState<number>(0);
    const [color,setColor]= useState<string> ('gray');

    const changeValue= (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setValue(+e.target.value)
        console.log("Dispatch this change to a reducer")
        console.log("value: ",  e.target.value);
        dispatcher(name.toLowerCase(), +e.target.value);
    }

    const toggleActive= (e:React.FocusEvent<HTMLSelectElement>)=> {
        setActive(!active);
    }

    useEffect(()=>{
        setColor(determineValidatedSelectStyle(active,valid));
    }, [active,valid,value])
    
    return (
        <div className='validated-input'>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputLabel color={color} active={active} valid={valid}>
                    {name}
                    <ExpandMoreRounded sx={{
                        fontsize:34,
                        color: active ? "#1da1f2" : "#657786",
                        position: "absolute",
                        right: "15px",
                        top: "35%"
                    }}
                    />
                </StyledInputLabel>
                <select className="validated-input-value validated-date-selector" onChange={changeValue} onFocus={toggleActive} onBlur={toggleActive} value={data}>
                    {dropDown()}
                </select>
            </StyledInputBox>
        </div>
    )
}