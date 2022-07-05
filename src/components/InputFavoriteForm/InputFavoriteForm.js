import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputCheckbox from 'components/InputCheckbox/InputCheckbox';
import { accentColor, bgColor } from 'styles/variables';

const InputFavoriteForm = ({ name, register }) => {
  const [check, setCheck] = useState(false);

  const checkHandler = ({ target }) => {
    setCheck(target.checked);
  };

  return (
    <Label>
      {name}
      <SpanInput>
        <InputCheckbox
          name={name}
          register={register}
          inputCheckHandler={checkHandler}
        />
        <Span checkedType={check}></Span>
      </SpanInput>
    </Label>
  );
};

InputFavoriteForm.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputFavoriteForm;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
`;

const SpanInput = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid ${accentColor};
  border-radius: 50%;
`;

const Span = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ checkedType }) =>
    checkedType ? accentColor : bgColor};
`;
