import React from 'react'
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const EducationalDeleteModel = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  return (
    <div>
    <Button color="danger" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                       YES
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        NO
                    </Button>
                </ModalFooter>
            </Modal>
    </div>
  )
}

export default EducationalDeleteModel