import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getFilter } from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-action';
import InputStandart from 'components/InputStandart/InputStandart';
import ButtonText from 'components/ButtonText/ButtonText';

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 450px;
`;

const Label = styled.label`
  font-size: 18px;
`;

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
    <Div>
      <Label>
        Find contacts by name
        <InputStandart
          autoComplete="off"
          type="text"
          value={filter}
          placeholder="Enter name"
          inputHundler={filterContact}
        />
      </Label>
      <ButtonText disabled={!filter} type="button" buttonHundler={filterReset}>
        Clear
      </ButtonText>
    </Div>
  );
};

export default Filter;
