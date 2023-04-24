import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dob } from "../../utils/GlobalInterfaces";

interface RegisterSliceState{
    loading: boolean;
    error: boolean;
    firstName:string;
    firstNameValid: boolean;
    lastName: string;
    lastNameValid:boolean;
    email: string;
    emailValid: boolean;
    dob: Dob;
    dobValid: boolean;
}

interface UpdatePayLoad{
    name: string;
    value: string | number | boolean;
}

const initialState: RegisterSliceState= {
    loading: false,
    error: false,
    firstName: '',
    firstNameValid: false,
    lastName: '',
    lastNameValid: false,
    email: '',
    emailValid: false,
    dob: {
        day: 0,
        month: 0,
        year:0
    },
    dobValid: false
}

export const RegisterSlice= createSlice({
    name:"register",
    initialState,
    reducers:{
        updateRegister(state, action:PayloadAction<UpdatePayLoad>){
            let {name, value} = action.payload;

            if(name === 'month' || name === 'day' || name === 'year'){
                let dob= state.dob;

                dob= {
                    ...dob,
                    [name]:value
                }

                state = {
                    ...state,
                    dob
                };
            }  else{
                state = {
                    ...state,
                    [name]:value
                }
            }

            console.log("Updating the global register state: ", state);

            return state;
        }
    }
});

export const {updateRegister}= RegisterSlice.actions;

export default RegisterSlice.reducer;