import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import { deleteKey } from '../http/userAPI.js';


const DeleteKey = ({show, onHide, api, id}) => {
    const delKey = async () =>{
        let data;
        console.log(id)
        const formData = new FormData()
            formData.append('bk_id', id)
            data = await deleteKey(formData);
            if(data.response === "no_error")
            {
                window.location.reload()
            }
    }
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
            <button onClick={()=>delKey()} className="btnclass">ДА</button>
            <button className="btnclass">НЕТ</button>
        </Modal.Footer>      
        </Container></Modal>
    );
  }
  
export default DeleteKey;