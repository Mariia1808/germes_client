import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import { addFrozen } from '../http/userAPI.js';


const FrozenKey = ({show, onHide, api, id}) => {
    const [yes, setYes]=useState(false)
    const addFroz = async () =>{
        let data;
        const formData = new FormData()
            formData.append('bk_id', id)
            data = await addFrozen(formData);
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
               ДОБАВИТЬ ЗАМОРОЗКУ БОТ-КЛЮЧУ
            </Modal.Title>
        </Modal.Header>
        {(() => {
            switch (yes) {
                case false:
                    return <><Modal.Body>
                        Вы действительно хотите добавить заморозку  ключа с IP={api}?
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass" onClick={()=> setYes(true)}>ДА</button>
                        <button className="btnclass" onHide={onHide} id="confirm_warn">НЕТ</button>
                    </Modal.Footer></>
                case true: 
                    return <><Modal.Body>
                        Стоимость дополнительной заморозки составляет 500&nbsp;
                        <span class="rub">P</span><br /><br />
                        Эта сумма будет списана с основного баланса.<br /><br />
                        Хотите продолжить?
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={()=>addFroz()} className="btnclass">Изменить</button>
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
  
export default FrozenKey;