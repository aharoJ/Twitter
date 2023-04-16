import React from 'react'

import { displayIcon } from '../../utils/RegisterStepUtils';

import './RegisterStepCounter.css'

interface RegisterStepProps{
    step: number;
}

export const RegisterStepCounter:React.FC<RegisterStepProps> = ({step}) => {
  return ( 
    <div className="reg-step-counter-container">
        <div className="reg-step-counter-btn">
            {/* NEED to write this method in a utils */}
            {displayIcon(step)}
        </div>
        <span className="reg-step-number"> Step {step} of 6 </span>
    </div>
  )
}

