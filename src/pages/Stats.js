import { observer } from "mobx-react-lite";
import React from "react";
import { Container } from "react-bootstrap";

const Stats = observer(()=>{
    return(
        <Container id="he">
        <div class="content_wall">
        <form action="" method="post" id="bots_list">
            <div class="tab_api_key">                       
                <h6 id="table_title">Статистика по ботам</h6>
                <div class="head_tab">
                    <div class="show">
                        <label>Показывать</label>
                        <select id="record_on_page" name="record_on_page" class="inp_style_tab">
                            <option value="10" selected>10</option>    
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                        записей на странице
                    </div>
                </div>
                <br />
                <div class="head_tab filter_div">
                    <div class="filter_left">
                        <label>Версия бота</label><select name="bot_version" id="bot_version" class="inp_style_stats">
                            <option value=""></option>
                            <option value="0.2.0.9">0.2.0.9</option>
                            <option value="0.2.0.8">0.2.0.8</option>
                            <option value="0.2.0.7">0.2.0.7</option>
                            <option value="0.2.0.6">0.2.0.6</option>
                            <option value="0.2.0.5">0.2.0.5</option>
                            <option value="0.2.0.4">0.2.0.4</option>
                            <option value="0.2.0.3">0.2.0.3</option>
                            <option value="0.2.0.29">0.2.0.29</option>
                            <option value="0.2.0.28">0.2.0.28</option>
                            <option value="0.2.0.27">0.2.0.27</option>
                            <option value="0.2.0.23">0.2.0.23</option>
                            <option value="0.2.0.22">0.2.0.22</option>
                            <option value="0.2.0.21">0.2.0.21</option>
                            <option value="0.2.0.20">0.2.0.20</option>
                            <option value="0.2.0.2">0.2.0.2</option>
                            <option value="0.2.0.19">0.2.0.19</option>
                            <option value="0.2.0.18">0.2.0.18</option>
                            <option value="0.2.0.17">0.2.0.17</option>
                            <option value="0.2.0.16">0.2.0.16</option>
                            <option value="0.2.0.15">0.2.0.15</option>
                            <option value="0.2.0.13">0.2.0.13</option>
                            <option value="0.2.0.1">0.2.0.1</option>
                            <option value="0.2.0.0">0.2.0.0</option>
                            <option value="0.1.817.6">0.1.817.6</option>
                            <option value="0.1.817.4">0.1.817.4</option>
                            <option value="0.1.816.4">0.1.816.4</option>
                            <option value="0.1.815.4">0.1.815.4</option>
                            <option value="0.1.815.2">0.1.815.2</option>
                            <option value="0.1.814.2">0.1.814.2</option>
                            <option value="0.1.814.0">0.1.814.0</option>
                            <option value="0.1.813.2">0.1.813.2</option>
                            <option value="0.1.813.0">0.1.813.0</option>
                            <option value="0.1.812.6">0.1.812.6</option>
                            <option value="0.0.0.1">0.0.0.1</option>
                            </select>
                            &nbsp;&nbsp;
                        <label>Активность</label><select name="activity" id="activity" class="inp_style_stats">
                            <option value=""></option>
                            <option value="active">Активный бот</option>
                            <option value="no_forks">Нет вилок</option>
                            <option value="not_active">Неактивный</option>
                            </select>
                            <i class="far fa-check apply" title="Применить фильтр"></i>
                        &nbsp;&nbsp;<i class="far fa-times clear_filters" title="Очистить фильтры"></i>                        
                    </div>
                </div>
                <table class="data_table">
                    <thead>
                        <tr>
                    		<th>Имя бота</th>
                            <th></th>
                    		<th>IP адрес</th>
                            <th class="th">Попытки</th>
                            <th class="th">Плюс</th>
                            <th class="th">Минус</th>
                            <th class="th">Не перек.</th>
                            <th>Связка</th>
                    		<th class="th">Вилки (%)</th>
                    		<th class="th">Активность</th>
                        </tr>
                    </thead>
                    <tbody id="body_stats"></tbody>
                </table>
            </div>
            <br />                         
            <input type='hidden' value='1' name='current_page' />
            <br /><div class='page_info'>
            Страница 1 из 1. Записи от 1 до 2. Всего записей: 2.
            </div>
        </form>                                  
    </div>
    </Container>
    );
});

export default Stats