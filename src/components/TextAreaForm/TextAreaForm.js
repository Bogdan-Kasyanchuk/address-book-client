import PropTypes from 'prop-types';
import styled from 'styled-components';
import LabelInput from 'components/LabelInput/LabelInput';
import SpanInput from 'components/SpanInput/SpanInput';

const TextAreaForm = ({ name, defaultValue, register, placeholder, title }) => {
  return (
    <LabelInput>
      {name}
      <SpanInput>
        <Textarea
          defaultValue={defaultValue}
          {...register(`${name.toLowerCase()}`)}
          placeholder={placeholder}
          title={title}
        />
      </SpanInput>
    </LabelInput>
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
