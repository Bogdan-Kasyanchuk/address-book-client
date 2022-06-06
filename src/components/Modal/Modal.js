import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonText from 'components/ButtonText/ButtonText';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ children, modalHundler }) => {
  useEffect(() => {
    window.addEventListener('keydown', onClickKeyDown);
    return () => window.removeEventListener('keydown', onClickKeyDown);
  });

  const onClickKeyDown = event => {
    if (event.code === 'Escape') {
      modalHundler();
    }
  };

  const onClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      modalHundler();
    }
  };

  return createPortal(
    <Overlay onClick={onClickBackdrop}>
      <Content>
        <ButtonText type="button" buttonHundler={modalHundler}>
          Close
        </ButtonText>
        {children}
      </Content>
    </Overlay>,
    modalRoot,
  );
};

Modal.propTypes = {
  modalHundler: PropTypes.func,
  children: PropTypes.node,
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

export default Modal;
