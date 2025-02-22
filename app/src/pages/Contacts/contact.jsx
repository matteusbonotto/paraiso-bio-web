import React from 'react';
import Talkto from '../../components/web/TalktoComponent/Talkto';
import Accordion from '../../components/global/AccordionComponent/Accordion';

const contacts = [
  { name: "Matheus", phone: "(19)99959-1073", whatsapp: "(19)99959-1073" },
  { name: "Beatriz", phone: "(19)99103-5924", whatsapp: "(19)99103-5924" },
  { name: "Portaria", phone: "(19)99258-5597", whatsapp: "(19)99258-5597" },
  { name: "Síndico Ricardo", phone: "(19)98289-0000", whatsapp: "(19)98289-0000" },
  { name: "Subsíndica Paty", phone: "(19)98812-4347", whatsapp: "(19)98812-4347" },
  { name: "Zelador", phone: "(19)98993-9419", whatsapp: "(19)98993-9419" },
  { name: "Zuma Engenharia", phone: "(19)99816-0260", whatsapp: "(19)99816-0260" },
  { name: "Seguro Tokyo Marine", phone: "(11)99578-6546", whatsapp: "(11)99578-6546" },
];

const Contact = () => {
  console.log('Contact component rendered');
  return (
    <div className='container p-4'>
      <Accordion title="Contatos">
        <Talkto contacts={contacts} />
      </Accordion>
    </div>    
  );
};

export default Contact;