import React, {useState} from "react";
import { StyledCheckbox, StyledCheckboxBackground} from "./StyledCheckbox";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

export const CheckBox:React.FC=() => {
    const [clicked, setClicked]= useState<boolean>(false);

    const toggleCheckbox=()=> {
        setClicked(!clicked);
    }

    return (
        <StyledCheckboxBackground active={clicked} onClick={toggleCheckbox}>
            <StyledCheckbox active={clicked}>
                {clicked ? 
                    <CheckRoundedIcon sx={{
                        fontSize: 18,
                        color: "white"
                    }}/>
                    : <></>
                }
            </StyledCheckbox>
        </StyledCheckboxBackground>
    )
}