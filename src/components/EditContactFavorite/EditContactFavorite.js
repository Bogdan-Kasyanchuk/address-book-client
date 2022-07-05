import { useDispatch } from 'react-redux';
import * as operations from 'redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputCheckbox from 'components/InputCheckbox/InputCheckbox';
import { accentColor } from 'styles/variables';

const EditContactFavorite = ({ favorite, id }) => {
  const dispatch = useDispatch();
  const editFavoriteContact = ({ target }) => {
    const editedFavoriteContact = {
      id,
      favorite: target.checked,
    };
    dispatch(operations.editFavoriteContact(editedFavoriteContact));
  };

  return (
    <Label>
      <InputCheckbox
        favorite={favorite}
        inputCheckHandler={editFavoriteContact}
      />
      <Span checkedType={favorite}></Span>
    </Label>
  );
};

EditContactFavorite.propTypes = {
  id: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
};

export default EditContactFavorite;

const Label = styled.label`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid ${accentColor};
  border-radius: 50%;
`;

const Span = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ checkedType }) => (checkedType ? accentColor : null)};
`;
