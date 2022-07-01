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
  autoComplete: PropTypes.string,
  formHundler: PropTypes.func,
  children: PropTypes.node,
};

export default Form;

const FormTag = styled.form`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;
