import React from 'react'

import { displayIcon, iconClass } from '../../utils/RegisterStepUtils';

import './RegisterStepCounter.css'

interface RegisterStepProps{
    step: number;
    changeStep(): void
}

export const RegisterStepCounter:React.FC<RegisterStepProps> = ({step, changeStep}) => 
{
  return ( 
    <div className="reg-step-counter-container">
        <div className={iconClass(step)} onClick={changeStep}>
            {/* NEED to write this method in a utils */}
            {displayIcon(step)}
        </div>
        <span className="reg-step-number"> Step {step} of 6 </span>
    </div>
  )
}

