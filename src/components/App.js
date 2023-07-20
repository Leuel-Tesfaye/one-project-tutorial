import React from "react";
import "./App.css";
import Header from "./Header";
// import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const contacts = [
    {
      id: "1",
      name: "prince",
      email: "Hope",
    },
    {
      id: "1",
      name: "prince",
      email: "Hope",
    },
    {
      id: "1",
      name: "prince",
      email: "Hope",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
