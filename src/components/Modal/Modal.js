import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import ButtonText from 'components/ButtonText/ButtonText';
import { bgColor, accentColor } from 'styles/variables';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ modalHundler, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onClickKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onClickKeyDown);
      document.body.style.overflow = 'auto';
    };
  });

  const onClickKeyDown = ({ code }) => {
    if (code === 'Escape') {
      modalHundler();
    }
  };

  const onClickBackdrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      modalHundler();
    }
  };

  return createPortal(
    <Overlay onClick={onClickBackdrop}>
      <Content>
        <DiwWrapper>
          <Icon iconName="logo" width="34px" height="34px" />
          <ButtonText type="button" buttonHundler={modalHundler}>
            Close
          </ButtonText>
        </DiwWrapper>
        <Div>{children}</Div>
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
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3000;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 290px;
  max-width: 440px;
  max-height: 80vh;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${bgColor};
  overflow-y: auto;
  transform: translate(-50%, -50%);
`;

const DiwWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 2px solid ${accentColor};

  .icon {
    stroke: ${accentColor};
  }

  button {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Div = styled.div`
  padding: 20px;
`;
