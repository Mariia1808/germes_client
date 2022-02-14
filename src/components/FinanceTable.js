import React from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import "../css/css.js"


const FinanceTable = ({number}) => {
        return (
            <Container id="he">
            { number===1? 
                <table class="table">
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
                :
                <></>
            }
            { number===2? 
                <table class="table">
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
                :
                <></>
            }
            {number===3? 
            <table class="table">
			<thead>
				<tr>
					<th>Создан</th>
					<th>ID платежа</th>
					<th>Сумма</th>
					<th>Статус</th>
                    <th class="nowrap">Действителен до</th>
					<th>Действия</th>
				</tr>
            </thead>
               <tbody>
            <tr><td colspan='6' align='center'>Нет данных по Вашему запросу</td> </tr>                       
                        </tbody>
                    </table>
                    : <></>
            }
            
            { number===4? 
                <table class="table partnership">
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
                :
                <></>
            }
            { number===5? 
                <table class="table">
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
                :
                <></>
            }
            </Container>
        );
    
};

export default FinanceTable;