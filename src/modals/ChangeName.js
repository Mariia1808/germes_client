import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"


const ChangeName = ({show, onHide, api}) => {
    const [yes, setYes]=useState(false)
    return (
        <Modal 
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Container>
        <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title-vcenter">
               ИЗМЕНИТЬ ИМЯ БОТ-КЛЮЧА
            </Modal.Title>
        </Modal.Header>
        {(() => {
            switch (yes) {
                case false:
                    return <><Modal.Body>
                        Вы действительно хотите изменить имя для ключа с IP = {api}?
                    </Modal.Body>
                    <Modal.Footer>
                    <button className="btnclass" onClick={()=> setYes(true)}>ДА</button>
                    <button className="btnclass" onHide={onHide} id="confirm_warn">НЕТ</button>
                    </Modal.Footer></>
                case true: 
                    return <><Modal.Body>
                        Изменить имя Бот-ключа. Максимальная длина 12 символов.<br /><br />Оставте поле пустым для возврата к имени по умолчанию (N\N)
                        <input></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass">Сохранить</button>
                        <button className="btnclass" onClick={()=>setYes(false)}>Отмена</button>
                    </Modal.Footer>
                    </>
            default:
                return <></>
            }
        })()}

        </Container></Modal>
    );
  }
  
export default ChangeName;