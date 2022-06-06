import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  margin-right: 33px;
  margin-top: 5px;
  width: 78%;
  color: #202020;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  outline: none;
  :focus {
    border-color: #ff6600;
  }
`;

const InputStandart = ({
  autoComplete,
  type,
  value,
  placeholder,
  inputHundler,
}) => {
  return (
    <Input
      autoComplete={autoComplete}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={inputHundler}
    />
  );
};

InputStandart.propTypes = {
  autoComplete: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputStandart;
