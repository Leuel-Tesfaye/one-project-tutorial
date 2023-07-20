import React from "react";
import user from '../images/user.png'
const ContactCard = (props) => {
  // Check if props.contact is defined and has the required properties
  if (!props.contact || !props.contact.name || !props.contact.email) {
    return null; // or display an error message, or a default contact card
  }

  const { name, email } = props.contact;
  return (
    <div className="item">
        <img className="ui avatar image " src={user} alt="user"/>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon"></i>
    </div>
  );
};

export default ContactCard;

