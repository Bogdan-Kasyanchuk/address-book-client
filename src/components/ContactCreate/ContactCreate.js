import { useState } from 'react';
import ModalCreateContact from 'components/ModalCreateContact/ModalCreateContact';
import ButtonIconText from 'components/ButtonIconText/ButtonIconText';

const ContactCreate = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModalCreate = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <ButtonIconText type="button" buttonHundler={openModal} iconName="add">
        Add contact
      </ButtonIconText>
      {isOpenModal && (
        <ModalCreateContact closeModalCreate={closeModalCreate} />
      )}
    </>
  );
};

export default ContactCreate;
