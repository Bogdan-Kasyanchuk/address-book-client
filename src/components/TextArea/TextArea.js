import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextAreaForm = ({ name, defaultValue, register, placeholder, title }) => {
  return (
    <Textarea
      defaultValue={defaultValue}
      {...register(`${name.toLowerCase()}`)}
      placeholder={placeholder}
      title={title}
    />
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

const Textarea = styled.textarea`
  display: block;
  resize: none;
`;
