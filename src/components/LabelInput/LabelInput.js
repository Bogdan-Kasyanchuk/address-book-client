import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelInput = ({ children, marginBottom, marginRight }) => {
  return (
    <Label marginBottom={marginBottom} marginRight={marginRight}>
      {children}
    </Label>
  );
};

LabelInput.propTypes = {
  children: PropTypes.node,
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
};

export default LabelInput;

const Label = styled.label`
  display: block;
  margin-bottom: ${element => element.marginBottom || '20px'};
  margin-right: ${element => element.marginRight || null};
  font-size: 20px;
  color: #ffffff;
  :focus-within {
    color: #ff6600;
  }
`;
