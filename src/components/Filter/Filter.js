import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-action';
import LabelInput from 'components/LabelInput/LabelInput';
import InputFilter from 'components/InputFilter/InputFilter';
import ButtonIconText from 'components/ButtonIconText/ButtonIconText';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterContact = ({ target }) => {
    dispatch(actions.filterContact(target.value));
  };

  const filterReset = () => {
    dispatch(actions.filterContact(''));
  };

  return (
    <>
      <LabelInput marginBottom="0" marginRight="20px">
        Find by name
        <InputFilter
          autoComplete="off"
          type="text"
          value={filter}
          placeholder="Enter name"
          inputHundler={filterContact}
        />
      </LabelInput>
      <ButtonIconText
        disabled={!filter}
        type="button"
        buttonHundler={filterReset}
        iconName="cleaner"
      >
        Clear
      </ButtonIconText>
    </>
  );
};

export default Filter;
