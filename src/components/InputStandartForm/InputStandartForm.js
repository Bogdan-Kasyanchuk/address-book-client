import PropTypes from 'prop-types';
import styled from 'styled-components';
import LabelInput from 'components/LabelInput/LabelInput';
import InputStandart from 'components/InputStandart/InputStandart';
import { errorColor } from 'styles/variables';

const InputStandartForm = ({
  name,
  type,
  defaultValue,
  register,
  validation,
  placeholder,
  title,
  errors,
}) => {
  return (
    <LabelInput>
      {name}
      <InputStandart
        type={type}
        defaultValue={defaultValue}
        register={register}
        name={name}
        validation={validation}
        placeholder={placeholder}
        title={title}
      />
      {errors && <P>{errors?.[name.toLowerCase()]?.message}</P>}
    </LabelInput>
  );
};

InputStandartForm.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

export default InputStandartForm;

const P = styled.p`
  position: absolute;
  top: 65px;
  font-size: 12px;
  color: ${errorColor};
`;
