import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import "../css/css.js"
import Header from '../components/Header';
import FinanceTable from '../components/FinanceTable.js';
import { observer } from 'mobx-react-lite';
import OperationBalance from '../components/OperationBalance.js';
import { Context } from '../index.js';
import { balance, getFinanceTable } from '../http/userAPI.js';


const Finance = observer(() => {
    const [table, setTable] = useState('')
    const [operation, setOperation] = useState('')
    const {user} = useContext(Context)
    const [balanse, setBalanse] = useState([])
    const [tables, setTables] = useState([])
    const formData2 = new FormData()
    formData2.append("require","accounts")
    useEffect(() =>{
        balance(formData2).then(data=>setBalanse(data))
    },[])
    const FinTable = (req) =>{
        const formData1 = new FormData()
        formData1.append("require", "all_tabs")
        getFinanceTable(formData1, req).then(data=>setTables(data))
        console.log(tables)
        setTable(req)
    }
        return (
            <Container id="he">
                  {user.setIsAuth(true)}
                <div className="content_admin">
                    <input type="hidden" id="payment_message" value="" />
                    <input type="hidden" id="operation" value="all" />
                    <div className="box finance nowrap">
                    <div className="column-2-fin">
                    <h3>Доступные средства</h3>
                <div className="column-3-fin no-background attachment">
                    <div className="text">
                        <span>Баланс</span>
                        <strong>{balanse.balance}</strong><i className="fal fa-ruble-sign"></i>
                    </div>
                </div>
                <div className="column-3-fin no-background attachment">
                    <div className="text">
                        <span>Партнерка</span>
                        <strong id="available" data-summ="0">{balanse.partner}</strong><i className="fal fa-ruble-sign"></i>
                    </div>
                </div>
                <div className="column-3-fin no-background attachment">
                    <div className="text">
                        <span>CashBack *</span>
                        <strong id="available" data-summ="0">{balanse.cashback}</strong><i className="fal fa-ruble-sign"></i>
                    </div>
                </div>
                <span ></span>                
            </div>
            <div className="column-2-fin">
                <div className="operacy">
                    <h3>Операции с балансом</h3> <div className="close"><button className='btnclose' onClick={()=>setOperation(0) }><i className="bi bi-x-lg"></i></button></div>
                     <div className="column-3-fin no-background attachment">
                         <Button onClick={()=>setOperation(1)} className="btn_middle show_block" data-name="balance_block">Пополнить баланс</Button>
                     </div>
                    <div className="column-3-fin no-background attachment">
                         <Button onClick={()=>setOperation(2)}className="btn_middle show_block" data-name="partner_block">Перевести средства</Button>
                    </div>
                    <div className="column-3-fin no-background attachment" >
                        <Button onClick={()=>setOperation(3)} className="btn_middle show_block" data-name="withdraw_block">Вывести средства</Button>
                    </div>
                    
                    <OperationBalance operation={operation}/>
                </div>
            </div>
        </div>
        <div className="content_wall" id="con">
            <h3>фильтр по истории операций</h3>
            <div className="tab_api_key">
                <div className="head_table">
                    <div className="tabs">
                        <ul>
                            <li><Button onClick={()=>FinTable("all")} target="_self" className="btnclass">Все операции</Button></li>
                            <li><Button onClick={()=>FinTable("add")} target="_self" className="btnclass">Пополнения</Button></li>
							<li><Button onClick={()=>FinTable("qiwi")} target="_self" className="btnclass">История (QIWI)</Button></li>
                            <li><Button onClick={()=>FinTable("p")} target="_self" className="btnclass">Партнерка</Button></li>
                            <li><Button onClick={()=>FinTable("off")} target="_self" className="btnclass">Списания</Button></li>
                        </ul>
                    </div>
                    <div className="search">
                        <label htmlFor="date_key">Поиск по дате&nbsp;&nbsp;</label>
                        <input className="inp_style_tab" id="date_key"  type="text" name="search" autoComplete="off" />
                    </div>
                    <div className="clear_form" title="Очистить все поля формы"><a className="inp_style_tab"><i className="fal fa-times"></i></a></div>
                    </div>
                </div>
            </div>
            <form id="finance">
                
                <FinanceTable number={table} tables={tables}/>
        </form>
                </div>
            </Container>
        );
    
});

export default Finance;