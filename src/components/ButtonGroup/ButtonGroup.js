import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonGroup = ({ children }) => {
  return <Div>{children}</Div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
};

export default ButtonGroup;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
