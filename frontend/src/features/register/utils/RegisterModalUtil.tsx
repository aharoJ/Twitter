import { RegisterFormOne } from "../RegisterFormOne/RegisterFormOne"
import { RegisterFormTwo } from "../RegisterFormTwo/RegisterFormTwo"
import { RegisterFormThree } from "../RegisterFormThree/RegisterFormThree"
export const determineModalContent= (step: number):JSX.Element =>
{
    switch(step){
        case 1:
            return <RegisterFormOne/>
        case 2:
            return <RegisterFormTwo/>
        case 3:
            return <RegisterFormThree/>
        case 4:
            return <span> Registradtion Step 4</span>
        case 5:
            return <span> Registradtion Step 5</span>
        case 6:
            return <span> Registradtion Step 6</span>
        default:
            return <></>
    }

}




