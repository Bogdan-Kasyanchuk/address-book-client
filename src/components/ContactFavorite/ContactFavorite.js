import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as operations from 'redux/contacts/contacts-operations';
import ButtonIconText from 'components/ButtonIconText/ButtonIconText';

const ContactFavorite = ({ searchParams, setSearchParams }) => {
  const dispatch = useDispatch();

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
    <ButtonIconText
      type="button"
      buttonHundler={favoriteContacts}
      iconName="favorite"
    >
      Favorite
    </ButtonIconText>
  );
};

ContactFavorite.propTypes = {
  searchParams: PropTypes.object,
  setSearchParams: PropTypes.func,
};

export default ContactFavorite;
