import axios from 'axios';

axios.defaults.baseURL = 'https://63cf9050e52f587829a0a583.mockapi.io/api/v1/';

export const getContacts = async () => {
  const response = await axios.get('/contacts');

  return response.data;
};

export const addContact = async contact => {
  const response = await axios.post('/contacts', contact);

  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};