import { useGetContactQuery } from '../services/contactsApi';

const ContactDetail = ({ id }: { id: number }) => {
  const { data } = useGetContactQuery(id);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default ContactDetail;
