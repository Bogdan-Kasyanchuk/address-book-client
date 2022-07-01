import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #000000;
  padding: 6px;
  font-size: 20px;
  border: 1px solid #ffffff;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #ffffff;
  line-height: 1;
  text-transform: uppercase;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
