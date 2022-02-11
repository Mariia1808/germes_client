import React from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';



const Attention= ({show, onHide}) => {
    
    return (
        
        <Modal 
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered contentClassName="pr">
        <Container className="form">
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Внимание
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <br/>Вы зашли в свой Личный кабинет. Но эта версия сайта является упрощённой с минимальным набором функций, необходимых для работы.
        <br/>
        <br/>Для получения полного доступа к Личному кабинету, а также для получения 600 руб. на Ваш основной баланс и бесплатного обучения, Вам необходимо привязать профиль к своей странице на сайте ВКонтакте.
        <br/>
        <br/>Сделать это Вы можете в любое время на странице "Настройки профиля".
        </Modal.Body>
        <Modal.Footer>
            <Button className="recbut" onHide={onHide}>Сделать позже</Button>
            <Button className="recbut">Привязать сейчас</Button>
        </Modal.Footer>
        </Container></Modal>
    );
  }
  
export default Attention;