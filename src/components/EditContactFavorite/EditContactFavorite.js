import { useDispatch } from 'react-redux';
import * as operations from 'redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { visuallyHidden } from 'styles/utils';

const EditContactFavorite = ({ favorite, id }) => {
  const dispatch = useDispatch();
  const editFavoriteContact = event => {
    const editedFavoriteContact = {
      id,
      favorite: event.target.checked,
    };
    dispatch(operations.editFavoriteContact(editedFavoriteContact));
  };

  return (
    <Label>
      <SpanInput>
        <Input
          type="checkbox"
          checked={favorite}
          onChange={editFavoriteContact}
        />
        <Span checkedType={favorite}></Span>
      </SpanInput>
    </Label>
  );
};

EditContactFavorite.propTypes = {
  favorite: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default EditContactFavorite;

const Label = styled.label`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 10px;
  top: 10px;
`;

const SpanInput = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid #ff6600;
  border-radius: 50%;
`;

const Input = styled.input`
  ${visuallyHidden}
`;

const Span = styled.span`
  width: 16px;
  height: 16px;
  background-color: ${({ checkedType }) => (checkedType ? '#ff6600' : null)};
  border-radius: 50%;
`;
