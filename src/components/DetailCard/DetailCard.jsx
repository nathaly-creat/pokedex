import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import TableCard from "./tableCard.jsx";

function DetailCard({ id, name, image, type, species, abilities, stats }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <div className="modal-container">
      <Button className="btn-details" color="danger" onClick={toggle}>
        ¡Pika acá..!
      </Button>
      <Modal className="modal-container-body" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <div className="number">
            <small>ID: #0{id}</small>
          </div>
        </ModalHeader>
        <ModalBody>
          <img src={image} alt={name} />
          <div className="detail-wrapper">
            <h4>Nombre: {name}</h4>
            <small>Type: {type}</small>
            <p>Especie: {species}</p>
          </div>
          {/*Seccion de habilidades*/}
          <div>
            <TableCard id={id} abilities={abilities}  stats={stats} />
          </div>
            
        </ModalBody>
      </Modal>
    </div>
  );
}

export default DetailCard;
