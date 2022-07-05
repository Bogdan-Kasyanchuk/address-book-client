import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as operations from 'redux/auth/auth-operations';
import Form from 'components/Form/Form';
import ButtonText from 'components/ButtonText/ButtonText';
import InputStandartForm from 'components/InputStandartForm/InputStandartForm';
import validation from 'service/validationService';
import { TITLE_FORM } from 'helpers/constants';

const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const buttonDisabled =
    watch('name') === '' ||
    watch('email') === '' ||
    watch('password') === '' ||
    watch('name') === undefined ||
    watch('email') === undefined ||
    watch('password') === undefined;

  const registerUser = credentials => {
    dispatch(operations.registerUser(credentials));
  };

  return (
    <Form autoComplete="off" formHundler={handleSubmit(registerUser)}>
      <InputStandartForm
        name="Name"
        type="text"
        register={register}
        validation={validation.name}
        placeholder="Enter name"
        title={TITLE_FORM.NAME}
        errors={errors}
      />
      <InputStandartForm
        name="Email"
        type="email"
        register={register}
        validation={validation.email}
        placeholder="Enter email"
        title={TITLE_FORM.EMAIL}
        errors={errors}
      />
      <InputStandartForm
        name="Password"
        type="password"
        register={register}
        validation={validation.password}
        placeholder="Enter password"
        title={TITLE_FORM.PASSWORD}
        errors={errors}
      />
      <ButtonText disabled={buttonDisabled} type="submit">
        Register
      </ButtonText>
    </Form>
  );
};

export default Register;
