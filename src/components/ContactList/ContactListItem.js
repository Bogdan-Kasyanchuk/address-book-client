import notAvatar from 'assets/img/notAvatar.png';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import { getLoading } from 'redux/selectors';
import * as actions from 'redux/contacts/contacts-action';
import { useForm } from 'react-hook-form';
import Modal from 'components/Modal/Modal';

const Li = styled.li`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  font-size: 18px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: inline-block;
  margin-right: 148px;
`;

const Label = styled.label`
  font-size: 18px;
  color: #000000;
`;

const Span = styled.span`
  position: relative;
  display: block;
  margin-top: 5px;
  margin-bottom: 26px;
`;

const P = styled.p`
  top: 40px;
  position: absolute;
  font-size: 12px;
  color: #000000;
`;

const Input = styled.input`
  :first-child {
    margin-right: 20px;
  }
  width: 220px;
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  outline: none;
  ${({ inputTypeStyle }) =>
    inputTypeStyle === true
      ? { border: 'none', background: 'none', color: '#000000' }
      : {
          'border-radius': '5px',
          border: '2px solid #000000',
          color: '#000000',
        }};
  outline: none;
  :focus {
    border-color: #000000;
  }
`;

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ff6600;
  text-align: center;
`;

const Textarea = styled.textarea`
  :first-child {
    margin-right: 20px;
  }
  width: 500px;
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  outline: none;
  ${({ textareaTypeStyle }) =>
    textareaTypeStyle === true
      ? { border: 'none', background: 'none', color: '#000000' }
      : {
          'border-radius': '5px',
          border: '2px solid #000000',
          color: '#000000',
        }};
  outline: none;
  :focus {
    border-color: #000000;
  }
`;

const Div = styled.div`
  display: inline-block;
`;

const Button = styled.button`
  :not(:last-child) {
    margin-right: 30px;
  }
  width: 80px;
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
  :disabled {
    border: 2px solid #777777;
  }
  :disabled:hover {
    border: 2px solid #777777;
    background-color: #777777;
    color: #585858;
    cursor: not-allowed;
  }
`;

const Input1 = styled.input`
  display: none;
