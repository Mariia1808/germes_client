import React, { useState } from 'react';
import { Card, Container, Form} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import Attention from '../modals/Attention';
import LeftMenu from '../components/LeftMenu';
import Header from '../components/Header';
import {useFavicon, useTitle} from 'react-use';
import "../css/css.js"

const Panel = observer(() => {

    const [ModalVk,setModalVk] = useState(true)
    return (
        <Container id="he"> 
           <Header/>
           <Attention show={ModalVk} onHide={()=> setModalVk(false)}/>
           <div class="content_admin">
           <div class="content_wall" id="con2">
            <div class="tab_api_key">
           <h6 id="table_title">Активные вилки</h6>
                <form action="" method="post">
    				<label for="forks_bk1" class='bk1'>БК №1&nbsp;</label>
                <select name="forks_bk1" id="forks_bk1" class="bk_ddlb">
                <option value="0">ВСЕ</option>
                <option value="22">1XBet</option>
                <option value="55">1xstavka</option>
                <option value="42">Bet365</option>
                <option value="1000">BetBoom</option>
                <option value="17">Betbiir_Birzha</option>
                <option value="62">BetOnline</option>
                <option value="9">FonBet</option>
                <option value="21">liga stavok</option>
                <option value="56">LootBet</option>
                <option value="2">Marathon</option>
                <option value="38">Melbet</option>
                <option value="19">Olimp</option>
                <option value="46">Olimp_com</option>
                <option value="41">Parimatch</option>
                <option value="12">Pinnacle</option>
                <option value="20">WinLineBet</option>
                </select>
                    &nbsp;&nbsp;
                    <label for="forks_bk2" class='bk1'> БК №2&nbsp;</label>
                <select name="forks_bk2" id="forks_bk2" class="bk_ddlb">
                <option value="0">ВСЕ</option>
                <option value="22">1XBet</option>
                <option value="55">1xstavka</option>
                <option value="42">Bet365</option>
                <option value="1000">BetBoom</option>
                <option value="17">BetFair_Birzha</option>
                <option value="62">BetOnline</option>
                <option value="9">FonBet</option>
                <option value="21">liga stavok</option>
                <option value="56">LootBet</option>
                <option value="2">Marathon</option>
                <option value="38">Melbet</option>
                <option value="19">Olimp</option>
                <option value="46">Olimp_com</option>
                <option value="41">Parimatch</option>
                <option value="12">Pinnacle</option>
                <option value="20">WinLineBet</option>
                </select>
    				<button type="submit" name="show_forks_start" class="show_forks">показать</button>
                    <button type="submit" name="show_forks_stop" class="stop_forks" disabled="true">стоп</button>
                </form>
            </div>
        </div>
        
    	<div class="content_wall">
        <form action="" method="post" id="botkey_list_form">            
            <div class="tab_api_key">
                <h6>Фильтр</h6>
                <div class="filters">
                    <div class="filtr_item" id="blok_type_key">
                        <label for="type_key">Тарифный план</label>
                        
                    <select id="rate_id" name="rate_id" class="inp_style_tab">
                    <option value=""></option>
                    </select>
                    </div>
                    <div class="filtr_item" id="blok_scanner_key">
                        <label for="scanner_key">Тип сканера</label>
                        <select id="scanner_key" name="soft_type" class="inp_style_tab">
                            <option value="">Все</option>
                            <option value="1">Бот</option>
                            <option value="2">Ручной сканер</option>
                        </select>
                    </div>                    
                    <div class="filtr_item" id="blok_status_key">
                        <label for="status_key">Статус ключей</label>
                        <select id="status_key" name="status_key" class="inp_style_tab">
                            <option value="T">Все подписки</option>
                            <option value="A" selected>Все активные подписки</option>
                            <option value="Y">Активные ключи</option>
                            <option value="S">Остановленные ключи</option>
                            <option value="N">Неактивные ключи</option>
                        </select>
                    </div>
                    <div class="filtr_item" id="blok_date_key">
                        <label for="date_key">Дата покупки</label>
                        <input type="text" id="date_key" name="date_key" class="inp_style_tab" value="" />
                            &nbsp;&nbsp;<button class="but"><i class="bi bi-check-lg" title="Применить"></i></button>
                            &nbsp;&nbsp;<button class="but"><i class="bi bi-x-lg" title="Очистить календарь"></i></button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        
        <div class="content_wall" id="tabs_key">
            <form>
            <div class="tab_api_key active">
                <h6>Все активные подписки (всего: <span class="all" id="total_count">0</span>)</h6>
                <div class="head_tab">
                    <div class="show">
                        <label>Показывать</label>
                        <select id="record_on_page" name="record_on_page" class="inp_style_tab">              
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span>записей на странице</span>
                        <span id="ajax_msg" class="ajax_error"></span>
                    </div>
                    <div class="refresh" id="res" title="Перегрузить" >
                    <button class="but"><i class="bi bi-arrow-repeat"></i></button>
                    </div>
                </div>
                <span class="bk_note">
                    Note: для просмотра полной информации о Бот-ключе кликните на линк в колонке "Ключ".<br />
                    Для изменения IP ключа кликните на поле в колонке "IP", имени ключа - в колонке "Имя"
                </span>
                <table class="data_table">
                    <thead>
                        <tr>
                            <th>IP</th>
                            <th>Имя</th>
                            <th>Ключ</th>
                            <th>Пароль</th>
                            <th>Тип БК</th>
                            <th>Тариф</th>
                            <th>Осталось</th>
                            <th>Замор.</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                     <tr>
                        <td colspan="9">Не найдено бот-ключей по Вашему запросу.</td>
                    </tr>
                            
                </table>
            </div>
            <div class="paging">
<br /><div class='page_info'>
Страница 1 из 1. Записи от 1 до 0. Всего записей: 0.
</div>
        
            </div>
            <input type="hidden" id="page_name" value="templ_panel_apikeys" />
            <input type="hidden" id="active_count" value="0" />
            <input type="hidden" id="curr_balance" value="" />
            <input type="hidden" id="curr_cashback" value="0" />
            <input type="hidden" id="bonus_percent" value="0.5" />
            </form> </div></div>
        </Container>
    );
    
});

export default Panel;
