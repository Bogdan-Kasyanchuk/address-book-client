import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import { size } from 'styles/variables';

const ButtonIconText = ({
  type,
  buttonHundler,
  iconName,
  displayMobileMax = true,
  children,
}) => {
  return (
    <Button type={type} onClick={buttonHundler}>
      <Icon iconName={iconName} />
      <Span displayMobileMax={displayMobileMax}>{children}</Span>
    </Button>
  );
};

ButtonIconText.propTypes = {
  type: PropTypes.string.isRequired,
  buttonHundler: PropTypes.func,
  iconName: PropTypes.string.isRequired,
  displayMobileMax: PropTypes.bool,
  children: PropTypes.node,
};

export default ButtonIconText;

const Button = styled.button`
  display: flex;
  align-items: center;

  .icon {
    fill: currentColor;
    stroke: currentColor;
    pointer-events: none;
  }
`;

const Span = styled.span`
  margin-left: 8px;
  pointer-events: none;

  ${size.mobileMax} {
    display: none;
  }

  display: ${({ displayMobileMax }) => (displayMobileMax ? null : 'none')};
`;
