import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dob } from "../../utils/GlobalInterfaces";

interface RegisterSliceState{
    loading: boolean;
    error: boolean;
    firstName:string;
    firstNameValid: boolean;
    lastName: string;
    lastNameValud:boolean;
    email: string;
    emailValid: boolean;
    dob: Dob;
    dobValud: boolean;
}

interface updatePayLoad{
    name: string;
    value: string | number | boolean;
}

const 