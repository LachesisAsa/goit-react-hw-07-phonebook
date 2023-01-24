import { FormContainer, Input, Button, Label } from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';
import { IoMdPersonAdd } from 'react-icons/io';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name, number };
    for (let item of contacts) {
      if (contact.name.toLowerCase() === item.name.toLowerCase()) {
        toast.error(`${contact.name} is already in contacts`);
        resetForm();
        return;
      }
    }
    dispatch(addContact(contact))
      .then(response =>
        toast.success(
          `${response.payload.name} was added to your List of Contacts`
        )
      )
      .catch(() => toast.error(`Something wrong`));
    resetForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  return (
    <FormContainer autoComplete="of" onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name:
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Enter full name or nick"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="number">
        Number:
        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="+380-00-000-00-00"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">
        Add
        <IoMdPersonAdd size={16} />
      </Button>
    </FormContainer>
  );
};

export default ContactForm;