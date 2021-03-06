import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ContactCreate from 'components/ContactCreate/ContactCreate';
import ContactFavorite from 'components/ContactFavorite/ContactFavorite';
import Filter from 'components/Filter/Filter';
import SubTitle from 'components/SubTitle/SubTitle';
import ContactsList from 'components/ContactsList/ContactsList';

const Contacts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Div>
        <ContactCreate />
        <ContactFavorite
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Div>
      <Div maxWidth="450px" alignItems="flex-end">
        <Filter />
      </Div>
      <SubTitle>Contacts list</SubTitle>
      <ContactsList searchParams={searchParams.get('favorite')} />
    </>
  );
};

export default Contacts;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: ${element => element.alignItems || 'center'};
  max-width: ${element => element.maxWidth || '360px'};
  margin: 0 auto 30px;
`;
