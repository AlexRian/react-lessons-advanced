import React, { ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import Container from "./common/Container";
import style from '../styles/modules/Modal.module.scss'

const Modal = (props:{children:ReactNode, closeModal:() => void}) => {
  return ReactDOM.createPortal(
    <div className={style.modal}>
      <div className={style.modalContent}>
        {props.children}
        <button onClick={props.closeModal}>Close Modal</button>
      </div>
    </div>,
    document.body
  );
}

const PortalsExample:React.FC = () =>{
  const [opened, setOpened] = useState<boolean>(false);
  
  return (
    <Container title='Portals example'>
      <button onClick={()=>{setOpened(true)}}>Open Modal</button>
      {opened ? 
        <Modal closeModal={()=>{setOpened(false)}}>
          <h3>Hi From Modal</h3>
        </Modal>
      :null}
    </Container>
  )
}

export default PortalsExample;