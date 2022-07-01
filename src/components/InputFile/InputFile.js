import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: none;
`;

const InputFile = forwardRef((props, ref) => {
  const { inputHundler } = props;

  return (
    <Input accept="image/*" type="file" onChange={inputHundler} ref={ref} />
  );
});

Input.propTypes = {
  inputHundler: PropTypes.func,
};

export default InputFile;
