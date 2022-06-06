import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as operations from 'redux/contacts/contacts-operations';
import { getLoading } from 'redux/selectors';
import ModalEditContact from 'components/ModalEditContact/ModalEditContact';
import ModalDeleteContact from 'components/ModalDeleteContact/ModalDeleteContact';
import Image from 'components/Image/Image';
import InputCheckbox from 'components/InputCheckbox/InputCheckbox';
import ButtonText from 'components/ButtonText/ButtonText';
import notAvatar from 'assets/img/notAvatar.png';

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

const Div = styled.div`
  display: inline-block;
`;

const ContactItem = ({ element }) => {
  const dispatch = useDispatch();
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
    }
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
  };

  const editFavoriteContact = event => {
    const editedFavoriteContact = {
      id: event.target.parentElement.dataset.id,
      favorite: event.target.checked,
    };
    dispatch(operations.editFavoriteContact(editedFavoriteContact));
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
    <Li data-id={element._id} onClick={handlerContact}>
      <Image src={userAvatar} alt={'Avatar'} />
      <h2>{element.name}</h2>
      <h2>{element.phone}</h2>
      <h2>{element.email}</h2>
      <h2>{element.address}</h2>
      <h2>{element.other}</h2>
      <InputCheckbox
        type="checkbox"
        checked={element.favorite}
        inputHundler={editFavoriteContact}
      />
      <Div>
        <ButtonText disabled={loading} type="button">
          Edit
        </ButtonText>
        <ButtonText disabled={loading} type="button">
          Delete
        </ButtonText>
      </Div>
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
    </Li>
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
