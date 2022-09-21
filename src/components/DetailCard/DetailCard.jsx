import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function DetailCard({id, species}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);




  return (
    <div className='modal-container'>
      <Button color="danger" onClick={toggle} >
      ¡Pika acá..!
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen id={`id${id}`} species={`species${species}`}>
        <ModalHeader toggle={toggle}>ID<p>{id}</p></ModalHeader>
        <ModalBody>
          Especie <p>{species}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
          <AiOutlineArrowLeft className='btn-return' />
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DetailCard;