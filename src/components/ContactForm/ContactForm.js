import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import Modal from 'components/Modal/Modal';

const Form = styled.form`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
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

const Input = styled.input`
  width: 100%;
  display: block;
  color: #000000;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #000000;
  outline: none;
  :focus {
    border-color: #000000;
  }
`;

const P = styled.p`
  top: 40px;
  position: absolute;
  font-size: 12px;
  color: #000000;
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid #000000;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #000000;
    background-color: #666666;
    border-color: #666666;
  }
  :disabled {
    border: 2px solid #666666;
  }
  :disabled:hover {
    border: 2px solid #666666;
    background-color: #666666;
    color: #000000;
    cursor: not-allowed;
  }
`;

const Textarea = styled.textarea`
  :first-child {
    margin-right: 20px;
  }
  width: 100%;
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

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ff6600;
  text-align: center;
`;

const ContactForm = () => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const emptyInput =
    watch('name') === '' ||
    watch('phone') === '' ||
    watch('email') === '' ||
    watch('name') === undefined ||
    watch('phone') === undefined ||
    watch('email') === undefined;

  const handlerCreateContact = contact => {
    if (
      contacts.some(
        element => element.name.toLowerCase() === contact.name.toLowerCase(),
      )
    )
      return toast(`${contact.name} is already in contacts`, {
        icon: '⚠️',
      });
    if (contacts.some(element => element.phone === contact.phone))
      return toast(`${contact.phone} is already in contacts`, {
        icon: '⚠️',
      });
    dispatch(operations.addContact(contact));
    reset();
    onModalClose();
  };

  const onOpenModal = () => {
    setIsOpenModalEdit(true);
  };

  const onModalClose = () => {
    setIsOpenModalEdit(false);
  };

  return (
    <>
      <Button type="button" onClick={onOpenModal}>
        Add transaction
      </Button>
      {isOpenModalEdit && (
        <Modal onModalClose={onModalClose}>
          <H2>ADD NEW CONTACT</H2>
          <Form
            autoComplete="off"
            onSubmit={handleSubmit(handlerCreateContact)}
          >
            <Label>
              Name
              <Span>
                <Input
                  type="text"
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
                  {...register('address')}
                  placeholder="Enter address"
                />
              </Span>
            </Label>
            <Label>
              Other
              <Span>
                <Textarea
                  {...register('other')}
                  placeholder="Enter other"
                  rows="5"
                  cols="47"
                />
              </Span>
            </Label>
            <Label>
              Favorite
              <Span>
                <Input type="checkbox" {...register('favorite')} />
              </Span>
            </Label>
            <Button disabled={emptyInput} type="submit">
              OK
            </Button>
            <Button type="button" onClick={onModalClose}>
              Cancel
            </Button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ContactForm;
