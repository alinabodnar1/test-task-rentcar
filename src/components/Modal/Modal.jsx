import React, { useEffect } from 'react';
import {
  Backdrop,
  ModalContainer,
  ModalCloseBtn,
  CloseModalIcon,
} from './Modal.styled';

export default function Modal({ children, onClose }) {
  const handleBackDrop = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Backdrop onClick={handleBackDrop}>
      <ModalContainer>
        <ModalCloseBtn
          type="button"
          aria-label="close button"
          onClick={onClose}
        >
          <CloseModalIcon />
        </ModalCloseBtn>
        {children}
      </ModalContainer>
    </Backdrop>
  );
}
