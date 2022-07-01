import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Input = styled.input`
  width: 100%;
  margin-top: 8px;
  color: #000000;
  padding: 4px 8px;
  font-size: 20px;
  border: 2px solid #ffffff;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  line-height: 1.1;
  :focus {
    border-color: #ff6600;
  }
`;
