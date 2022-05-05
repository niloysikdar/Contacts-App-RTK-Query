import { Contact } from '../models/contact.model';
import { useAddContactMutation } from '../services/contactsApi';

const newContact: Contact = {
  id: 4,
  name: 'New Name',
  email: 'newemail@gmail.com',
};

const AddContact = () => {
  const [addContact] = useAddContactMutation();

  // const { refetch } = useGetContactsQuery();

  const addHandler = async () => {
    await addContact(newContact);
    // refetch();
  };

  return <button onClick={addHandler}>Add Contact</button>;
};

export default AddContact;
