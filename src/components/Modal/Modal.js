import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
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
        <DivDiv>
          <Icon iconName="logo" width="34px" height="34px" />
          <ButtonText type="button" buttonHundler={modalHundler}>
            Close
          </ButtonText>
        </DivDiv>
        <DivDivDiv>{children}</DivDivDiv>
      </Content>
    </Overlay>,
    modalRoot,
  );
};

Modal.propTypes = {
  modalHundler: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3000;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 330px;
  max-width: 440px;
  transform: translate(-50%, -50%);
  background-color: #444444;
  overflow-y: auto;
  max-height: 80vh;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const DivDiv = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ff6600;

  .icon {
    stroke: #ff6600;
  }

  button {
    margin-left: 0;
    margin-right: 0;
  }
`;

const DivDivDiv = styled.div`
  padding: 20px;
`;
