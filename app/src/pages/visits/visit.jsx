import React, { useState, useEffect } from 'react';
import style from './visit.css'
import Mapa from '../../components/web/MapaComponent/Mapa';
import Modal from '../../components/web/ModalComponent/Modal';
import Talkto from '../../components/web/TalktoComponent/Talkto';

const Visit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const copiarEndereco = () => {
    const endereco = document.getElementById("endereco").innerText;
    navigator.clipboard.writeText(endereco)
      .then(() => {
        alert("Endereço copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar o endereço: ", err);
      });
  };

  const contacts = [
    { name: "Matheus", phone: "(19)99959-1073", whatsapp: "(19)99959-1073" },
    { name: "Beatriz", phone: "(19)99103-5924", whatsapp: "(19)99103-5924" },
    { name: "Portaria", phone: "(19)99103-5924", whatsapp: "(19)99103-5924" },
  ];

  const irParaEndereco = () => {
    const endereco = document.getElementById("endereco").innerText;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(endereco)}`;
    window.open(url, "_blank");
  };

  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="mt-4 text-4xl text-center">Seja bem-vindo, visitante!</h1>
    //   <div className="col-md-6 mb-2 mx-auto">
    //     <div className="mb-3 h-700 mt-4" id="card-visita">
    //       <div className="">
    //         <h5 className="text-center">
    //           <i className="fas fa-calendar-check"></i> Marcar uma visita?
    //         </h5>
    //         <a
    //           href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Visita%20a%20Matheus%20e%20Beatriz&dates=20231015T140000Z/20231015T150000Z&details=Visita%20a%20Matheus%20e%20Beatriz%20em%20Rua%20Vandick%20Reidner%20P.%20Coqueiro,%20597,%20Resi.%20Cosmos&location=Rua%20Vandick%20Reidner%20P.%20Coqueiro,%20597,%20Resi.%20Cosmos"
    //           className="btn btn-primary btn-block"
    //           target="_blank" rel="noreferrer"
    //         >Agendar</a>
    //         <div className="contact-buttons mt-3 text-center">
    //           <h5>Falar com</h5>
    //           <li className="list-group-item">
    //             <strong>Matheus:</strong> (19)99959-1073
    //             <a href="tel:+5519999591073" className="float-right"><i className="fas fa-phone"></i></a>
    //             <a href="https://wa.me/5519999591073" className="float-right mr-2"><i className="fab fa-whatsapp"></i></a>
    //           </li>
    //           <li className="list-group-item">
    //             <strong>Beatriz:</strong> (19)99103-5924
    //             <a href="tel:+5519991035924" className="float-right"><i className="fas fa-phone"></i></a>
    //             <a href="https://wa.me/5519991035924" className="float-right mr-2"><i className="fab fa-whatsapp"></i></a>
    //           </li>
    //           <li className="list-group-item">
    //             <strong>Portaria:</strong> (19)99103-5924
    //             <a href="tel:+5519991035924" className="float-right"><i className="fas fa-phone"></i></a>
    //             <a href="https://wa.me/5519992585597" className="float-right mr-2"><i className="fab fa-whatsapp"></i></a>
    //           </li>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-4">
    //     <div className="">
    //       <div className="text-center">
    //         <h3>Para sua comodidade</h3>
    //         <h5>Segue dados para facilitar sua vinda até nós</h5>
    //         <p>
    //           <strong>Endereço:</strong>
    //           <span id="endereco">Rua Vandick Reidner P. Coqueiro, 597, Resi. Cosmos, CEP 13059-112</span>
    //           <button
    //             className="btn btn-link"
    //             onClick={copiarEndereco}
    //             style={{ padding: 0, border: 'none', background: 'none' }}
    //           >
    //             <i className="fas fa-copy"></i> Copiar
    //           </button>
    //         </p>
    //         <p><strong>Bloco:</strong> G | <strong>Apto:</strong> 404</p>
    //         <p><strong>Vaga:</strong> 75</p>
    //         <p>Se localize ao chegar</p>
            
    //         <p>Como estacionar na vaga</p>
    //         <img src="Vagapptx.gif" alt="" width="1000px" className="img-fluid rounded mb-3" />
    //         <h5>Orientações para Chegar:</h5>

    //         <a
    //           href="https://m.uber.com/ul/?action=setPickup&pickup[latitude]=-22.9438676&pickup[longitude]=-47.1605901&pickup[formatted_address]=Current%20Location&dropoff[latitude]=-22.9438854&dropoff[longitude]=-47.1606281&dropoff[formatted_address]=Rua%20Vandick%20Reidner%20P.%20Coqueiro%2C%20597%2C%20Resi.%20Cosmos%2C%20CEP%2013059-112"
    //           className="btn btn-custom"
    //           style={{ backgroundColor: '#000000', color: 'white' }}
    //           target="_blank" rel="noreferrer"
    //         >
    //           <i className="fab fa-uber" style={{ marginRight: '5px' }}></i> Ir de Uber
    //         </a>
    //         <button className="btn btn-primary" onClick={irParaEndereco}>
    //           <i className="fas fa-car"></i> Ir de carro
    //         </button>
    //       </div>

    //       <div className="route-instructions mt-0 mb-3">
    //         <div className="accordion" id="routeAccordion">
    //           <div className="">
    //             <div className="" id="headingCar">
    //               <h6 className="mb-0">
    //                 <button
    //                   className="btn btn-link collapsed"
    //                   type="button"
    //                   data-toggle="collapse"
    //                   data-target="#collapseCar"
    //                   aria-expanded="false"
    //                   aria-controls="collapseCar"
    //                 >
    //                   <i className="fas fa-car"></i> De Carro
    //                 </button>
    //               </h6>
    //             </div>
    //             <div
    //               id="collapseCar"
    //               className="collapse"
    //               aria-labelledby="headingCarhover"
    //               data-parent="#routeAccordion"
    //             >
    //               <div className="card-body">
    //                 <p>
    //                   <strong>Saída do Terminal Satélite Íris:</strong>
    //                   <i className="fas fa-arrow-right"></i> Saia do terminal e
    //                   entre na Avenida John Boyd Dunlop no sentido Campo Grande.
    //                 </p>
    //                 <p>
    //                   <strong>Percurso:</strong>
    //                   <i className="fas fa-road"></i> Siga pela Avenida John Boyd
    //                   Dunlop até ver a loja, "Duda Utilidade do lar".
    //                   Mantenha-se à direita para acessar a via marginal.
    //                 </p>
    //                 <p>
    //                   <strong>Entrada no Residencial Cosmos:</strong>
    //                   <i className="fas fa-arrow-right"></i> Ao ver a loja Duda
    //                   Utilidades do Lar, entre na Rua Lúcio Esteves.
    //                 </p>
    //                 <p>
    //                   <strong>Continue pela Rua Lúcio Esteves:</strong>
    //                   <i className="fas fa-arrow-right"></i> Continue pela Rua Lúcio
    //                   Esteves e vire a direita na Rua José Rodrigues Duarte.
    //                 </p>
    //                 <p>
    //                   <strong>Siga pela Rua José Rodrigues Duarte:</strong>
    //                   <i className="fas fa-arrow-right"></i> Siga pela Rua José
    //                   Rodrigues Duarte e vire a direita na Rua Osvaldo Orlando
    //                   da Costa.
    //                 </p>
    //                 <p>
    //                   <strong>Dobre na Rua Osvaldo Orlando da Costa:</strong>
    //                   <i className="fas fa-arrow-right"></i> Na Rua Osvaldo Orlando
    //                   da Costa, desça a rua até o final e dobre na esquina à
    //                   esquerda da Rua Vandick Reider, em direção ao Coqueiro.
    //                 </p>
    //                 <p>
    //                   <strong>Destino:</strong>
    //                   <i className="fas fa-map-marker-alt"></i> Siga pela Rua
    //                   Vandick Reider P. Coqueiro, 597.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="">
    //             <div className="" id="headingBus">
    //               <h6 className="mb-0">
    //                 <button
    //                   className="btn btn-link"
    //                   type="button"
    //                   data-toggle="collapse"
    //                   data-target="#collapseBus"
    //                   aria-expanded="true"
    //                   aria-controls="collapseBus"
    //                 >
    //                   <i className="fas fa-bus"></i> De Ônibus
    //                 </button>
    //               </h6>
    //             </div>

    //             <div
    //               id="collapseBus"
    //               className="collapse"
    //               aria-labelledby="headingBus"
    //               data-parent="#routeAccordion"
    //             >
    //               <div className="card-body">
    //                 <p>No Terminal Satélite Íris:</p>
    //                 <ul className="list-unstyled">
    //                   <li>
    //                     <i className="fas fa-arrow-right"></i> Procure a plataforma de embarque das linhas que atendem a região do Residencial Cosmos.
    //                   </li>
    //                   <li><strong>Linhas Disponíveis:</strong></li>
    //                   <ul>
    //                     <li><i className="fas fa-bus"></i> Linha 233: Res. Cosmos / Term. Satélite Íris</li>
    //                     <li><i className="fas fa-bus"></i> Linha 235: Residencial Sírius / Term. Satélite Íris</li>
    //                   </ul>
    //                   <li>
    //                     <i className="fas fa-info-circle"></i> Embarque: Pegue uma das linhas mencionadas acima.
    //                   </li>
    //                 </ul>
    //                 <p>
    //                   <strong>Desembarque:</strong>
    //                   <i className="fas fa-exclamation-circle"></i> Peça ao motorista ou cobrador para avisá-lo ao chegar no ponto mais próximo da Rua Vandick Reider P. Coqueiro, 597.
    //                 </p>
    //                 <p>
    //                   <strong>Caminhada Final:</strong>
    //                   <i className="fas fa-walking"></i> Após desembarcar, siga a pé até o número 597 da Rua Vandick Reider P. Coqueiro.
    //                 </p>
    //                 <p>
    //                   <strong>Observações:</strong> Se precisar de mais informações sobre horários ou localização de plataformas, use aplicativos como Moovit ou consulte o site da EMDEC.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <h5 className="mt-4">Mapa:</h5>
    //       <div className="flex items-center justify-center pb-4">
    //         <Mapa />
    //       </div>
    //       <div className="flex justify-center pb-4">
    //         <iframe
    //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.172658199793!2d-47.16316502328608!3d-22.943867579229124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b7bde21c9bcd%3A0x1454d68fa07fa39f!2sR.%20Vandick%20Reidner%20P%20Coqueiro%2C%20597%20-%20Jardim%20Florence%2C%20Campinas%20-%20SP%2C%2013059-112!5e0!3m2!1spt-BR!2sbr!4v1735253269368!5m2!1spt-BR!2sbr"
    //           width="80%"
    //           height="250"
    //           style={{ border: 0 }}
    //           allowFullScreen=""
    //           loading="lazy"
    //           referrerPolicy="no-referrer-when-downgrade"
    //         ></iframe>
    //       </div>

    //     </div>
    //   </div>

    //   <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={openModal}>
    //     Abrir Modal
    //   </button>
    //   <Modal isOpen={isModalOpen} onClose={closeModal} title="Orientações para Visitas">
    //     <p><i className="fas fa-info-circle"></i> Tenha seu RG em mãos para ser autorizado na portaria, caso esteja de carro, também é necessário passar modelo, cor e a placa do veículo.</p>
    //   </Modal>
    // </div>
    <div className='bodyVisit'>
      <div className=''><h2>Bem vindo visitante!</h2></div>
      <div className='row'>
        <div className='col-3 p-5'>
          <h3><i className="fas fa-calendar-check"></i> Marcar uma visita?</h3>
             <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Visita%20a%20Matheus%20e%20Beatriz&dates=20231015T140000Z/20231015T150000Z&details=Visita%20a%20Matheus%20e%20Beatriz%20em%20Rua%20Vandick%20Reidner%20P.%20Coqueiro,%20597,%20Resi.%20Cosmos&location=Rua%20Vandick%20Reidner%20P.%20Coqueiro,%20597,%20Resi.%20Cosmos"
              className="btn btn-primary btn-block"
              target="_blank" rel="noreferrer"
            >
              Agendar
            </a>
            <Talkto contacts={contacts} />
        </div>

        <div className='col-9 bg-red-500'>
          <h1>Teste Direita</h1>
        </div>
      </div>
    </div>
  );
};

export default Visit;