import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { getUserName } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';
import Modal from 'components/Modal/Modal';
import SubTitle from 'components/SubTitle/SubTitle';
import EditAvatar from 'components/EditAvatar/EditAvatar';
import Form from 'components/Form/Form';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import ButtonText from 'components/ButtonText/ButtonText';
import InputStandartForm from 'components/InputStandartForm/InputStandartForm';
import loadAvatarService from 'service/loadAvatarService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

const ModalEditUser = ({ userAvatar, closeModalEdit }) => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const [fileAvatar, setFileAvatar] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

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

  const loadAvatar = event => {
    loadAvatarService(event, setFileAvatar, setImagePreview);
  };

  const deleteAvatar = event => {
    event.stopPropagation();
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
      <SubTitle>Editing user</SubTitle>
      <EditAvatar
        imagePreview={imagePreview}
        userAvatar={userAvatar}
        deleteAvatar={deleteAvatar}
        loadAvatar={loadAvatar}
      ></EditAvatar>
      <Form autoComplete="off" formHundler={handleSubmit(editUser)}>
        <InputStandartForm
          name="Name"
          type="text"
          defaultValue={userName}
          register={register}
          validation={validation.name}
          placeholder="Enter name"
          title={TITLE_FORM.NAME}
          errors={errors}
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

ModalEditUser.propTypes = {
  closeModalEdit: PropTypes.func,
};

export default ModalEditUser;
