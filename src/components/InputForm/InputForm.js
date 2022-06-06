import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 18px;
  color: #000000;
`;

const Span = styled.span`
  position: relative;
  display: block;
  margin-top: 5px;
  margin-bottom: 26px;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  color: #000000;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #000000;
  outline: none;
  :focus {
    border-color: #000000;
  }
`;

const P1 = styled.p`
  top: 40px;
  position: absolute;
  font-size: 12px;
  color: #000000;
`;

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
    <Label>
      {name}
      <Span>
        <Input
          type={type}
          defaultValue={defaultValue}
          {...register(`${name.toLowerCase()}`, validation)}
          placeholder={placeholder}
          title={title}
        />
        {errors && <P1>{errors?.[name.toLowerCase()]?.message}</P1>}
      </Span>
    </Label>
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
