import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import { size } from 'styles/variables';

const Logo = ({ children }) => {
  return (
    <Div>
      <Icon iconName="logo" width="34px" height="34px" />
      <H1>{children}</H1>
    </Div>
  );
};

Logo.propTypes = {
  children: PropTypes.node,
};

export default Logo;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: calc(100% / 3);
  color: #ff6600;

  .icon {
    stroke: currentColor;
  }
`;

const H1 = styled.h1`
  ${size.mobileMax} {
    display: none;
  }

  margin-left: 10px;
  font-size: 16px;
  line-height: 1.06;
  text-transform: uppercase;

  ${size.laptopMax} {
    width: 60px;
  }

  ${size.desktopMin} {
    font-size: 34px;
    line-height: 1;
  }
`;
