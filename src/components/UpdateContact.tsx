import { Contact } from '../models/contact.model';
import { useUpdateContactMutation } from '../services/contactsApi';

const updatedContact: Contact = {
  id: 4,
  name: 'New Updated User',
  email: 'newuser@gmail.com',
};

const UpdateContact = () => {
  const [updateContact] = useUpdateContactMutation();

  const updateHandler = async () => {
    await updateContact(updatedContact);
  };

  return <button onClick={updateHandler}>Update Contact</button>;
};

export default UpdateContact;
