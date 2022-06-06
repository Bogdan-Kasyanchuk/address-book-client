import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { getUserName } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';
import Modal from 'components/Modal/Modal';
import Image from 'components/Image/Image';
import InputFile from 'components/InputFile/InputFile';
import Form from 'components/Form/Form';
import ButtonText from 'components/ButtonText/ButtonText';
import InputForm from 'components/InputForm/InputForm';
import loadAvatarService from 'service/loadAvatarService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

const ModalEditUser = ({ userAvatar, closeModalEdit }) => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
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
    (watch('name') !== userName && watch('name') !== undefined) ||
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
    dispatch(operations.deleteAvatarUser());
  };

  const editUser = ({ name }) => {
    dispatch(operations.updateUser({ fileAvatar, name }));
    closeModalEdit();
  };

  const closeModal = () => {
    setImagePreview(null);
    setFileAvatar(null);
    resetField('name');
    closeModalEdit();
  };

  return (
    <Modal modalHundler={closeModal}>
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
      <Form autoComplete="off" formHundler={handleSubmit(editUser)}>
        <InputForm
          name="Name"
          type="text"
          defaultValue={userName}
          register={register}
          validation={validation.name}
          placeholder="Enter name"
          title={TITLE_FORM.NAME}
          errors={errors}
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

ModalEditUser.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  closeModalEdit: PropTypes.func,
};

export default ModalEditUser;
