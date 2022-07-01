import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import { size } from 'styles/variables';

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
  iconName: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Link;

const CustomNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #000000;
  padding: 6px;
  font-size: 20px;
  border: 1px solid #ffffff;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #ffffff;

  :hover,
  &.active {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }

  .icon {
    fill: currentColor;
    stroke: currentColor;
  }
`;

const Span = styled.span`
  ${size.mobileMax} {
    display: none;
  }

  margin-left: 8px;
`;
