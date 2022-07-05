import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import Modal from 'components/Modal/Modal';
import SubTitle from 'components/SubTitle/SubTitle';
import EditAvatar from 'components/EditAvatar/EditAvatar';
import Form from 'components/Form/Form';
import InputStandartForm from 'components/InputStandartForm/InputStandartForm';
import TextAreaForm from 'components/TextAreaForm/TextAreaForm';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import ButtonText from 'components/ButtonText/ButtonText';
import { existContactUpdate } from 'service/existContactService';
import loadAvatarService from 'service/loadAvatarService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

const ModalEditContact = ({ element, userAvatar, closeModalEdit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [fileAvatar, setFileAvatar] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const buttonDisabled =
    (watch('name') !== element.name && watch('name') !== undefined) ||
    (watch('phone') !== element.phone && watch('phone') !== undefined) ||
    (watch('email') !== element.email && watch('email') !== undefined) ||
    (watch('address') !== element.address && watch('address') !== undefined) ||
    (watch('other') !== element.other && watch('other') !== undefined) ||
    fileAvatar !== null;

  const loadAvatar = event => {
    loadAvatarService(event, setFileAvatar, setImagePreview);
  };

  const deleteAvatar = event => {
    event.stopPropagation();
    setImagePreview(null);
    setFileAvatar(null);
    dispatch(operations.deleteAvatarContact(element._id));
  };

  const editContact = ({ name, phone, email, address, other }) => {
    if (existContactUpdate(element, contacts, { name, phone, email })) {
      return;
    }
    dispatch(
      operations.updateContact({
        id: element._id,
        name,
        phone,
        email,
        address,
        other,
        fileAvatar,
      }),
    );
    closeModalEdit();
  };

  const closeModal = () => {
    setImagePreview(null);
    setFileAvatar(null);
    resetField('id');
    resetField('name');
    resetField('phone');
    resetField('email');
    resetField('address');
    resetField('other');
    closeModalEdit();
  };

  return (
    <Modal modalHundler={closeModal}>
      <SubTitle>Editing contact</SubTitle>
      <EditAvatar
        imagePreview={imagePreview}
        userAvatar={userAvatar}
        deleteAvatar={deleteAvatar}
        loadAvatar={loadAvatar}
      ></EditAvatar>
      <Form autoComplete="off" formHundler={handleSubmit(editContact)}>
        <InputStandartForm
          name="Name"
          type="text"
          defaultValue={element.name}
          register={register}
          validation={validation.name}
          placeholder="Enter name"
          title={TITLE_FORM.NAME}
          errors={errors}
        />
        <InputStandartForm
          name="Phone"
          type="tel"
          defaultValue={element.phone}
          register={register}
          validation={validation.phone}
          placeholder="Enter phone"
          title={TITLE_FORM.PHONE}
          errors={errors}
        />
        <InputStandartForm
          name="Email"
          type="text"
          defaultValue={element.email}
          register={register}
          validation={validation.email}
          placeholder="Enter email"
          title={TITLE_FORM.EMAIL}
          errors={errors}
        />
        <InputStandartForm
          name="Address"
          type="text"
          defaultValue={element.address}
          register={register}
          placeholder="Enter address"
          title={TITLE_FORM.ADDRES}
        />
        <TextAreaForm
          name="Other"
          defaultValue={element.other}
          register={register}
          placeholder="Enter other"
          title={TITLE_FORM.OTHER}
        />
        <ButtonGroup>
          <ButtonText disabled={!buttonDisabled} type="submit">
            Ok
          </ButtonText>
          <ButtonText type="button" buttonHundler={closeModal}>
            Cancel
          </ButtonText>
        </ButtonGroup>
      </Form>
    </Modal>
  );
};

ModalEditContact.propTypes = {
  element: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string,
    other: PropTypes.string,
  }),
  closeModalDelete: PropTypes.func,
};

export default ModalEditContact;
