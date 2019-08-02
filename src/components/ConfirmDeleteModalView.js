import { Modal, Button } from 'react-bootstrap';
import React from 'react'

const ConfirmDeleteModalView = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={{textAlign:'center'}}>
                    Are you sure you want to delete this component?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-danger" onClick={props.confirmdelete}>Delete</Button>
                <Button className="btn-secondary" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmDeleteModalView;