import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import { getFilter } from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-action';
import Modal from 'components/Modal/Modal';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import ButtonText from 'components/ButtonText/ButtonText';
import { accentColor } from 'styles/variables';

const ModalDeleteContact = ({ id, name, closeModalDelete }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const deleteContact = () => {
    dispatch(operations.deleteContact(id));
    if (filter) dispatch(actions.filterContact(''));
  };

  return (
    <Modal modalHundler={closeModalDelete}>
      <Text>Are you sure you want to delete contact "{name}"?</Text>
      <ButtonGroup>
        <ButtonText type="button" buttonHundler={deleteContact}>
          Ok
        </ButtonText>
        <ButtonText type="button" buttonHundler={closeModalDelete}>
          Cancel
        </ButtonText>
      </ButtonGroup>
    </Modal>
  );
};

ModalDeleteContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ModalDeleteContact;

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${accentColor};
  line-height: 1.3;
`;
