import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import { size } from 'styles/variables';

const ButtonIconText = ({
  disabled,
  type,
  buttonHundler,
  iconName,
  displayMobileMax = true,
  children,
}) => {
  return (
    <Button disabled={disabled} type={type} onClick={buttonHundler}>
      <Icon iconName={iconName} />
      <Span displayMobileMax={displayMobileMax}>{children}</Span>
    </Button>
  );
};

ButtonIconText.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  buttonHundler: PropTypes.func,
  displayMobileMax: PropTypes.bool,
  children: PropTypes.node,
};

export default ButtonIconText;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #000000;
  padding: 6px;
  font-size: 20px;
  border: 1px solid #ffffff;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #ffffff;
  line-height: 1;
  :hover,
  :focus-visible {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  .icon {
    fill: currentColor;
    stroke: currentColor;
    pointer-events: none;
  }
`;

const Span = styled.span`
  ${size.mobileMax} {
    display: none;
  }

  display: ${({ displayMobileMax }) => (displayMobileMax ? null : 'none')};

  margin-left: 8px;
  pointer-events: none;
`;
