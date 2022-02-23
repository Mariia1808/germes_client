import React from 'react';
import { Container } from 'react-bootstrap';
import "../css/css.js"



const FinanceTable = ({number}) => {
        return (
            <Container id="he">
               {(() => {
                    switch (number) {
                    case 1:
                        return <div className="content_wall" id="tabs_key" id="con1">
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
                                <tr><td colSpan='4' align='center'>Нет данных по Вашему запросу</td></tr>                        
                                </tbody>
                            </table>
                            </div>
                            <div className="paging">
                            <br /><div className='page_info'>
                            Страница 1 из 1. Записи от 1 до 0. Всего записей: 0.
                                </div>
                            </div>
                        </div>            
                    case 2:
                        return <div className="content_wall" id="tabs_key" id="con1">
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
                        <tr><td colSpan='4' align='center'>Нет данных по Вашему запросу</td></tr>                        
                        </tbody>
                    </table>
                    </div>
                            <div className="paging">
                            <br /><div className='page_info'>
                            Страница 1 из 1. Записи от 1 до 0. Всего записей: 0.
                                </div>
                            </div>
                        </div>            
                    case 3:
                        return <div className="content_wall" id="tabs_key" id="con1">
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
                        <tr><td colSpan='6' align='center'>Нет данных по Вашему запросу</td> </tr>                       
                            </tbody>
                        </table>
                        </div>
                            <div className="paging">
                            <br /><div className='page_info'>
                            Страница 1 из 1. Записи от 1 до 0. Всего записей: 0.
                                </div>
                            </div>
                        </div>            
                    case 4:
                        return <div className="content_wall" id="tabs_key" id="con1">
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
                    <tr><td colSpan='6' align='center'>Нет данных по Вашему запросу</td> </tr>             
                    </tbody>
                    </table>
                    </div>
                            <div className="paging">
                            <br /><div className='page_info'>
                            Страница 1 из 1. Записи от 1 до 0. Всего записей: 0.
                                </div>
                            </div>
                        </div>            
                    case 5:
                        return <div className="content_wall" id="tabs_key" id="con1">
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
                        <tr><td colSpan='4' align='center'>Нет данных по Вашему запросу</td></tr>                        
                        </tbody>
                    </table>
                    </div>
                    <div className="paging">
                    <br /><div className='page_info'>
                    Страница 1 из 1. Записи от 1 до 0. Всего записей: 0.
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