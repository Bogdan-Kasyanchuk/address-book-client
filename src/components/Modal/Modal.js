import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ children, onModalClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Content>
        <Button
          type="button"
          onClick={onModalClose}
          aria-label="close Modal Window"
        >
          Close
        </Button>
        {children}
      </Content>
    </Overlay>,
    modalRoot,
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onModalClose: PropTypes.func,
};

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 90%;
  transform: translate(-50%, -50%);
  padding: 20px;
  overflow-y: auto;
  background-color: #ffffff;
  opacity: 1;
`;
const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export default Modal;
