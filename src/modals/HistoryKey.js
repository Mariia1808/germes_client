import React, { useEffect, useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import { bkHistory } from '../http/userAPI.js';
import SimpleDateTime  from 'react-simple-timestamp-to-date';


const HistoryKey = ({show, onHide, bk_id, api}) => {
    const [bkHis, setBkHis] = useState([])
    const formData = new FormData()
    formData.append('bk_id', bk_id)
    useEffect(() =>{
        bkHistory(formData).then(data=>setBkHis(data))
    },[])
    const Close = () =>{
        setBkHis([])
        window.location.reload()
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
               ИСТОРИЯ БОТ-КЛЮЧА
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            Бот-ключ '{api}'
            {bkHis.map(histor=>
            <><label><b><SimpleDateTime dateSeparator="-" format="dmY" showTime="0">{histor.processed_date}</SimpleDateTime></b> - {histor.action}<br/><br/></label></>
            )}
        </Modal.Body>
        <Modal.Footer>
            <button className="btnclass" onHide={onHide} onClick={()=>Close()}>Закрыть</button>
        </Modal.Footer>      
        </Container></Modal>
    );
  }
  
export default HistoryKey;