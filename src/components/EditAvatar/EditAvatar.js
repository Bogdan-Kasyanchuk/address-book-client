import { useRef } from 'react';
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
    <Div>
      <ImageWrapper>
        <Avatar src={imagePreview ? imagePreview : userAvatar} alt={'Avatar'} />
      </ImageWrapper>
      <ButtonWrapper>
        <ButtonText type="button" buttonHundler={deleteAvatar}>
          Delete
        </ButtonText>
        <ButtonText type="button" buttonHundler={clickInputAvatar}>
          Load
        </ButtonText>
      </ButtonWrapper>
      <InputFile inputHundler={loadAvatar} ref={refInput} />
    </Div>
  );
};

export default EditAvatar;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  height: 110px;
`;

const ImageWrapper = styled.div`
  width: 110px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
