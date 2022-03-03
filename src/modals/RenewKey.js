import React, { useEffect, useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import { renewKey } from '../http/userAPI.js';


const RenewKey = ({show, onHide, api, id, rates}) => {
    const [yes, setYes]=useState(false)
    const [rate, setRate]=useState("")
    const [amount, setAmount]=("")
    const rewKey = async () =>{
        let data;
        console.log(id)
        const formData = new FormData()
        formData.append('bk_id', id)
        formData.append('rate', rate)
        data = await renewKey(formData);
        if(data.response === "no_error")
        {
           // window.location.reload()
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
               ПРОДЛИТЬ ДЕЙСТВИЕ БОТ-КЛЮЧА
            </Modal.Title>
        </Modal.Header>
        {(() => {
            switch (yes) {
                case false:
                    return <><Modal.Body>
                        
                        <div class="ext_text">Выберите тарифный план для продления Бот-ключа с IP={api}<br/>
                            <select id="new_rate_id" onChange={e => setRate(e.target.value)} name="new_rate_id">
                                <option value="15">Fonbet</option>
                                <option value="2" selected>Personal</option>
                                <option value="1">Personal +</option>
                                <option value="7">Starter</option>
                            </select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass" onClick={()=> setYes(true)}>ПРОДОЛЖИТЬ</button>
                        <button className="btnclass" onHide={onHide} id="confirm_warn">ОТМЕНА</button>
                    </Modal.Footer></>
                case true: 
                    return <><Modal.Body>
                        что-то
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass" onClick={()=>rewKey()}>ДА</button>
                        <button className="btnclass" onClick={()=>setYes(false)}>НЕТ</button>
                    </Modal.Footer>
                    </>
            default:
                return <></>
            }
        })()}

        </Container></Modal>
    );
  }
  
export default RenewKey;