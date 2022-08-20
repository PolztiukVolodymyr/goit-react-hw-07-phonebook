import  ContactItem  from "./ContactItem";
import css from "./ContactList.module.css";

const ContactList = ({contacts}) => {

  return (
    <ul className={css.list}>
      {contacts && contacts.map(({ id, name, phone })=> (
         <ContactItem
            key={id}
            id={id}
            data={contacts}
            name={name}
            phone={phone}
          />
      ))}
     </ul>
  );
};

export default ContactList;







// import PropTypes from 'prop-types';
// import css from "./ContactList.module.css";
// import {  useDeleteContactMutation } from "../../redux/Api";


// const ContactList = ({contacts}) => {

//   const [deleteContact, { isLoading }] = useDeleteContactMutation();
//   console.log("isLoading:", isLoading );
//   return (
//     <ul className={css.list}>
//       {contacts && contacts.map(({ id, name, phone }) => (
//         <li key={id} className={css.item}>
//           <p>
//             {name}: {phone}
//           </p>
//           <button type="button" onClick={() => deleteContact(id)}>
//            {isLoading ? "Deletind" : "Delete"}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string
//     })
//   ),
//   onDeleteContact: PropTypes.func,
// };