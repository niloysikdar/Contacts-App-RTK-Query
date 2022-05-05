import { useDeleteContactMutation } from '../services/contactsApi';

const DeleteContact = () => {
  const [deleteContact] = useDeleteContactMutation();

  const deleteHandler = async () => {
    await deleteContact(4);
  };

  return <button onClick={deleteHandler}>Delete Contact</button>;
};

export default DeleteContact;
