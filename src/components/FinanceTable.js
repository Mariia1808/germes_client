import React from 'react';
import { Container } from 'react-bootstrap';
import "../css/css.js"



const FinanceTable = ({number}) => {
        return (
            <Container id="he">
               {(() => {
                    switch (number) {
                    case 1:
                        return <table className="table">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Сумма</th>
                                <th>Источник</th>
                                <th>Детали</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr><td colspan='4' align='center'>Нет данных по Вашему запросу</td></tr>                        
                        </tbody>
                    </table>
                    case 2:
                        return <table className="table">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Сумма</th>
                                <th>Источник</th>
                                <th>Детали</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr><td colspan='4' align='center'>Нет данных по Вашему запросу</td></tr>                        
                        </tbody>
                    </table>
                    case 3:
                        return <table className="table">
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
                        <tr><td colspan='6' align='center'>Нет данных по Вашему запросу</td> </tr>                       
                            </tbody>
                        </table>
                    case 4:
                        return <table className="table partnership">
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
                    <tr><td colspan='6' align='center'>Нет данных по Вашему запросу</td> </tr>             
                    </tbody>
                    </table>
                    case 5:
                        return <table className="table">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Сумма</th>
                                <th>Источник</th>
                                <th>Детали</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr><td colspan='4' align='center'>Нет данных по Вашему запросу</td></tr>                        
                        </tbody>
                    </table>
                    default:
                        return null
                    }
                })()}
            </Container>
        );
    
};

export default FinanceTable;