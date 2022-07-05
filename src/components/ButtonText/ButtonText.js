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
  text-transform: uppercase;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
