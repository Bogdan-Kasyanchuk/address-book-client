import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getUserName } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';
import Modal from 'components/Modal/Modal';
import ButtonText from 'components/ButtonText/ButtonText';

const Text = styled.p`
  color: #000000;
`;

const ModalLogOut = ({ closeModalLogOut }) => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const logOut = () => {
    dispatch(operations.logOutUser());
    closeModalLogOut();
  };

  return (
    <Modal modalHundler={closeModalLogOut}>
      <Text>{userName ?? 'User'}, are you sure you want to exit?</Text>
      <ButtonText type="button" buttonHundler={logOut}>
        Ok
      </ButtonText>
      <ButtonText type="button" buttonHundler={closeModalLogOut}>
        Cancel
      </ButtonText>
    </Modal>
  );
};

ModalLogOut.propTypes = {
  closeModalLogOut: PropTypes.func,
};

export default ModalLogOut;
