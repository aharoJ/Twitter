import { TurnedIn } from "@mui/icons-material";
import { Dob } from "../utils/GlobalInterfaces";

export const validateName= (value:string): boolean => {
    return value !== "";
}

export const validateDob= (dob:Dob):boolean =>{

    let {month, day, year}= dob;

    let leapYears:number[]= [];

    for (let i=2022; i > 1902; i-=4){
        leapYears.push(i);
    }

    if (!month || !day || !year){
        return false; // we dont validate if one is NOT filled out 
    } else if (month===2 && day >29){
        return false;
    } else if (month===2 && day === 29 && !leapYears.includes(year)){
        return false;
    } else if ((month===4 || month === 6 || month===9 || month===11) && day > 30 ){
        return false;
    }

    return checkAge(dob);  

}

const checkAge = (dob:Dob): boolean=>{
    
    let {month,day,year}= dob;

    let today= new Date();
    let todaysYear= today.getFullYear();
    let todaysMonth= today.getMonth();
    let todaysDay= today.getDate();

    if (todaysYear - year > 13){
        return true;
    }
    
    else if(todaysYear - year === 13){

        if (todaysMonth > month){
            return true;
        }

        else if(todaysMonth === month){
            if (todaysDay >= day){
                return true;
            } else{
                return false;
            }
        }
    }

    return false;
}
// I need to UPDATE THIS Regex... I have requested the regex... status --> pending [32]
export const validateEmail= (value:string):boolean =>{
    if (!value.toLocaleUpperCase().match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )){
        return false;
    }

    return true;
}