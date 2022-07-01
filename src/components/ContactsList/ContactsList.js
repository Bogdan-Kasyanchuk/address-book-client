import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { size } from 'styles/variables';

const ContactsList = ({ searchParams }) => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <Ul>
      {filteredContacts.map(
        (element, index) =>
          (searchParams && !element.favorite) || (
            <ContactItem key={element._id} element={element} index={index} />
          ),
      )}
    </Ul>
  );
};

ContactsList.propTypes = {
  searchParams: PropTypes.any,
};

export default ContactsList;

const Ul = styled.ul`
  margin-left: -20px;
  margin-top: -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${size.tabletMin} {
    display: flex;
  }
`;
