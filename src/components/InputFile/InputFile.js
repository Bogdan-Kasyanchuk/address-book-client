import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: none;
`;

const InputFile = forwardRef((props, ref) => {
  const { accept, type, inputHundler } = props;

  return (
    <Input accept={accept} type={type} onChange={inputHundler} ref={ref} />
  );
});

Input.propTypes = {
  accept: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default InputFile;
