import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import Link from 'components/Link/Link';
import { size } from 'styles/variables';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Ul>
      <Li>
        <Link to="/" iconName="home">
          Home
        </Link>
      </Li>
      {isLoggedIn && (
        <Li>
          <Link to="/contacts" iconName="contacts">
            Contacts
          </Link>
        </Li>
      )}
    </Ul>
  );
};

export default Navigation;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-basis: calc(100% / 3);

  ${size.laptopMin} {
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;

const Li = styled.li`
  :first-child {
    margin-right: 15px;

    ${size.tabletMin} {
      margin-right: 20px;
    }
  }
`;
