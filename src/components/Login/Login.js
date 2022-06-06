import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as operations from 'redux/auth/auth-operations';
import ButtonText from 'components/ButtonText/ButtonText';
import Form from 'components/Form/Form';
import InputForm from 'components/InputForm/InputForm';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const buttonDisabled =
    watch('email') === '' ||
    watch('password') === '' ||
    watch('email') === undefined ||
    watch('password') === undefined;

  const logInUser = credentials => {
    dispatch(operations.logInUser(credentials));
  };

  return (
    <Form autoComplete="off" formHundler={handleSubmit(logInUser)}>
      <InputForm
        name="Email"
        type="email"
        register={register}
        validation={validation.email}
        placeholder="Enter email"
        title={TITLE_FORM.EMAIL}
        errors={errors}
      />
      <InputForm
        name="Password"
        type="password"
        register={register}
        validation={validation.password}
        placeholder="Enter password"
        title={TITLE_FORM.PASSWORD}
        errors={errors}
      />
      <ButtonText disabled={buttonDisabled} type="submit">
        Log In
      </ButtonText>
    </Form>
  );
};

export default Login;
