import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import Modal from 'components/Modal/Modal';
import SubTitle from 'components/SubTitle/SubTitle';
import Form from 'components/Form/Form';
import InputStandartForm from 'components/InputStandartForm/InputStandartForm';
import TextAreaForm from 'components/TextAreaForm/TextAreaForm';
import InputFavoriteForm from 'components/InputFavoriteForm/InputFavoriteForm';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import ButtonText from 'components/ButtonText/ButtonText';
import { existContactCreate } from 'service/existContactService';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

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
      <SubTitle>Creating contact</SubTitle>
      <Form autoComplete="off" formHundler={handleSubmit(createContact)}>
        <InputStandartForm
          name="Name"
          type="text"
          register={register}
          validation={validation.name}
          placeholder="Enter name"
          title={TITLE_FORM.NAME}
          errors={errors}
        />
        <InputStandartForm
          name="Phone"
          type="tel"
          register={register}
          validation={validation.phone}
          placeholder="Enter phone"
          title={TITLE_FORM.PHONE}
          errors={errors}
        />
        <InputStandartForm
          name="Email"
          type="text"
          register={register}
          validation={validation.email}
          placeholder="Enter email"
          title={TITLE_FORM.EMAIL}
          errors={errors}
        />
        <InputStandartForm
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
        <InputFavoriteForm name="Favorite" register={register} />
        <ButtonGroup>
          <ButtonText disabled={buttonDisabled} type="submit">
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

ModalCreateContact.propTypes = {
  closeModalCreate: PropTypes.func,
};

export default ModalCreateContact;
