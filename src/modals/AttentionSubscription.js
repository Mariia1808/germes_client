import React from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"


const AttentionSubscription = ({show, onHide, api, keys}) => {
    
    return (
        
        <Modal 
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Container>
        <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title-vcenter">
               Внимание
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {(() => {
            switch (keys) {
                case 1:
                    return <>Вы действительно хотите остановить Бот-ключ с IP={api}?</>
                case 2:
                    return <>Вы действительно хотите разделить Бот-ключ с IP={api} на два ключа?</>
                case 3:
                    return <>Вы действительно хотите продлить действие Бот-ключа с IP={api}?</>
                case 4:
                    return <>Вы действительно хотите добавить заморозку Бот-ключу с IP={api}?</>
                case 5:
                    return <></>
                case 6:
                    return <>Вы действительно хотите удалить неактивный Бот-ключ? Эта операция необратима.</>
                default:
                    return null
            }
        })()}
        </Modal.Body>
        <Modal.Footer>
            <button className="btnclass" >ДА</button>
            <button className="btnclass" onHide={onHide} id="confirm_warn">НЕТ</button>
        </Modal.Footer>
        </Container></Modal>
    );
  }
  
export default AttentionSubscription;