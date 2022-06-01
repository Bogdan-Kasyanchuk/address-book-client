import notAvatar from 'assets/img/notAvatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  getUserName,
  getUserEmail,
  getUserAvatarUrl,
} from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';
import Modal from 'components/Modal/Modal';

const DivWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 32px;
`;

const Div = styled.div`
  width: 600px;
  position: absolute;
  right: 50px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  font-size: 20px;
`;

const Text = styled.p`
  color: #000000;
`;

const Button = styled.button`
  padding: 2px 4px;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
`;

const Input = styled.input`
  display: none;
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

const Input1 = styled.input`
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

const P1 = styled.p`
  top: 40px;
  position: absolute;
  font-size: 12px;
  color: #000000;
`;

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const [file, setFile] = useState(null);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalExit, setIsOpenModalExit] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const userEmail = useSelector(getUserEmail);
  const userAvatarUrl = useSelector(getUserAvatarUrl);
  const dispatch = useDispatch();
  const refInput = useRef();

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const emptyInput =
    (watch('name') !== userName && watch('name') !== undefined) ||
    file !== null;

  const userAvatar = userAvatarUrl ? userAvatarUrl : notAvatar;

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

  const deleteAvatar = () => {
    setImagePreview(null);
    setFile(null);
    dispatch(operations.deleteAvatarUser());
  };

  const handlerEdit = ({ name }) => {
    dispatch(operations.updateUser({ file, name }));
    onModalClose();
  };

  const onModalClose = () => {
    setImagePreview(null);
    setFile(null);
    resetField('name');
    setIsOpenModalEdit(false);
  };

  const onOpenModalExit = () => {
    setIsOpenModalExit(true);
  };

  const onModalCloseExit = () => {
    setIsOpenModalExit(false);
  };

  const logOut = () => {
    dispatch(operations.logOutUser());
    onModalCloseExit();
  };

  return (
    <DivWrapper>
      <Div>
        <div onClick={onOpenModal}>
          <img
            style={{ width: '50px', borderRadius: '50%' }}
            src={userAvatar}
            alt={'Avatar'}
          />
          <P>
            Hello, {userName} {userEmail}
          </P>
        </div>
        <Button type="button" onClick={onOpenModalExit}>
          LOG OUT
        </Button>
        {isOpenModalEdit && (
          <Modal onModalClose={onModalClose}>
            <img
              style={{ width: '50px', borderRadius: '50%' }}
              src={imagePreview ? imagePreview : userAvatar}
              alt={'Avatar'}
            />
            <Button type="button" onClick={deleteAvatar}>
              Delete avatar
            </Button>
            <Button type="button" onClick={loadAvatar}>
              Load avatar
            </Button>
            <Input
              accept="image/*"
              type="file"
              onChange={handlerAvatar}
              ref={refInput}
            />
            <form autoComplete="off" onSubmit={handleSubmit(handlerEdit)}>
              <Label>
                Name
                <Span>
                  <Input1
                    type="text"
                    defaultValue={userName}
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
                  {errors?.name && <P1>{errors?.name?.message || 'Error!'}</P1>}
                </Span>
              </Label>
              <Button disabled={!emptyInput} type="submit">
                OK
              </Button>
              <Button type="button" onClick={onModalClose}>
                Cancel
              </Button>
            </form>
          </Modal>
        )}
        {isOpenModalExit && (
          <Modal onModalClose={onModalCloseExit}>
            <Text>{userName ?? 'User'}, are you sure you want to exit?</Text>
            <Button type="button" onClick={logOut}>
              OK
            </Button>
            <Button type="button" onClick={onModalCloseExit}>
              Cancel
            </Button>
          </Modal>
        )}
      </Div>
    </DivWrapper>
  );
};

export default UserMenu;
