import PropTypes from 'prop-types';

const InputStandart = ({
  type,
  defaultValue,
  register,
  name,
  validation,
  placeholder,
  title,
}) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      {...register(`${name.toLowerCase()}`, validation)}
      placeholder={placeholder}
      title={title}
    />
  );
};

InputStandart.propTypes = {
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string.isRequired,
  validation: PropTypes.object,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

export default InputStandart;
