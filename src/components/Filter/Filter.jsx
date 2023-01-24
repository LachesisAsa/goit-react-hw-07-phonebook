import { Container, Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filtersSlice';
import { selectFilter } from 'redux/filter/selectors';
import { selectContacts } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const handleOnChange = e => dispatch(setFilter(e.target.value));

  return (
    <Container>
      <Label htmlFor="filter">
        Find contacts by name:
        <Input
          name="filter"
          type="text"
          value={filter}
          onChange={handleOnChange}
          disabled={contacts.length < 2 && !filter}
        />
      </Label>
    </Container>
  );
};

export default Filter;