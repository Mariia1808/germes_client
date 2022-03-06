import React, { useEffect, useState } from 'react';
import {Button, Container} from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import "../css/css.js"
import { rates, renewKey } from '../http/userAPI.js';


const RenewKey = ({show, onHide, api, balanse, rates, id}) => {
    const [yes, setYes]=useState(false)
    const [rate, setRate]=useState("")
    const [amount, setAmount]=("")
    const [arrRate, setArrRate] = useState([])
    const [error, setError] = useState("")
    const rewKey = async (cash) =>{
        let data;
        console.log(id)
        const formData = new FormData()
        formData.append('bk_id', id)
        formData.append('rate', rate)
        formData.append('cashback', cash)
        data = await renewKey(formData);
        if(data.response === "no_error")
        {
           // window.location.reload()
        }
        else{
            return setError(data.error_text)
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
                            {rates.map(data=>{
                        return <option value={data.rate_cost}>{data.rate_name}</option> 
                    })}
                            </select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass" onClick={()=> setYes(true)}>ПРОДОЛЖИТЬ</button>
                        <button className="btnclass" onHide={onHide} id="confirm_warn">ОТМЕНА</button>
                    </Modal.Footer></>
                case true: 
                    return <><Modal.Body>
                        {(() => {
                                switch ((rate>balanse.cashback)&&(balanse.balance>(rate-balanse.cashback))) {
                                    case true:
                                        return <>
                                        Стоимость тарифа {rate} <br/><br/>
                                        На текущий момент у Вас на Cashback счету {balanse.cashback} P и {balanse.balance} Р на основном балансе<br/><br/>
                                        Сумма к оплате бонусами составит {balanse.cashback} P<br/><br/>
                                        Остаток в {rate - balanse.cashback} P  будет списан с основного баланса.<br/><br/>
                                        Хотите оплатить часть суммы бонусными средствами?<br/><br/>
                                        </>
                                    case (rate>balanse.cashback):
                                        return <>
                                        Стоимость тарифа {rate} <br/><br/>
                                        На текущий момент у Вас на Cashback счету {balanse.cashback} P и {balanse.balance} Р на основном балансе<br/><br/>
                                        Сумма к оплате бонусами составит {balanse.cashback} P<br/><br/>
                                        Остаток в 0 P  будет списан с основного баланса.<br/><br/>
                                        Хотите оплатить часть суммы бонусными средствами?<br/><br/>
                                        </>
                                    default:
                                        return <>У вас недостаточно средств</>
                                }
                            })()}
                        

                        <div  id="error">
                            {error}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btnclass" title='Оплатить часть бонусами' onClick={()=>rewKey('Y')}>ДА</button>
                        <button className="btnclass" title='Оплатить все с основного баланса' onClick={()=>rewKey('N')}>НЕТ</button>
                        <button className="btnclass" title='Вернуться к выбору тарифа'  onClick={()=>setYes(false)}>НАЗАД</button>
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