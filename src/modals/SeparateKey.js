import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"


const SeparateKey = ({show, onHide, api}) => {
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
               РАЗДЕЛИТЬ БОТ-КЛЮЧ
            </Modal.Title>
        </Modal.Header>
        {(() => {
            switch (yes) {
                case false:
                    return <><Modal.Body>
                        Вы действительно хотите разделить Бот-ключ с IP={api} на два ключа?
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass" onClick={()=> setYes(true)}>ДА</button>
                        <button className="btnclass" onHide={onHide} id="confirm_warn">НЕТ</button>
                    </Modal.Footer></>
                case true: 
                    return <><Modal.Body>
                    <div class="ext_text">
                        <div class="row">
                            <span class="text-lable">Текущий IP:&nbsp;&nbsp;</span>
                            <span class="1"><input type="text" class="new_ip" name="user_ip_1" id="user_ip_1" placeholder={api} readonly="true" /></span>
                        </div>
                        <br />
                        <div class="row">
                            <span class="text-lable">&nbsp;&nbsp;&nbsp;&nbsp;Новый IP:&nbsp;&nbsp;</span>
                            <span class="2"><input type="text" class="new_ip" name="user_ip_2" is_required="Y" field_name="Новый IP" id="user_ip_2" value="" /></span>
                        </div>
                    </div>              
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass">Изменить</button>
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
  
export default SeparateKey;