`;

const ContactListItem = ({ element }) => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const refInput = useRef();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [idContact, setIdContact] = useState(null);

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const emptyInput =
    (watch('name') !== element.name && watch('name') !== undefined) ||
    (watch('phone') !== element.phone && watch('phone') !== undefined) ||
    (watch('email') !== element.email && watch('email') !== undefined) ||
    (watch('address') !== element.address && watch('address') !== undefined) ||
    (watch('other') !== element.other && watch('other') !== undefined) ||
    file !== null;

  const userAvatar = element.avatarUrl ? element.avatarUrl : notAvatar;

  const handlerContact = event => {
    const { nodeName, textContent } = event.target;
    if (nodeName !== 'BUTTON') return;
    if (textContent === 'Edit') onOpenModal();
    if (textContent === 'Delete') {
      setIsOpenModalDelete(true);
      setIdContact(event.currentTarget.dataset.id);
    }
    if (textContent === 'Delete avatar')
      deleteAvatar(event.currentTarget.dataset.id);
    if (textContent === 'Load avatar') loadAvatar();
  };

  const handlerEditContact = ({ id, name, phone, email, address, other }) => {
    if (
      element.name.toLowerCase() !== name.toLowerCase() &&
      contacts.some(
        element => element.name.toLowerCase() === name.toLowerCase(),
      )
    )
      return toast(`${name} is already in contacts`, {
        icon: '⚠️',
      });

    if (
      element.phone !== phone &&
      contacts.some(element => element.phone === phone)
    )
      return toast(`${phone} is already in contacts`, {
        icon: '⚠️',
      });

    if (
      element.email !== email &&
      contacts.some(element => element.email === email)
    )
      return toast(`${email} is already in contacts`, {
        icon: '⚠️',
      });

    dispatch(
      operations.updateContact({
        id,
        name,
        phone,
        email,
        address,
        other,
        file,
      }),
    );
    onModalClose();
  };

  const deleteAvatar = id => {
    setImagePreview(null);
    setFile(null);
    dispatch(operations.deleteAvatarContact(id));
  };

  const onOpenModal = () => {
    setIsOpenModalEdit(true);
  };

  const handlerAvatar = event => {
    let fileLoaded = event.target.files[0];
    let reader = new FileReader();
    setFile(fileLoaded);
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(fileLoaded);
  };

  const loadAvatar = () => {
    refInput.current.click();
  };

  const onModalClose = () => {
    setImagePreview(null);
    setFile(null);
    resetField('id');
    resetField('name');
    resetField('phone');
    resetField('email');
    resetField('address');
    resetField('other');
    setIsOpenModalEdit(false);
  };

  const handlerEditFavoriteContact = event => {
    const editedFavoriteContact = {
      id: event.target.parentElement.dataset.id,
      favorite: event.target.checked,
    };
    dispatch(operations.editFavoriteContact(editedFavoriteContact));
  };

  const handlerDeleteContact = () => {
    dispatch(operations.deleteContact(idContact));
    if (filter) dispatch(actions.filterContact(''));
  };

  const onModalCloseDelete = () => {
    setIsOpenModalDelete(false);
  };

  return (
    <Li data-id={element._id} onClick={handlerContact}>
      <img
        style={{ width: '50px', borderRadius: '50%' }}
        src={userAvatar}
        alt={'Avatar'}
      />
      <h2>{element.name}</h2>
      <h2>{element.phone}</h2>
      <h2>{element.email}</h2>
      <h2>{element.address}</h2>
      <h2>{element.other}</h2>
      <Input
        type="checkbox"
        checked={element.favorite}
        onChange={handlerEditFavoriteContact}
      />
      <Div>
        <Button disabled={loading} type="button">
          Edit
        </Button>
        <Button disabled={loading} type="button">
          Delete
        </Button>
      </Div>
      {isOpenModalEdit && (
        <Modal onModalClose={onModalClose}>
          <H2>EDIT CONTACT</H2>
          <img
            style={{ width: '50px', borderRadius: '50%' }}
            src={imagePreview ? imagePreview : userAvatar}
            alt={'Avatar'}
          />
          <Button type="button">Delete avatar</Button>
          <Button type="button">Load avatar</Button>
          <Input1
            accept="image/*"
            type="file"
            onChange={handlerAvatar}
            ref={refInput}
          />
          <Form autoComplete="off" onSubmit={handleSubmit(handlerEditContact)}>
            <Input1
              type="text"
              defaultValue={element._id}
              {...register('id')}
            />
            <Label>
              Name
              <Span>
                <Input
                  type="text"
                  defaultValue={element.name}
                  {...register('name', {
                    required: 'The name is a required field!',
                    minLength: {
                      value: 3,
                      message: 'The name must contain min 3 characters!',
                    },
                    pattern: {
                      value:
                        /[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ']+(([' -][a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ' ])?[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ']*)*$/,
                      message: 'Enter the desired name format!',
                    },
                  })}
                  placeholder="Enter name"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example: Adrian, Jacob Mercer, Charles de Batz, de Castelmore, d'Artagnan, Van-Dame"
                />
                {errors?.name && <P>{errors?.name?.message || 'Error!'}</P>}
              </Span>
            </Label>
            <Label>
              Phone
              <Span>
                <Input
                  type="tel"
                  defaultValue={element.phone}
                  {...register('phone', {
                    required: 'The phone is a required field!',
                    minLength: {
                      value: 10,
                      message: 'The phone must contain min 10 characters!',
                    },
                    pattern: {
                      value:
                        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,20}(\s*)?$/,
                      message: 'Enter the desired phone format!',
                    },
                  })}
                  placeholder="Enter phone"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example: +38(033)-111-11-11, 033-111-11-11"
                />
                {errors?.phone && <P>{errors?.phone?.message || 'Error!'}</P>}
              </Span>
            </Label>
            <Label>
              Email
              <Span>
                <Input
                  type="text"
                  defaultValue={element.email}
                  {...register('email', {
                    required: 'The email is a required field!',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Enter the desired email format!',
                    },
                  })}
                  placeholder="Enter email"
                  title="Email can contain numbers and letters, dashes and under dashes. For example: pibij62253@mail.com, pSDi-j62_2@mail.com"
                />
                {errors?.email && <P>{errors?.email?.message || 'Error!'}</P>}
              </Span>
            </Label>
            <Label>
              Address
              <Span>
                <Input
                  type="text"
                  defaultValue={element.address}
                  {...register('address')}
                  placeholder="Enter address"
                />
              </Span>
            </Label>
            <Label>
              Other
              <Span>
                <Textarea
                  defaultValue={element.other}
                  {...register('other')}
                  placeholder="Enter other"
                  rows="5"
                  cols="47"
                />
              </Span>
            </Label>
            <Button disabled={!emptyInput} type="submit">
              OK
            </Button>
            <Button type="button" onClick={onModalClose}>
              Cancel
            </Button>
          </Form>
        </Modal>
      )}
      {isOpenModalDelete && (
        <Modal onModalClose={onModalCloseDelete}>
          <H2>Are you sure you want to delete contact "{element.name}"?</H2>
          <Button type="button" onClick={handlerDeleteContact}>
            OK
          </Button>
          <Button type="button" onClick={onModalCloseDelete}>
            Cancel
          </Button>
        </Modal>
      )}
    </Li>
  );
};

ContactListItem.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string,
    other: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};

export default ContactListItem;
