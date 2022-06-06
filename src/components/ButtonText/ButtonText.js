import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  padding: 2px 4px;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
  :disabled {
    border: 2px solid #777777;
  }
  :disabled:hover {
    border: 2px solid #777777;
    background-color: #777777;
    color: #585858;
    cursor: not-allowed;
  }
`;

const ButtonText = ({ disabled, type, buttonHundler, children }) => {
  return (
    <Button disabled={disabled} type={type} onClick={buttonHundler}>
      {children}
    </Button>
  );
};

ButtonText.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  buttonHundler: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonText;
