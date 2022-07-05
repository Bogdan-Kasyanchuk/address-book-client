import PropTypes from 'prop-types';
import styled from 'styled-components';
import { visuallyHidden } from 'styles/utils';

const InputCheckbox = ({ register, name, favorite, inputCheckHandler }) => {
  return (
    <Input
      type="checkbox"
      {...(register && { ...register(`${name.toLowerCase()}`) })}
      checked={favorite}
      onChange={inputCheckHandler}
    />
  );
};

InputCheckbox.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  favorite: PropTypes.bool,
  inputCheckHandler: PropTypes.func,
};

export default InputCheckbox;

const Input = styled.input`
  ${visuallyHidden}
`;
