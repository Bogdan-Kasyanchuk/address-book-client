import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as operations from 'redux/contacts/contacts-operations';
import { getFilter } from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-action';
import Modal from 'components/Modal/Modal';
import ButtonText from 'components/ButtonText/ButtonText';

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ff6600;
  text-align: center;
`;

const ModalDeleteContact = ({ id, name, closeModalDelete }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const deleteContact = () => {
    dispatch(operations.deleteContact(id));
    if (filter) dispatch(actions.filterContact(''));
  };

  return (
    <Modal modalHundler={closeModalDelete}>
      <H2>Are you sure you want to delete contact "{name}"?</H2>
      <ButtonText type="button" buttonHundler={deleteContact}>
        Ok
      </ButtonText>
      <ButtonText type="button" buttonHundler={closeModalDelete}>
        Cancel
      </ButtonText>
    </Modal>
  );
};

ModalDeleteContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  closeModalDelete: PropTypes.func,
};

export default ModalDeleteContact;
