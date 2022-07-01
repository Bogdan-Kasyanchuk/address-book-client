import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { visuallyHidden } from 'styles/utils';

const InputCheckboxForm = ({ name, register, title }) => {
  const [check, setCheck] = useState(false);

  const checkHandler = event => {
    setCheck(event.target.checked);
  };

  return (
    <Label>
      {name}
      <SpanInput>
        <Input
          type="checkbox"
          {...register(`${name.toLowerCase()}`)}
          title={title}
          onChange={checkHandler}
        />
        <Span checkedType={check}></Span>
      </SpanInput>
    </Label>
  );
};

InputCheckboxForm.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
  title: PropTypes.string,
};

export default InputCheckboxForm;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
  color: #ffffff;
`;

const SpanInput = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid #ff6600;
  border-radius: 50%;
`;

const Input = styled.input`
  ${visuallyHidden}
`;

const Span = styled.span`
  width: 16px;
  height: 16px;
  background-color: ${({ checkedType }) =>
    checkedType ? '#ff6600' : '#444444'};
  border-radius: 50%;
`;
