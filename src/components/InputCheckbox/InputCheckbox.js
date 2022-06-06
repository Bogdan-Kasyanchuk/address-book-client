import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  display: block;
  color: #000000;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #000000;
  outline: none;
  :focus {
    border-color: #000000;
  }
`;

const InputCheckbox = ({ type, checked, inputHundler }) => {
  return <Input type={type} checked={checked} onChange={inputHundler} />;
};

InputCheckbox.propTypes = {
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputCheckbox;
