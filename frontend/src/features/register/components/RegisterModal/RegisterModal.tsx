import React from 'react'
import { Modal } from '../../../../components/Modal/Modal'
import { RegisterStepCounter } from '../RegisterStepCounter/RegisterStepCounter';

import './RegisterModal.css';

export const RegisterModal:React.FC = () => {
  return (
    // <div className="register-modal">
      <Modal>
        <div className="register-container">
          <RegisterStepCounter step={6}/>
        </div>
      </Modal> 
  )
}
