import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import { separateKey } from '../http/userAPI.js';


const SeparateKey = ({show, onHide, api, id}) => {
    const [yes, setYes]=useState(false)
    const [error, setError] = useState("")
    const [ip, setIp]=useState("")
    const separate = async () =>{
        let data;
        const formData = new FormData()
            formData.append('bk_id', id)
            formData.append('bk_ip', ip)
                console.log(formData)
            data = await separateKey(formData);
            if(data.response === "no_error")
            {
                setError()
                window.location.reload()
            }else{
                setError(data.error_text)
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
                            <span class="2"><input type="text" onChange={e => setIp(e.target.value)} class="new_ip" id="user_ip_2" /></span>
                        </div>
                    </div> 
                    <div  id="error">
                            {error}
                        </div>             
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass" onClick={()=>separate()}>Изменить</button>
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