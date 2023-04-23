import { StyledInputProps, ValidatedInputState } from "./GlobalInterfaces";

export const determineStyledInputBorder= (props: StyledInputProps):string => {
    let {active,valid,theme}= props;
    
    if (!active && valid){
        return `1px solid ${theme.colors.lightGray}`;
    }

    if(!active && !valid ){
        return `1px solid ${theme.colors.error}`;
    }

    if (active && valid){
        return `2px solid ${theme.colors.blue}`;
    }

    if (active && !valid){
        return `2px solid ${theme.colors.error}`;
    }

    return "";
}

export const determineLabelColor= (props: StyledInputProps): string=> {
    let {active, valid, theme, color}= props;

    if (color && color === "error"){
        return theme.colors.error;
    }

    if (color && color === "blue"){
        return theme.colors.blue;
    }

    return theme.colors.lightGray;
}

export const determineValidatedStyles= (state:ValidatedInputState, validator: (value:string) => boolean ): ValidatedInputState => {
    
    let {valid, active, typedIn, value, labelColor, labelActive}= state;

    if (typedIn){
        valid= validator(value);
        //valid = validator(value.toString()); // convert to string primitive using toString()

        if (active && valid){
            labelActive= true;
            labelColor= "blue";
        }

        if(active && !valid){
            labelActive= true;
            labelColor= "error";
        }

        if (!active && valid){
            labelActive= true
            labelColor= 'gray';
        }

        if(!active && !valid){
            labelActive= false;
            labelColor= "gray";
        }
    } else{
        if(active){
            labelActive= true;
            labelColor= "blue";
        } else{
            labelActive= false;
            labelColor= 'gray';
        }
    }

    state= {
        ...state,
        valid,
        labelActive,
        labelColor
    };

    return state;
}

export const determineValidatedSelectStyle= (active:boolean, valid:boolean):string => {
    if (!valid){
        return "error";
    }

    if(active){
        return "blue";
    }

    return "gray";
}