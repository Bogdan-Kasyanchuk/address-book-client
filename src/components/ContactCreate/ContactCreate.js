import { useState } from 'react';
import ModalCreateContact from 'components/ModalCreateContact/ModalCreateContact';
import ButtonText from 'components/ButtonText/ButtonText';

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
      <ButtonText type="button" buttonHundler={openModal}>
        Add transaction
      </ButtonText>
      {isOpenModal && (
        <ModalCreateContact closeModalCreate={closeModalCreate} />
      )}
    </>
  );
};

export default ContactCreate;
