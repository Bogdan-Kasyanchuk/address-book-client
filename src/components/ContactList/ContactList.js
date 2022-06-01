import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import * as operations from 'redux/contacts/contacts-operations';
import ContactListItem from 'components/ContactList/ContactListItem';

const Button = styled.button`
  :not(:last-child) {
    margin-right: 30px;
  }
  width: 80px;
  display: inline-block;
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
`;

const ContactList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  const handlerFavorite = () => {
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
      <Button type="button" onClick={handlerFavorite}>
        Favorite
      </Button>
      <ol>
        {filteredContacts.map(
          (element, index) =>
            (searchParams.get('favorite') && !element.favorite) || (
              <ContactListItem
                key={element._id}
                element={element}
                index={index}
              />
            ),
        )}
      </ol>
    </>
  );
};

export default ContactList;
