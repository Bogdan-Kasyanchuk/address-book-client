import styled from 'styled-components';
import ContactCreate from 'components/ContactCreate/ContactCreate';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

const Div = styled.div`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`;

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ff6600;
  text-align: center;
`;

const Contacts = () => {
  return (
    <>
      <Div>
        <ContactCreate />
      </Div>
      <Div>
        <H2>Filter contacts</H2>
        <Filter />
      </Div>
      <Div>
        <H2>Contacts list</H2>
        <ContactsList />
      </Div>
    </>
  );
};

export default Contacts;
