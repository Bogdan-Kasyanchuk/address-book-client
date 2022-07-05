import PropTypes from 'prop-types';
import styled from 'styled-components';
import { accentColor } from 'styles/variables';

const SubTitle = ({ children }) => {
  return <H2>{children}</H2>;
};

SubTitle.propTypes = {
  children: PropTypes.node,
};

export default SubTitle;

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${accentColor};
  text-align: center;
  text-transform: uppercase;
`;
