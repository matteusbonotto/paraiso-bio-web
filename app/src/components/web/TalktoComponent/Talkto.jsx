import React from "react";
import "./Talkto.css";
import ContactList from "../../global/ContactListComponent/ContactItem";

const Talkto = ({ contacts }) => {
  return (
    <div className="contact-buttons mt-3 text-center">
      <h5>Falar com</h5>
      {contacts.map((contact, index) => (
        <ContactList
          key={index}
          name={contact.name}
          phone={contact.phone}
          whatsapp={contact.whatsapp}
        />
      ))}
    </div>
  );
};

export default Talkto;
