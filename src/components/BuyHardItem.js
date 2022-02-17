import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import "../css/css.js"

const BuyHardItem = () => {
        return (
            <div className="column-buybot">
            <div className="title_price">
                <div className="icon"><i className="fas fa-rocket"></i></div>
                <div className="text">
                    <h3>Test Hand</h3>
                    <p>Тестовый тариф на 1 день</p>
                </div>
            </div>
            <div className="form_price form_input active" id="price_form_1">
                <form action="#" method="post">
                <div className="list">
                    <ul>
                        <li><span><i className="fal fa-ruble-sign"></i>500</span></li>
                        <li><i className="fal fa-check"></i>Срок действия 1 день</li>
                        <li><i className="fal fa-check"></i>Доступны все букмекеры</li>
                        <li><i className="fal fa-times"></i>Нет заморозок ключа</li>
                    </ul>
                    <input type="hidden" id="ip_test_hand" name="ip" type="text" value="" />
                    <input type="hidden" id="soft_type" value="2" />
                    <input type="hidden" id="rate_id_test_hand" value="17" />
                    <input type="hidden" id="amount_test_hand" value="500" />
                </div>
                    
                    <input type="button" id="subscribe_test_hand" className="subscribe" value="Оформить подписку" suffix="_test_hand" bk-sale="1" />
                </form>
            </div>
        </div>
        );
    
};

export default BuyHardItem;