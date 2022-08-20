import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDeleteContactMutation } from "../../redux/Api";
import css from "./ContactList.module.css";

const ContactItem = ({  id, name, phone }) => {
   
    const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();
    isDeliting && toast.success(`Contact deleted`, { theme: "dark" });
  return (
       
        <li key={id} className={css.item}>
          <p>
            {name}: {phone}
          </p>
           <button type="button" onClick={() => deleteContact(id)} disabled={isDeliting}>
              {isDeliting ? "Deletind" : "Delete"}
           </button>
        </li>
           
   );
};

export default ContactItem;