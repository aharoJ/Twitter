import React, {useState} from 'react'
import { Modal } from '../../../../components/Modal/Modal'
import { RegisterStepCounter } from '../RegisterStepCounter/RegisterStepCounter';
import { determineModalContent } from '../../utils/RegisterModalUtil';

import './RegisterModal.css';

export const RegisterModal:React.FC = () => {
  
  const [step,setStep]= useState<number>(3);

  const stepButtonClicked= ()=> {
    step === 1 || step >=6 ? setStep(step): setStep(step - 1);
  }
 
  return (
      <Modal>
        <div className="register-container">
          <RegisterStepCounter step={step} changeStep={stepButtonClicked}/>
          <div className="register-modal-content">
            {/* Swap Component Based on the step*/}
            {determineModalContent(step)}
          </div>

        </div>
      </Modal> 
  )
}
