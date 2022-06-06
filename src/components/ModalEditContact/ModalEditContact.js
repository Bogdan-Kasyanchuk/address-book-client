import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import Modal from 'components/Modal/Modal';
import Image from 'components/Image/Image';
import InputFile from 'components/InputFile/InputFile';
import Form from 'components/Form/Form';
import InputForm from 'components/InputForm/InputForm';
import TextAreaForm from 'components/TextAreaForm/TextAreaForm';
import ButtonText from 'components/ButtonText/ButtonText';
import { existContactUpdate } from 'service/existContactService';
import loadAvatarService from 'service/loadAvatarService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ff6600;
  text-align: center;
`;

const ModalEditContact = ({ element, userAvatar, closeModalEdit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const refInput = useRef();
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

  const clickInputAvatar = () => {
    refInput.current.click();
  };

  const loadAvatar = event => {
    loadAvatarService(event, setFileAvatar, setImagePreview);
  };

  const deleteAvatar = () => {
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
      <H2>Edit contact</H2>
      <Image src={imagePreview ? imagePreview : userAvatar} alt={'Avatar'} />
      <ButtonText type="button" buttonHundler={deleteAvatar}>
        Delete avatar
      </ButtonText>
      <ButtonText type="button" buttonHundler={clickInputAvatar}>
        Load avatar
      </ButtonText>
      <InputFile
        accept="image/*"
        type="file"
        inputHundler={loadAvatar}
        ref={refInput}
      />
      <Form autoComplete="off" formHundler={handleSubmit(editContact)}>
        <InputForm
          name="Name"
          type="text"
          defaultValue={element.name}
          register={register}
          validation={validation.name}
          placeholder="Enter name"
          title={TITLE_FORM.NAME}
          errors={errors}
        />
        <InputForm
          name="Phone"
          type="tel"
          defaultValue={element.phone}
          register={register}
          validation={validation.phone}
          placeholder="Enter phone"
          title={TITLE_FORM.PHONE}
          errors={errors}
        />
        <InputForm
          name="Email"
          type="text"
          defaultValue={element.email}
          register={register}
          validation={validation.email}
          placeholder="Enter email"
          title={TITLE_FORM.EMAIL}
          errors={errors}
        />
        <InputForm
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
        <ButtonText disabled={!buttonDisabled} type="submit">
          Ok
        </ButtonText>
        <ButtonText type="button" buttonHundler={closeModal}>
          Cancel
        </ButtonText>
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
  userAvatar: PropTypes.string.isRequired,
  closeModalDelete: PropTypes.func,
};

export default ModalEditContact;
