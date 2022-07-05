import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = ({ autoComplete, formHundler, children }) => {
  return (
    <FormTag autoComplete={autoComplete} onSubmit={formHundler}>
      {children}
    </FormTag>
  );
};

Form.propTypes = {
  autoComplete: PropTypes.string.isRequired,
  formHundler: PropTypes.func,
  children: PropTypes.node,
};

export default Form;

const FormTag = styled.form`
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
`;
