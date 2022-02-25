import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"


const DeleteKey = ({show, onHide, api}) => {
    return (
        <Modal 
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Container>
        <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title-vcenter">
               УДАЛИТЬ НЕАКТИВНЫЙ БОТ-КЛЮЧ
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Вы действительно хотите удалить неактивный бот-ключ с IP={api}
        </Modal.Body>
        <Modal.Footer>
            <button className="btnclass">ДА</button>
            <button className="btnclass">НЕТ</button>
        </Modal.Footer>      
        </Container></Modal>
    );
  }
  
export default DeleteKey;