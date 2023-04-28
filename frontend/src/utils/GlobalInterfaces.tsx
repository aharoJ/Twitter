interface ThemeColors{
    blue: string;
    black: string;
    darkGray: string;
    lightGray: string;
    offWhite: string;
    white: string;
    error: string;
}

export interface Theme{
    colors: ThemeColors
}

export interface StyledInputProps {
    active: boolean,
    valid: boolean,
    theme: Theme;
    color?:string;
}

export interface ValidatedInputState{
    active: boolean;
    valid: boolean;
    typedIn: boolean;
    labelActive: boolean;
    labelColor:string;
    value:string;
}

export interface Dob{
    month: number;
    day: number;
    year: number;
}

export interface StyledNextButtonProps {
    active: boolean;
    theme: Theme;
    color: string;

}