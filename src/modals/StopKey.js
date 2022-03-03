import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import { stopKey, startKey } from '../http/userAPI.js';


const StopKey = ({show, onHide, api, id, active}) => {
    const keyStop = async () =>{
        let data;
        const formData = new FormData()
            formData.append('bk_id', id)
            data = await stopKey(formData);
            if(data.response === "no_error")
            {
                //window.location.reload()
            }
    }
    const keyStart = async () =>{
        let data;
        const formData = new FormData()
            formData.append('bk_id', id)
            data = await startKey(formData);
            if(data.response === "no_error")
            {
                //window.location.reload()
            }
    }
    return (
        <Modal 
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Container>
        
        {(() => {
            switch (active) {
                case "S": return <> 
                <Modal.Header closeButton={true}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        ЗАПУСТИТЬ БОТ-КЛЮЧ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Вы действительно хотите запустить Бот-ключ с IP={api}?
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={()=>keyStart()} className="btnclass">ДА</button>
                    <button className="btnclass">НЕТ</button>
                </Modal.Footer>   </>
                case "Y": return <>
                <Modal.Header closeButton={true}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        ОСТАНОВИТЬ БОТ-КЛЮЧ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Вы действительно хотите остановить Бот-ключ с IP={api}?
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={()=>keyStop()} className="btnclass">ДА</button>
                    <button className="btnclass">НЕТ</button>
                </Modal.Footer>   
                </>
                default:
                    return <></>
            }
        })()}
               
        </Container></Modal>
    );
  }
  
export default StopKey;