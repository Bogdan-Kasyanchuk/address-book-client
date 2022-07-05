import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import { size, firstColor, secondColor, accentColor } from 'styles/variables';

const Link = ({ to, iconName, children }) => {
  return (
    <CustomNavLink to={to}>
      <Icon iconName={iconName} />
      <Span>{children}</Span>
    </CustomNavLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Link;

const CustomNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 6px;
  font-size: 20px;
  color: ${secondColor};
  border: 1px solid ${firstColor};
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${firstColor};

  :hover,
  &.active {
    color: ${firstColor};
    border-color: ${accentColor};
    background-color: ${accentColor};
  }

  .icon {
    fill: currentColor;
    stroke: currentColor;
  }
`;

const Span = styled.span`
  margin-left: 8px;

  ${size.mobileMax} {
    display: none;
  }
`;
