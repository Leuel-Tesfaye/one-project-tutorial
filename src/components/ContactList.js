import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log("props.contacts:", props.contacts);

  // Check if props.contacts is an array before using map
  if (!Array.isArray(props.contacts)) {
    console.error("props.contacts is not an array:", props.contacts);
    return  // or handle the error case appropriately
  }

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard key={contact.id} contact={contact} />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
