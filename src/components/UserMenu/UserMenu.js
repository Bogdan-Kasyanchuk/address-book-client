import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserName, getUserAvatarUrl } from 'redux/auth/auth-selectors';
import ModalEditUser from 'components/ModalEditUser/ModalEditUser';
import ModalLogOut from 'components/ModalLogOut/ModalLogOut';
import Image from 'components/Image/Image';
import ButtonText from 'components/ButtonText/ButtonText';
import notAvatar from 'assets/img/notAvatar.png';

const DivWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 32px;
`;

const Div = styled.div`
  width: 350px;
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
    <DivWrapper>
      <Div>
        <div onClick={openModalEdit} style={{ display: 'flex' }}>
          <Image src={userAvatar} alt={'Avatar'} />
          <P>{userName}</P>
        </div>
        <ButtonText type="button" buttonHundler={openModalLogOut}>
          Log out
        </ButtonText>
        {isOpenModal.edit && (
          <ModalEditUser
            userAvatar={userAvatar}
            closeModalEdit={closeModalEdit}
          />
        )}
        {isOpenModal.logOut && (
          <ModalLogOut closeModalLogOut={closeModalLogOut} />
        )}
      </Div>
    </DivWrapper>
  );
};

export default UserMenu;
