import styled from 'styled-components';
import closeModal from '../../images/closeModal.png';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: var(--primaryTextColor);
  z-index: 100;
`;
export const ModalContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 45px 37px 40px 32px;
  max-width: 472px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: var(--boxShadow);
  transition: all 250ms var(--funcTransition);;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0;
`;

export const CloseModalIcon = styled.div`
  background-image: url(${closeModal});
  width: 24px;
  height: 24px;
`;
