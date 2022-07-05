import PropTypes from 'prop-types';
import styled from 'styled-components';
import { accentColor } from 'styles/variables';

const LabelInput = ({ marginBottom, marginRight, children }) => {
  return (
    <Label marginBottom={marginBottom} marginRight={marginRight}>
      {children}
    </Label>
  );
};

LabelInput.propTypes = {
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
  children: PropTypes.node,
};

export default LabelInput;

const Label = styled.label`
  position: relative;
  display: block;
  margin-right: ${element => element.marginRight || null};
  margin-bottom: ${element => element.marginBottom || '20px'};
  font-size: 20px;

  :focus-within {
    color: ${accentColor};
  }
`;
