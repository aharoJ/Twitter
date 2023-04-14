import React from 'react'

import './Modal.css';
import '../../assets/global.css';

interface ModalProps{
  // children: React.ReactNode
  children: JSX.Element
}

// react.functionalComponent
export const Modal:React.FC <ModalProps> = (props:ModalProps) => {
  return (
    <div className='model-overlay'>
        <div className='modal-container bg-color'>
            content
            {props.children}
        </div>
    </div>
  )
}

