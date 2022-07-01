import PropTypes from 'prop-types';
import styled from 'styled-components';
import LabelInput from 'components/LabelInput/LabelInput';
import SpanInput from 'components/SpanInput/SpanInput';

const InputForm = ({
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
      <SpanInput>
        <Input
          type={type}
          defaultValue={defaultValue}
          {...register(`${name.toLowerCase()}`, validation)}
          placeholder={placeholder}
          title={title}
        />
        {errors && <P>{errors?.[name.toLowerCase()]?.message}</P>}
      </SpanInput>
    </LabelInput>
  );
};

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func,
  validation: PropTypes.object,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  errors: PropTypes.object,
};

export default InputForm;

const Input = styled.input`
  width: 100%;
  color: #000000;
  padding: 4px 8px;
  font-size: 20px;
  border: 2px solid #ffffff;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  line-height: 1.1;
  :focus {
    border-color: #ff6600;
  }
`;

const P = styled.p`
  top: 45px;
  position: absolute;
  font-size: 12px;
  color: #d40000;
`;
