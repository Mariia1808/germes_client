import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "../css/css.js"
import Header from '../components/Header';
import FinanceTable from '../components/FinanceTable.js';


const Finance = () => {
    const [table, setTable] = useState('')
        return (
            <Container id="he">
                 <Header/>
                <div class="content_admin">
                    <input type="hidden" id="payment_message" value="" />
                    <input type="hidden" id="operation" value="all" />
                    <div class="box finance nowrap">
                    <div class="column-2-fin">
                    <h3>Доступные средства</h3>
                <div class="column-3-fin no-background attachment">
                    <div class="text">
                        <span>Баланс</span>
                        <strong>0</strong><i class="fal fa-ruble-sign"></i>
                    </div>
                </div>
                <div class="column-3-fin no-background attachment">
                    <div class="text">
                        <span>Партнерка</span>
                        <strong id="available" data-summ="0">0</strong><i class="fal fa-ruble-sign"></i>
                    </div>
                </div>
                <div class="column-3-fin no-background attachment">
                    <div class="text">
                        <span>CashBack *</span>
                        <strong id="available" data-summ="0">0</strong><i class="fal fa-ruble-sign"></i>
                    </div>
                </div>
                <span ></span>                
            </div>
            <div class="column-2-fin">
                <div class="operacy">
                    <h3>Операции с балансом</h3>
                     <div class="column-3-fin no-background attachment">
                         <a href="#" class="btn_middle show_block" data-name="balance_block">Пополнить баланс</a>
                     </div>
                    <div class="column-3-fin no-background attachment">
                         <a href="#" class="btn_middle show_block" data-name="partner_block">Перевести средства</a>
                    </div>
                    <div class="column-3-fin no-background attachment" >
                        <a href="#" class="btn_middle show_block" data-name="withdraw_block">Вывести средства</a>
                    </div>
                    <div class="box-balance" id="balance_block">

                    <div class="close"><a><i class="fal fa-times"></i></a></div>
                    <form id="qiwi_payment" class="form_input" method="post" action="" enctype="utf-8">
                        <label for="balance">Введите сумму платежа QIWI</label>
                        <input id="qiwi_balance_add" name="sum" type="number" class="text_input" placeholder="введите сумму" value="" />
                        <input type="button" id="submit_qiwi_balance_add" name="submit_qiwi_balance_add" value="оплатить" />
                    </form>
                    </div>
                    <div class="box-balance" id="partner_block">
                        <div class="close"><a><i class="fal fa-times"></i></a></div>
                        <div class="form_input"> 
                            <label for="partner">Введите сумму перевода</label>
                            <p>Перевод с партнерского счета на баланс</p>
                            <p></p> 
                            <input id="partner_money" type="number" class="input_max" placeholder="введите сумму" />
                            <input type="button" id="transfer_money" value="перевести" />
                        </div>
                    </div>
                    <div class="box-balance" id="withdraw_block">
                        <div class="close"><a><i class="fal fa-times"></i></a></div>
                        <div class="form_input"> 
                            <h3>Выберите систему для вывода</h3>
                            <p>Вывод на карту осуществляется с комиссией + 3%</p>
                            <div class="bank_system">
                                <div class="column-4-fin">
                                    <label><input type="radio" class="wallet" name="bank_select" value="qiwi" checked="true" /><span id="add_qiwi"></span></label>
                                </div>
                                <div class="column-4-fin">
                                    <label><input type="radio" class="wallet" name="bank_select" value="neteller" /><span id="neteller"></span></label>
                                </div>
                                <div class="column-4-fin">
                                    <label><input type="radio" class="wallet" name="bank_select" value="scrill" /><span id="scrill"></span></label>
                                </div>
                                <div class="column-4-fin">
                                    <label><input type="radio" class="wallet" name="bank_select" value="visa" /><span id="visa"></span></label>
                                </div>
                            </div>
                            <label class='l' for="wallet_num">Введите номер кошелька / карты</label>
                            <input id="wallet_num" type="text" placeholder="введите номер кошелька / карты" maxlength="20" />
                            <label for="transfer_sum" class='tra'>Введите сумму вывода<span class="note">(мин. 2000<i class="far fa-ruble-sign"></i>)</span></label>
                            <input id="transfer_sum" type="number" name="amount" class="input_max" placeholder="введите сумму" />
                            <input type="button" id="transfer_to_wallet" name="transfer_to_wallet" value="вывести" />
                            <input  type="hidden" id="amount_min" name="amount_min" value="2000" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content_wall" id="con">
            <h3>фильтр по истории операций</h3>
            <div class="tab_api_key">
                <div class="head_table">
                    <div class="tabs">
                        <ul>
                            <li><Button onClick={()=>setTable(1)} target="_self" id="all" class="">Все операции</Button></li>
                            <li><Button onClick={()=>setTable(2)} target="_self" id="add" class="">Пополнения</Button></li>
							<li><Button onClick={()=>setTable(3)} target="_self" id="qiwi" class="">История (QIWI)</Button></li>
                            <li><Button onClick={()=>setTable(4)} target="_self" id="p" class="">Партнерка</Button></li>
                            <li><Button onClick={()=>setTable(5)} target="_self" id="off" class="">Списания</Button></li>
                        </ul>
                    </div>
                    <div class="search">
                        <label for="date_key">Поиск по дате&nbsp;&nbsp;</label>
                        <input class="inp_style_tab" id="date_key"  type="text" name="search" autocomplete="off" />
                    </div>
                    <div class="clear_form" title="Очистить все поля формы"><a class="inp_style_tab"><i class="fal fa-times"></i></a></div>
                    </div>
                </div>
            </div>
            <form id="finance">
                <div class="content_wall" id="tabs_key" id="con1">
                <div class="tab_api_key active">
                <h3>Все операции</h3>
                <div class="head_tab">
                    <div class="show">
                        <label>Показывать</label>
                        <select id="record_on_page" name="record_on_page" class="inp_style_tab">
                            <option value="10" selected>10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                        <span>операций</span>
                    </div>
                    <div class="refresh" title="Перегрузить">
                        <a class="inp_style_tab"><i class="far fa-sync"></i></a>
                    </div>
                </div>
                <FinanceTable number={table}/>
            </div>
            <div class="paging">
            <br /><div class='page_info'>
            Страница 1 из 1. Записи от 1 до 0. Всего записей: 0.
            </div>
        
            </div>
        </div>            
        </form>
                </div>
            </Container>
        );
    
};

export default Finance;