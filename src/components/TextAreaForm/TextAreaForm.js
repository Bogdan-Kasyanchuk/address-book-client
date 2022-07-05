import PropTypes from 'prop-types';
import LabelInput from 'components/LabelInput/LabelInput';
import TextArea from 'components/TextArea/TextArea';

const TextAreaForm = ({ name, defaultValue, register, placeholder, title }) => {
  return (
    <LabelInput>
      {name}
      <TextArea
        defaultValue={defaultValue}
        register={register}
        name={name}
        placeholder={placeholder}
        title={title}
      />
    </LabelInput>
  );
};

TextAreaForm.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextAreaForm;
