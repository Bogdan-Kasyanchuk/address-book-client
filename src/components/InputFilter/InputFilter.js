import PropTypes from 'prop-types';

const InputStandart = ({
  autoComplete,
  type,
  value,
  placeholder,
  inputHundler,
}) => {
  return (
    <input
      autoComplete={autoComplete}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={inputHundler}
    />
  );
};

InputStandart.propTypes = {
  autoComplete: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  inputHundler: PropTypes.func,
};

export default InputStandart;
