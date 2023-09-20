import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  return createPortal(
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
    </Backdrop>,
    document.body
  );
}
