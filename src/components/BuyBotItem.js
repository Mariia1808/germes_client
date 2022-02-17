import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "../css/css.js"

const BuyBotItem = () => {
        return (
            <div className="column-buybot">
            <div className="title_price">
                <div className="icon"><i className="fas fa-rocket"></i></div>
                <div className="text">
                    <h3>Test</h3>
                    <p>Тестовый тариф на 1 день</p>
                </div>
            </div>
            <div className="content_price active" id="price_block_1">
                <div className="list">
                    <ul>
                        <li><span><i className="fal fa-ruble-sign"></i>400</span></li>
                        
                        <li><i className="fal fa-check"></i>Срок действия 1 день</li>
                        <li><i className="fal fa-check"></i>Доступны все букмекеры</li>
                        <li><i className="fal fa-times"></i>Нет заморозок ключа</li>
                    </ul>
                </div>
                <div className="btn_bl">
                    <a className="btn_middle add_balance" data-id="1"  rate="14">Выбрать тариф</a>
                </div>
            </div>
            <div className="form_price form_input" id="price_form_1">
                <form action="#" method="post">
                    <div className="content_form_price">
                        <label for="ip_test">Введите IP адрес VDS</label>
                        <p>VDS используется для установки на него бота, подходящий VDS можно выбрать на нашей странице <a href="https://germes.bet/personal/panel/pv/vds" target="_self">VDS</a></p>
                        <input id="ip_test" className="ip" name="ip" type="text" placeholder="Введите ip" />
                        <input type="hidden" id="soft_type" value="1" />
                        <input type="hidden" id="rate_id_test" value="14" />
                        <input type="hidden" id="amount_test" value="400" />
                    </div>
                    
                    <input type="button" id="subscribe_test" className="subscribe" value="Оформить подписку" suffix="_test" bk-sale="1" />
                    
                </form>
            </div>
            </div>
        );
    
};

export default BuyBotItem;