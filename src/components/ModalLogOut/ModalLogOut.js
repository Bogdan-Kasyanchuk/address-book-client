import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getUserName } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';
import Modal from 'components/Modal/Modal';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import ButtonText from 'components/ButtonText/ButtonText';

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
      <ButtonGroup>
        <ButtonText type="button" buttonHundler={logOut}>
          Ok
        </ButtonText>
        <ButtonText type="button" buttonHundler={closeModalLogOut}>
          Cancel
        </ButtonText>
      </ButtonGroup>
    </Modal>
  );
};

ModalLogOut.propTypes = {
  closeModalLogOut: PropTypes.func,
};

export default ModalLogOut;

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ff6600;
  line-height: 1.3;
`;
