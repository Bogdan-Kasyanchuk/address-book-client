import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import * as operations from 'redux/contacts/contacts-operations';
import ContactItem from 'components/ContactItem/ContactItem';
import ButtonText from 'components/ButtonText/ButtonText';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  const [searchParams, setSearchParams] = useSearchParams();

  const favoriteContacts = () => {
    if (searchParams.get('favorite')) {
      setSearchParams({});
    } else {
      setSearchParams({ favorite: true });
    }
  };

  useEffect(() => {
    if (searchParams.get('favorite')) {
      dispatch(operations.getContact(searchParams.get('favorite')));
    } else {
      dispatch(operations.getContact());
    }
  }, [searchParams, dispatch]);

  return (
    <>
      <ButtonText type="button" buttonHundler={favoriteContacts}>
        Favorite
      </ButtonText>
      <ul>
        {filteredContacts.map(
          (element, index) =>
            (searchParams.get('favorite') && !element.favorite) || (
              <ContactItem key={element._id} element={element} index={index} />
            ),
        )}
      </ul>
    </>
  );
};

export default ContactsList;
