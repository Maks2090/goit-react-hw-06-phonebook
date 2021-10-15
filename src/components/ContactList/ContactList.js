import css from '../ContactList/ContactList.module.css';
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../redux/actions";

import {getVisibleContacts } from '../../redux/selectors'


 function ContactList() {
   
    const dispatch = useDispatch();
    const visibleContacts = useSelector(getVisibleContacts);
   
    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => {
                return(
                     <li key={contact.id} className={css.item} >

                        {contact.name} : {contact.number}

                        <button
                            className={css.button}
                            type="submit"
                            onClick={() => {
                                dispatch(actions.deleteContact(contact));;
                            }}
                        >
                            Delete
                        </button>
                    </li>
                );
               
            })}
        </ul>
    );
}



export default ContactList