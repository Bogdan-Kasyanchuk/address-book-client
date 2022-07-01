import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonGroup = ({ children }) => {
  return <Div>{children}</Div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
};

export default ButtonGroup;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
