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

const Textarea = styled.textarea`
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

const TextAreaForm = ({ name, defaultValue, register, placeholder, title }) => {
  return (
    <Label>
      {name}
      <Span>
        <Textarea
          defaultValue={defaultValue}
          {...register(`${name.toLowerCase()}`)}
          placeholder={placeholder}
          title={title}
        />
      </Span>
    </Label>
  );
};

TextAreaForm.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

export default TextAreaForm;
