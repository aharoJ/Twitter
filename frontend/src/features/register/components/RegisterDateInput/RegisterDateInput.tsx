import React from 'react';
import { ValidatedDateSelector } from '../../../../components/ValidateInput/ValidatedDateSelector';
import { getMonths, getDays, getYears } from '../../../../utils/DateUtils';
export const RegisterDateInput:React.FC=() =>{
    return (
        <div className='register-date'>
            <ValidatedDateSelector
                style={"validated-month"}
                valid={true}
                name={"Month"}
                dropDown={getMonths}
            />
            <ValidatedDateSelector
                style={"validated-day"}
                valid={true}
                name={"Day"}
                dropDown={getDays}
            />
            <ValidatedDateSelector
                style={"validated-year"}
                valid={true}
                name={"Year"}
                dropDown={getYears}
            />
            
        </div>
    )
}