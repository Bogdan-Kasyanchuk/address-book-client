import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputFile = forwardRef((props, ref) => {
  const { inputHundler } = props;

  return (
    <Input accept="image/*" type="file" onChange={inputHundler} ref={ref} />
  );
});

InputFile.propTypes = {
  inputHundler: PropTypes.func,
};

export default InputFile;

const Input = styled.input`
  display: none;
`;
