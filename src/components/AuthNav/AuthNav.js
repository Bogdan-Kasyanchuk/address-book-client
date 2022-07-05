import styled from 'styled-components';
import Link from 'components/Link/Link';

const AuthNav = () => {
  return (
    <Ul>
      <Li>
        <Link to="/register" iconName="register">
          Register
        </Link>
      </Li>
      <Li>
        <Link to="/login" iconName="login">
          Login
        </Link>
      </Li>
    </Ul>
  );
};

export default AuthNav;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Li = styled.li`
  :first-child {
    margin-right: 20px;
  }
`;
