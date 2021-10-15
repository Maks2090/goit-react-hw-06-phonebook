import { useSelector } from "react-redux";
import { getContacts } from "./redux/selectors"
import './App.css';
import ContactForm from './components/ContactFotm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { useEffect } from "react";





export default function App(){
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
 

  return (
    <div>
      <h1 className="title"> Phonebook</h1>

      <ContactForm/>

      <h2 className="title">Contacts</h2>

      <Filter/>

      <ContactList/>
    </div>
  )
}


