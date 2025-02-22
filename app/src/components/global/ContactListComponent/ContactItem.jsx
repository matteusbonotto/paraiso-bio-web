import React from "react";

const ContactList = ({ name, phone, whatsapp }) => {
  return (
    <li className="list-group-item">
      <strong>{name}:</strong> {phone}
      <a href={`tel:+55${phone.replace(/\D/g, '')}`} className="float-right">
        <i className="fas fa-phone"></i>
      </a>
      <a href={`https://wa.me/55${whatsapp.replace(/\D/g, '')}`} className="float-right mr-2">
        <i className="fab fa-whatsapp"></i>
      </a>
    </li>
  );
};

export default ContactList;