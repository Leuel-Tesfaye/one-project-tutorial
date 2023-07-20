import React, {useEffect, useState} from "react";
import "./App.css";
import Header from "./Header";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App(props) {
  const LOCAL_STORAGE_KEY = "contacts"
const [contacts, setContacts] = useState ([]) 

const AddContactHandler = (contact) =>{
  console.log(contact)
  setContacts(...contacts,contact)
}

useEffect (() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
},[contacts])
  return (
    <div className="ui container">
      <Header />
      <AddContact AddContactHandler = {AddContactHandler} />
      <ContactList contacts = {contacts}/>
      <ContactCard/>
    </div>
  );
}

export default App;
