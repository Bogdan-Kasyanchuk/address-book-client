import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { size } from 'styles/variables';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <DivHeader>
      <Header>
        <Navigation />
        <Logo children="Addres book" />
        <Div> {isLoggedIn ? <UserMenu /> : <AuthNav />}</Div>
      </Header>
    </DivHeader>
  );
};

export default AppBar;

const DivHeader = styled.div`
  background-color: #282828;
  border-bottom: 2px solid #ff6600;

  position: fixed;
  top: 0;
  z-index: 2000;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding: 10px;

  ${size.tabletMin} {
    padding: 15px 15px;
  }

  ${size.laptopMin} {
    padding: 20px 20px;
  }
`;

const Div = styled.div`
  flex-basis: calc(100% / 3);
`;
