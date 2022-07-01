import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-action';
import LabelInput from 'components/LabelInput/LabelInput';
import InputStandart from 'components/InputStandart/InputStandart';
import ButtonIconText from 'components/ButtonIconText/ButtonIconText';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterContact = event => {
    dispatch(actions.filterContact(event.target.value));
  };

  const filterReset = () => {
    dispatch(actions.filterContact(''));
  };

  return (
    <>
      <LabelInput marginBottom="0" marginRight="20px">
        Find by name
        <InputStandart
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
