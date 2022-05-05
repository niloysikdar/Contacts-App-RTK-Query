import { useGetContactsQuery } from './services/contactsApi';

import './App.css';
import ContactDetail from './components/ContactDetail';

function App() {
  const { data, isLoading, isFetching, isSuccess, isError } =
    useGetContactsQuery();

  return (
    <div>
      <h2>RTK Query</h2>
      <br />
      {isFetching && <h2>Fetching .....</h2>}
      {isLoading && <h2>Loading .....</h2>}
      {isError && <h2>Error !</h2>}
      {isSuccess && (
        <div>
          {data.map((contact) => {
            return (
              <div className="data" key={contact.id}>
                <span>{contact.name}</span>
                <ContactDetail id={contact.id} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
