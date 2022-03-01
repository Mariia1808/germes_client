import React, { useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import { changeIP } from '../http/userAPI.js';


const ChangeApi = ({show, onHide, api, id}) => {
    const [yes, setYes]=useState(false)
    const [ip, setIp]=useState("")
    const [error, setError] = useState("")

    const ChangeIp = async () =>{
        let data;
        const formData = new FormData()
            formData.append('bk_id', id)
            formData.append('bk_ip', ip)
                console.log(formData)
            data = await changeIP(formData);
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
               ИЗМЕНИТЬ API БОТ-КЛЮЧА
            </Modal.Title>
        </Modal.Header>
        {(() => {
            switch (yes) {
                case false:
                    return <><Modal.Body>
                        Вы действительно хотите изменить IP ключа {api} на новый?
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass" onClick={()=> setYes(true)}>ДА</button>
                        <button className="btnclass" onHide={onHide} id="confirm_warn">НЕТ</button>
                    </Modal.Footer></>
                case true: 
                    return <><Modal.Body>
                        Новый IP: <input onChange={e => setIp(e.target.value)} placeholder="___.___.___.___" maxlength="15"></input>
                        <div  id="error">
                            {error}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass" onClick={()=>ChangeIp()}>Изменить</button>
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
  
export default ChangeApi;