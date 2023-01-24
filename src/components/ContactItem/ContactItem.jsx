import { Item, Button, Number, Contact, Name } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdDelete, MdAutoDelete } from 'react-icons/md';

const ContactItem = ({ id, name, number }) => {
  const [deletingId, setDeletingId] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleDelete = () => {
    setDeletingId(id);
    dispatch(deleteContact(id))
      .then(response => {
        toast.error(
          `Contact ${response.payload.name} was deleted from your List of Contacts`
        );
      })
      .catch(() => toast.error(`Something wrong`));
  };
  const isDeleting = isLoading && id === deletingId;

  return (
    <Item>
      <Contact>
        <FaPhone />
        <Name>{name}:</Name>
        <Number>{number}</Number>
      </Contact>
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? <MdAutoDelete size={16} /> : <MdDelete size={16} />}
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;