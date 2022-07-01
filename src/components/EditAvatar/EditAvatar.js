import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from 'components/Avatar/Avatar';
import InputFile from 'components/InputFile/InputFile';
import ButtonText from 'components/ButtonText/ButtonText';

const EditAvatar = ({ imagePreview, userAvatar, deleteAvatar, loadAvatar }) => {
  const refInput = useRef();

  const clickInputAvatar = () => {
    refInput.current.click();
  };

  return (
    <DivDiv>
      <DivImage>
        <Avatar src={imagePreview ? imagePreview : userAvatar} alt={'Avatar'} />
      </DivImage>
      <DivButton>
        <ButtonText type="button" buttonHundler={deleteAvatar}>
          Delete
        </ButtonText>
        <ButtonText type="button" buttonHundler={clickInputAvatar}>
          Load
        </ButtonText>
      </DivButton>
      <InputFile inputHundler={loadAvatar} ref={refInput} />
    </DivDiv>
  );
};

EditAvatar.propTypes = {
  imagePreview: PropTypes.any,
  userAvatar: PropTypes.string.isRequired,
  deleteAvatar: PropTypes.func,
  loadAvatar: PropTypes.func,
};

export default EditAvatar;

const DivDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  height: 110px;
`;

const DivImage = styled.div`
  width: 110px;
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
