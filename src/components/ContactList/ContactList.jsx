import PropTypes from 'prop-types';
import css from "./ContactList.module.css";
import {  useDeleteContactMutation } from "../../redux/Api";


const ContactList = ({contacts}) => {

const [deleteContact] = useDeleteContactMutation();
 
  return (
    <ul className={css.list}>
      {contacts && contacts.map(({ id, name, phone }) => (
        <li key={id} className={css.item}>
          <p>
            {name}: {phone}
          </p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string
    })
  ),
  onDeleteContact: PropTypes.func,
};

