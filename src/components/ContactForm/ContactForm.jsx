import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useAddContactMutation,
  useGetContactsQuery
} from '../../redux/Api';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';


export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

    const handleChange = evt => {
     
     if (evt.target.name === "name") {
         setName(evt.target.value);
        };
     
     if (evt.target.name === "number") {
            setNumber(evt.target.value);
        };
    };
    
 const  handleSubmit = async evt => {
   evt.preventDefault();
   if (data.find(contact =>
        contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())
   ) {
       reset();
       return toast.warning(`${name} is alredy in contacts`);
       
       }
   
   if (name && number) {
     await addContact({ name: name, phone: number });
      toast.success(`Contact created`);
          //  console.log(addedContact);
       reset();
    }
       
  };

 const reset = () => {
     setName("");
     setNumber("");
    };
    
  
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          placeholder={"Enter name"}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.
         For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          placeholder={"Enter number"}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes,
         parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
      <ToastContainer theme="colored" />
    </form>
  );
};


ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}