import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpanInput = ({ children }) => {
  return <Span>{children}</Span>;
};

SpanInput.propTypes = {
  children: PropTypes.node,
};

export default SpanInput;

const Span = styled.span`
  position: relative;
  display: block;
  margin-top: 8px;
`;
