import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getLoading } from 'redux/selectors';
import EditContactFavorite from 'components/EditContactFavorite/EditContactFavorite';
import ButtonIconText from 'components/ButtonIconText/ButtonIconText';
import Avatar from 'components/Avatar/Avatar';
import ContactContent from 'components/ContactContent/ContactContent';
import ModalEditContact from 'components/ModalEditContact/ModalEditContact';
import ModalDeleteContact from 'components/ModalDeleteContact/ModalDeleteContact';
import notAvatar from 'assets/img/notAvatar.png';
import { size } from 'styles/variables';

const ContactItem = ({ element }) => {
  const loading = useSelector(getLoading);
  const [isOpenModal, setIsOpenModal] = useState({
    edit: false,
    delete: false,
  });

  const userAvatar = element.avatarUrl ? element.avatarUrl : notAvatar;

  const handlerContact = event => {
    const { nodeName, textContent } = event.target;
    if (nodeName !== 'BUTTON') {
      return;
    } else {
      if (textContent === 'Edit') {
        openModalEdit();
      }
      if (textContent === 'Delete') {
        setIsOpenModal({
          ...{
            edit: false,
            delete: false,
          },
          delete: true,
        });
      }
    }
  };

  const openModalEdit = () => {
    setIsOpenModal({
      ...{
        edit: false,
        delete: false,
      },
      edit: true,
    });
  };

  const closeModalEdit = () => {
    setIsOpenModal({
      ...{
        edit: true,
        delete: false,
      },
      edit: false,
    });
  };

  const closeModalDelete = () => {
    setIsOpenModal({
      ...{
        edit: false,
        delete: true,
      },
      delete: false,
    });
  };

  return (
    <>
      <Li onClick={handlerContact}>
        <ButtonDiv>
          <ButtonIconText
            disabled={loading}
            type="button"
            iconName="edit"
            displayMobileMax={false}
          >
            Edit
          </ButtonIconText>
          <ButtonIconText
            disabled={loading}
            type="button"
            iconName="delete"
            displayMobileMax={false}
          >
            Delete
          </ButtonIconText>
        </ButtonDiv>
        <EditContactFavorite favorite={element.favorite} id={element._id} />
        <Div1>
          <DivImage>
            <Avatar src={userAvatar} alt={'Avatar'} />
          </DivImage>
          <ContactContent element={element} />
        </Div1>
      </Li>
      {isOpenModal.edit && (
        <ModalEditContact
          element={element}
          userAvatar={userAvatar}
          closeModalEdit={closeModalEdit}
        />
      )}
      {isOpenModal.delete && (
        <ModalDeleteContact
          id={element._id}
          name={element.name}
          closeModalDelete={closeModalDelete}
        />
      )}
    </>
  );
};

ContactItem.propTypes = {
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

export default ContactItem;

const Li = styled.li`
  position: relative;
  background-color: rgba(40, 40, 40, 0.5);
  border: 2px solid #ff6600;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px;
  flex-grow: 1;
  flex-basis: 275px;
  max-width: 320px;
  font-size: 16px;

  ${size.tabletMin} {
    flex-basis: 600px;
    max-width: 700px;
    padding-left: 64px;
    padding-right: 40px;
    font-size: 18px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: 85px;
  left: 10px;
  top: 10px;
`;

const Div1 = styled.div`
  ${size.tabletMin} {
    display: flex;
  }
`;

const DivImage = styled.div`
  min-width: 85px;
  max-width: 85px;

  ${size.mobileMax} {
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  ${size.tabletMin} {
    margin-right: 20px;
  }
`;
