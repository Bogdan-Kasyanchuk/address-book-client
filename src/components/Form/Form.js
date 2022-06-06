import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form1 = styled.form`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
`;

const Form = ({ autoComplete, formHundler, children }) => {
  return (
    <Form1 autoComplete={autoComplete} onSubmit={formHundler}>
      {children}
    </Form1>
  );
};

Form.propTypes = {
  autoComplete: PropTypes.string,
  formHundler: PropTypes.func,
  children: PropTypes.node,
};

export default Form;
