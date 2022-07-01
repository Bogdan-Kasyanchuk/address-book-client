import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserName, getUserAvatarUrl } from 'redux/auth/auth-selectors';
import ModalEditUser from 'components/ModalEditUser/ModalEditUser';
import ModalLogOut from 'components/ModalLogOut/ModalLogOut';
import Avatar from 'components/Avatar/Avatar';
import ButtonIconText from 'components/ButtonIconText/ButtonIconText';
import notAvatar from 'assets/img/notAvatar.png';
import { size } from 'styles/variables';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const userAvatarUrl = useSelector(getUserAvatarUrl);
  const [isOpenModal, setIsOpenModal] = useState({
    edit: false,
    logOut: false,
  });

  const userAvatar = userAvatarUrl ? userAvatarUrl : notAvatar;

  const openModalEdit = () => {
    setIsOpenModal({
      ...{
        edit: false,
        logOut: false,
      },
      edit: true,
    });
  };

  const closeModalEdit = () => {
    setIsOpenModal({
      ...{
        edit: true,
        logOut: false,
      },
      edit: false,
    });
  };

  const openModalLogOut = () => {
    setIsOpenModal({
      ...{
        edit: false,
        logOut: false,
      },
      logOut: true,
    });
  };

  const closeModalLogOut = () => {
    setIsOpenModal({
      ...{
        edit: false,
        logOut: true,
      },
      logOut: false,
    });
  };

  return (
    <DivDiv>
      <Div onClick={openModalEdit} style={{ display: 'flex' }}>
        <DivImage>
          <Avatar src={userAvatar} alt="Avatar" />
        </DivImage>
        <P>{userName}</P>
      </Div>
      <ButtonIconText
        type="button"
        buttonHundler={openModalLogOut}
        iconName="logout"
      >
        Logout
      </ButtonIconText>
      {isOpenModal.edit && (
        <ModalEditUser
          userAvatar={userAvatar}
          closeModalEdit={closeModalEdit}
        />
      )}
      {isOpenModal.logOut && (
        <ModalLogOut closeModalLogOut={closeModalLogOut} />
      )}
    </DivDiv>
  );
};

export default UserMenu;

const DivDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
  max-height: 40px;
  cursor: pointer;

  ${size.tabletMin} {
    margin-right: 20px;
  }
`;

const DivImage = styled.div`
  width: 34px;

  ${size.laptopMin} {
    width: 40px;
  }
`;

const P = styled.p`
  ${size['449Max']} {
    display: none;
  }

  flex-basis: 25%;
  font-size: 14px;
  color: #ffffff;
  line-height: 1.2;
  margin-left: 10px;

  ${size.laptopMin} {
    font-size: 16px;
    line-height: 1.25;
  }
`;
