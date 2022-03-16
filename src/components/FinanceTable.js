import React from 'react';
import { Container } from 'react-bootstrap';
import "../css/css.js"
import { cost, Date } from '../function/functions.js';



const FinanceTable = ({number, tables}) => {
        
        const id = (kolvo) =>{
            let stroka = "";
            if ((kolvo !== null)||(kolvo !== ""))
            {
                for (let i = 0; i < 36; i++){
                stroka += kolvo[i]
                }
                return stroka
            }
            
        }
        return (
            <Container id="he">
                {console.log(tables)}
               {(() => {
                    switch (number) {
                    case "all":
                        return <div className="content_wall" id="tabs_key con1">
                            <div className="tab_api_key active">
                            <h3>Все операции</h3>
                            <div className="head_tab">
                                <div className="show">
                                    <label>Показывать</label>
                                    <select id="record_on_page" name="record_on_page" className="inp_style_tab">
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                    </select>
                                    <span>операций</span>
                                </div>
                                <div className="refresh" title="Перегрузить">
                                    <a className="inp_style_tab"><i className="far fa-sync"></i></a>
                                </div>
                            </div>
                                <table className="table">
                                <thead>
                                    <tr>
                                        <th>Дата</th>
                                        <th>Сумма</th>
                                        <th>Источник</th>
                                        <th>Детали</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {(() => {
                                        switch (tables.length>0) {
                                        case true:
                                            return <>
                                            {tables.map(data=>
                                                <tr>
                                                    <td>{Date(data.action_date)}</td>
                                                    <td>{cost(data.amount)} &#8381;</td>
                                                    <td>{data.action_name}</td>
                                                    <td>{data.comments}</td>
                                                </tr>  
                                            )}
                                            </>
                                        default:
                                            return <tr><td align="center" colSpan='4'>Нет данных по Вашему запросу</td></tr>
                                    }
                                    })()}
                                
                                </tbody>
                            </table>
                            </div>
                            <div className="paging">
                            <br /><div className='page_info'>
                            Страница 1 из 1. Записи от 1 до 0. Всего записей: {tables.length}.
                                </div>
                            </div>
                        </div>            
                    case "add":
                        return <div className="content_wall" id="tabs_key con1">
                        <div className="tab_api_key active">
                        <h3>Пополнения</h3>
                        <div className="head_tab">
                            <div className="show">
                                <label>Показывать</label>
                                <select id="record_on_page" name="record_on_page" className="inp_style_tab">
                                    <option value="10" selected>10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                </select>
                                <span>операций</span>
                            </div>
                            <div className="refresh" title="Перегрузить">
                                <a className="inp_style_tab"><i className="far fa-sync"></i></a>
                            </div>
                        </div>
                        <table className="table">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Сумма</th>
                                <th>Источник</th>
                                <th>Детали</th>
                            </tr>
                        </thead>
                        <tbody>
                        {(() => {
                        switch (tables.length>0) {
                        case true:
                            return <>
                            {tables.map(data=>
                                <tr>
                                    <td>{Date(data.action_date)}</td>
                                    <td>{cost(data.amount)} &#8381;</td>
                                    <td>{data.action_name}</td>
                                    <td>{data.comments}</td>
                                </tr>  
                            )}</>
                            default:
                                return <tr><td>Нет данных по Вашему запросу</td></tr>
                        }
                        })()}
                                
                        </tbody>
                    </table>
                    </div>
                            <div className="paging">
                            <br /><div className='page_info'>
                            Страница 1 из 1. Записи от 1 до 0. Всего записей: {tables.length}.
                                </div>
                            </div>
                        </div>            
                    case "qiwi":
                        return <div className="content_wall" id="tabs_key con1">
                            <div className="tab_api_key active">
                            <h3>История QIWI</h3>
                            <div className="head_tab">
                                <div className="show">
                                    <label>Показывать</label>
                                    <select id="record_on_page" name="record_on_page" className="inp_style_tab">
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                    </select>
                                    <span>операций</span>
                                </div>
                                <div className="refresh" title="Перегрузить">
                                    <a className="inp_style_tab"><i className="far fa-sync"></i></a>
                                </div>
                            </div>
                        <table className="table">
                        <thead>
                            <tr>
                                <th>Создан</th>
                                <th>ID платежа</th>
                                <th>Сумма</th>
                                <th>Статус</th>
                                <th className="nowrap">Действителен до</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                           <tbody>
                           {(() => {
                            switch (tables.length>0) {
                            case true:
                                return <>
                            {tables.map(data=>
                            <tr>
                                <td>{data.created_at}</td>
                                <td>{id(data.bill_id)}</td>
                                <td>{cost(data.sum)} &#8381;</td>
                                {(() => {
                                    switch (data.payment_status) {
                                    case "EXPIRED":
                                        return <td>Просрочен</td>
                                    case "PAID":
                                        return <td>Зачислен</td>
                                    default:
                                        return <></>
                            }
                            })()}
                            <td>{data.expired}</td>
                            {(() => {
                                switch (data.payment_status) {
                                case "EXPIRED":
                                    return <td><button>Удалить</button></td>
                                default:
                                    return <></>
                            }
                            })()}
                                </tr>  
                            )} </>
                            default:
                                return <tr><td align="center" colSpan='6'>Нет данных по Вашему запросу</td></tr>
                            }
                            })()}
                                              
                           </tbody>
                        </table>
                        </div>
                            <div className="paging">
                            <br /><div className='page_info'>
                            Страница 1 из 1. Записи от 1 до 0. Всего записей: {tables.length}.
                                </div>
                            </div>
                        </div>            
                    case "p":
                        return <div className="content_wall" id="tabs_key con1">
                            <div className="tab_api_key active">
                            <h3>Партнерка</h3>
                            <div className="head_tab">
                                <div className="show">
                                    <label>Показывать</label>
                                    <select id="record_on_page" name="record_on_page" className="inp_style_tab">
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                    </select>
                                    <span>операций</span>
                                </div>
                                <div className="refresh" title="Перегрузить">
                                    <a className="inp_style_tab"><i className="far fa-sync"></i></a>
                                </div>
                            </div>
                        <table className="table partnership">
                        <thead>
                            <tr>
                                <th>Дата заявки</th>
                                <th>Платёжная система</th>
                                <th>Номер кошелька/карты</th>
                                <th>Сумма</th>
                                <th>Статус</th>
                                <th>Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                        {(() => {
                        switch (tables.length>0) {
                            case true:
                                return <></>
                            default:
                                return <tr><td align="center" colSpan='6'>Нет данных по Вашему запросу</td></tr>
                        }
                        })()}
                                                   

                    </tbody>
                    </table>
                    </div>
                            <div className="paging">
                            <br /><div className='page_info'>
                            Страница 1 из 1. Записи от 1 до 0. Всего записей: {tables.length}.
                                </div>
                            </div>
                        </div>            
                    case "off":
                        return <div className="content_wall" id="tabs_key con1">
                        <div className="tab_api_key active">
                        <h3>Списания</h3>
                        <div className="head_tab">
                            <div className="show">
                                <label>Показывать</label>
                                <select id="record_on_page" name="record_on_page" className="inp_style_tab">
                                    <option value="10" selected>10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                </select>
                                <span>операций</span>
                            </div>
                            <div className="refresh" title="Перегрузить">
                                <a className="inp_style_tab"><i className="far fa-sync"></i></a>
                            </div>
                        </div>
                        <table className="table">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Сумма</th>
                                <th>Источник</th>
                                <th>Детали</th>
                            </tr>
                        </thead>
                        <tbody>
                        {(() => {
                            switch (tables.length>0) {
                            case true:
                                return <>
                                {tables.map(data=>
                                    <tr>
                                        <td>{Date(data.action_date)}</td>
                                        <td>{cost(data.amount)} &#8381;</td>
                                        <td>{data.action_name}</td>
                                        <td>{data.comments}</td>
                                    </tr>  
                                )}</>
                            default:
                                return <tr><td align="center" colSpan='4'>Нет данных по Вашему запросу</td></tr>
                        }
                        })()}
                               
                        </tbody>
                    </table>
                    </div>
                    <div className="paging">
                    <br /><div className='page_info'>
                    Страница 1 из 1. Записи от 1 до 0. Всего записей: {tables.length}.
                        </div>
                    </div>
                </div>            
                    default:
                        return null
                    }
                })()}
            </Container>
        );
    
};

export default FinanceTable;