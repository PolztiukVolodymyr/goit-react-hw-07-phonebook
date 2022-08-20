import { useState } from 'react';
import css from './App.module.css';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter"
import { useGetContactsQuery} from "../../redux/Api"


export function App() {

  const [filter, setFilter] = useState('');
	const { data } = useGetContactsQuery();

 	const  isVisibleContacts = () => {
	
		if (data) {
      if (data.length !== 0) {
       
        return data.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
			}
		}
		return;
  };
  
  const changeFilter = evt => {
      setFilter(evt.target.value);
  };

  
  return (
        
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.wrap}>
        <ContactForm />
      </div>
      <h2 className={css.titleSection}>Contacts</h2>
        
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={isVisibleContacts()} />
          
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      {/* {filteredContacts.length
            ? <ContactList
              contacts={filteredContacts}
              onDeleteContact={deleteContacts} />
            : null} */}
    </div>
  );
};