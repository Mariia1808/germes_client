import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../css/css.js"

const OperationBalance = observer(({operation})=>{
    return (
        <Container id="he">
            {(() => {
                switch (operation) {
                    case 1:
                    return <div className="box-balance" id="balance_block">
                            <form id="qiwi_payment" className="form_input" method="post" action="" enctype="utf-8">
                                <label for="balance">Введите сумму платежа QIWI</label>
                                <input id="qiwi_balance_add" name="sum" className="text_input" placeholder="введите сумму" value="" />
                                <input type="button" id="submit_qiwi_balance_add" name="submit_qiwi_balance_add" value="оплатить" />
                            </form>
                        </div>
                    case 2: 
                    return <div className="box-balance" id="partner_block">
                        <div className="form_input"> 
                            <label for="partner">Введите сумму перевода</label>
                            <p>Перевод с партнерского счета на баланс</p>
                            <p></p> 
                            <input id="partner_money" className="input_max" placeholder="введите сумму" />
                            <input type="button" id="transfer_money" value="перевести" />
                        </div>
                    </div>
                    case 3:
                    return <div className="box-balance" id="withdraw_block">
                        <div className="form_input"> 
                            <h3>Выберите систему для вывода</h3>
                            <p>Вывод на карту осуществляется с комиссией + 3%</p>
                            <div className="bank_system">
                                <div className="column-4-fin">
                                    <label><input type="radio" className="wallet" name="bank_select" value="qiwi" checked="true" /><span id="add_qiwi"></span></label>
                                </div>
                                <div className="column-4-fin">
                                    <label><input type="radio" className="wallet" name="bank_select" value="neteller" /><span id="neteller"></span></label>
                                </div>
                                <div className="column-4-fin">
                                    <label><input type="radio" className="wallet" name="bank_select" value="scrill" /><span id="scrill"></span></label>
                                </div>
                                <div className="column-4-fin">
                                    <label><input type="radio" className="wallet" name="bank_select" value="visa" /><span id="visa"></span></label>
                                </div>
                            </div>
                            <label className='l' for="wallet_num">Введите номер кошелька / карты</label>
                            <input id="wallet_num" type="text" placeholder="введите номер кошелька / карты" maxlength="20" />
                            <label for="transfer_sum" className='tra'>Введите сумму вывода<span className="note">(мин. 2000<i className="far fa-ruble-sign"></i>)</span></label>
                            <input id="transfer_sum" name="amount" className="input_max" placeholder="введите сумму" />
                            <input type="button" id="transfer_to_wallet" name="transfer_to_wallet" value="вывести" />
                            <input  type="hidden" id="amount_min" name="amount_min" value="2000" />
                        </div>
                    </div>
                    case 0:
                        return <></>
                    default:
                        return null
                }
            })()}
        </Container>
    );
});

export default OperationBalance;