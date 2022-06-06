import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import Modal from 'components/Modal/Modal';
import Form from 'components/Form/Form';
import InputForm from 'components/InputForm/InputForm';
import TextAreaForm from 'components/TextAreaForm/TextAreaForm';
import ButtonText from 'components/ButtonText/ButtonText';
import { existContactCreate } from 'service/existContactService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ff6600;
  text-align: center;
`;

const ModalCreateContact = ({ closeModalCreate }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const buttonDisabled =
    watch('name') === '' ||
    watch('phone') === '' ||
    watch('email') === '' ||
    watch('name') === undefined ||
    watch('phone') === undefined ||
    watch('email') === undefined;

  const createContact = contact => {
    if (existContactCreate(contacts, contact)) {
      return;
    }
    dispatch(operations.addContact(contact));
    reset();
    closeModal();
  };

  const closeModal = () => {
    reset();
    closeModalCreate();
  };

  return (
    <Modal modalHundler={closeModal}>
      <H2>Add new contsct</H2>
      <Form autoComplete="off" formHundler={handleSubmit(createContact)}>
        <InputForm
          name="Name"
          type="text"
          register={register}
          validation={validation.name}
          placeholder="Enter name"
          title={TITLE_FORM.NAME}
          errors={errors}
        />
        <InputForm
          name="Phone"
          type="tel"
          register={register}
          validation={validation.phone}
          placeholder="Enter phone"
          title={TITLE_FORM.PHONE}
          errors={errors}
        />
        <InputForm
          name="Email"
          type="text"
          register={register}
          validation={validation.email}
          placeholder="Enter email"
          title={TITLE_FORM.EMAIL}
          errors={errors}
        />
        <InputForm
          name="Address"
          type="text"
          register={register}
          placeholder="Enter address"
          title={TITLE_FORM.ADDRES}
        />
        <TextAreaForm
          name="Other"
          register={register}
          placeholder="Enter other"
          title={TITLE_FORM.OTHER}
        />
        <InputForm name="Favorite" type="checkbox" register={register} />
        <ButtonText disabled={buttonDisabled} type="submit">
          OK
        </ButtonText>
        <ButtonText type="button" buttonHundler={closeModal}>
          Cancel
        </ButtonText>
      </Form>
    </Modal>
  );
};

ModalCreateContact.propTypes = {
  closeModalCreate: PropTypes.func,
};

export default ModalCreateContact;
