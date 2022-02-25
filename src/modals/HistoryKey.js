import React, { useEffect, useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import { bkHistory } from '../http/userAPI.js';


const HistoryKey = ({show, onHide, bk_id, api}) => {
    const [bkHis, setBkHis] = useState([])
    const formData = new FormData()
    formData.append('bk_id', bk_id)
    useEffect(() =>{
        bkHistory(formData).then(data=>setBkHis(data))
    },[])

    return (
        <Modal 
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Container>
        <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title-vcenter">
               ИСТОРИЯ БОТ-КЛЮЧА
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            Бот-ключ '{api}'
            {console.log(bk_id)}
            {console.log(bkHis)}
            {console.log(formData)}
            {bkHis.map(histor=>
            <label>{histor.processed_date} - {histor.action}</label>
            )}
        </Modal.Body>
        <Modal.Footer>
            <button className="btnclass">Закрыть</button>
        </Modal.Footer>      
        </Container></Modal>
    );
  }
  
export default HistoryKey;