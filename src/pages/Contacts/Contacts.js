import styled from 'styled-components';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';

const Section = styled.section`
  padding-top: 74px;
`;

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
    <Section>
      <Container>
        <Div>
          <ContactForm />
        </Div>
        <Div>
          <H2>FILTER CONTACTS</H2>
          <Filter />
        </Div>
        <Div>
          <H2>CONTACTS LIST</H2>
          <ContactList />
        </Div>
      </Container>
    </Section>
  );
};

export default Contacts;
