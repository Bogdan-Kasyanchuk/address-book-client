import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as operations from 'redux/auth/auth-operations';
import Container from 'components/Container/Container';

const Section = styled.section`
  padding-top: 74px;
`;

const Form = styled.form`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
`;

const Label = styled.label`
  font-size: 18px;
`;

const Span = styled.span`
  position: relative;
  display: block;
  margin-top: 5px;
  margin-bottom: 26px;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  color: #202020;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  outline: none;
  :focus {
    border-color: #ff6600;
  }
`;

const P = styled.p`
  top: 40px;
  position: absolute;
  font-size: 12px;
  color: #ff6600;
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
  :disabled {
    border: 2px solid #777777;
  }
  :disabled:hover {
    border: 2px solid #777777;
    background-color: #777777;
    color: #585858;
    cursor: not-allowed;
  }
`;

const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const emptyInput =
    watch('name') === '' ||
    watch('email') === '' ||
    watch('password') === '' ||
    watch('name') === undefined ||
    watch('email') === undefined ||
    watch('password') === undefined;

  const handlerCreateUser = credentials => {
    dispatch(operations.registerUser(credentials));
  };

  return (
    <Section>
      <Container>
        <Form autoComplete="on" onSubmit={handleSubmit(handlerCreateUser)}>
          <Label>
            Name
            <Span>
              <Input
                type="text"
                {...register('name', {
                  required: 'The name is a required field!',
                  minLength: {
                    value: 3,
                    message: 'The name must contain min 3 characters!',
                  },
                  pattern: {
                    value:
                      /[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ']+(([' -][a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ' ])?[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ']*)*$/,
                    message: 'Enter the desired name format!',
                  },
                })}
                placeholder="Enter name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example: Adrian, Jacob Mercer, Charles de Batz, de Castelmore, d'Artagnan, Van-Dame"
              />
              {errors?.name && <P>{errors?.name?.message || 'Error!'}</P>}
            </Span>
          </Label>
          <Label>
            Email
            <Span>
              <Input
                type="email"
                {...register('email', {
                  required: 'The email is a required field!',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Enter the desired email format!',
                  },
                })}
                placeholder="Enter email"
                title="Email can contain numbers and letters, dashes and under dashes. For example: pibij62253@mail.com, pSDi-j62_2@mail.com"
              />
              {errors?.email && <P>{errors?.email?.message || 'Error!'}</P>}
            </Span>
          </Label>
          <Label>
            Password
            <Span>
              <Input
                type="password"
                {...register('password', {
                  required: 'The password is a required field!',
                  minLength: {
                    value: 8,
                    message: 'The password must contain min 8 characters!',
                  },
                  pattern: {
                    value:
                      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{8,}/,
                    message: 'Enter the desired password format!',
                  },
                })}
                placeholder="Enter password"
                title="The password must be digits and letters and capital letters and special characters. For example: bg2H3p@gR8"
              />
              {errors?.password && (
                <P>{errors?.password?.message || 'Error'}</P>
              )}
            </Span>
          </Label>
          <Button disabled={emptyInput} type="submit">
            Sign Up
          </Button>
        </Form>
      </Container>
    </Section>
  );
};

export default Register;
