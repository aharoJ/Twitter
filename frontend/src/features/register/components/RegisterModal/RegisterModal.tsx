import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/Store';
import { decrementStep } from '../../../../redux/Slices/RegisterSlice';
import { Modal } from '../../../../components/Modal/Modal'
import { RegisterStepCounter } from '../RegisterStepCounter/RegisterStepCounter';
import { determineModalContent } from '../../utils/RegisterModalUtil';
import './RegisterModal.css';

export const RegisterModal:React.FC = () => {
  
  const state= useSelector((state:RootState)=> state.register);
  const dispatch:AppDispatch= useDispatch();
  
  const stepButtonClicked=()=>{
    dispatch(decrementStep());
  }
  
  return (
      <Modal>
        <div className="register-container">
          <RegisterStepCounter step={state.step} changeStep={stepButtonClicked}/>
          <div className="register-modal-content">
            {determineModalContent(state.step)}
          </div>

        </div>
      </Modal> 
  )
}
