import React from 'react';
import { observer } from 'mobx-react-lite';
import "../css/css.js"
import VdsCard from '../components/VdsCard.js';
import { Container } from 'react-bootstrap';

const Proxy = observer(() => {
        return (
            <Container id='he'>
                <div class="pv_banner">
            <a href="https://proxym.net/r/germes">
                <video preload="auto" autoplay="autoplay" loop="loop"><source src="https://germes.bet/personal/assets/images/pv/proxim.mp4" /></video>
            </a>
        </div>
        <div class="content_wall proxy_wall">
            <h6>Проверь свой прокси!</h6>
            <form action="" method="post" id="proxy_parms">
                <div class="proxy_parms">
                    Прокси IP:&nbsp;&nbsp;<input type="text" name="ip" id="proxy_ip" value="" />
                    Порт №:&nbsp;&nbsp;<input type="text" name="port" id="port" value="" />
                    Логин:&nbsp;&nbsp;<input type="text" name="uid" id="uid" value="" />
                    Пароль:&nbsp;&nbsp;<input type="text" name="pwd" id="pwd" value="" />
                    <button class="btn" id="get_proxy_parm" name="get_proxy" value="get_proxy">Проверить</button>
                </div>                
            </form> 
            <table class="data_table" id="q">
                <thead>
                    <tr>
                        <th>Прокси IP</th>
                        <th>Провайдер</th>
                        <th>Протокол</th>
                        <th>Статус</th>
                        <th>Тип</th>
                        <th>Страна</th>
                        <th>Город</th>
                        <th>Анонимность</th>
                        <th class="center">Отклик (с)</th>
                    </tr>
                </thead>        
                <tbody>
                    <tr>
                        <td id="ip">--</td>
                        <td id="provider">--</td>
                        <td id="protocol">--</td>
                        <td id="valid">--</td>
                        <td id="type">--</td>
                        <td id="country">--</td>
                        <td id="city">--</td>
                        <td id="anonymity_level">--</td>
                        <td id="connection_time" class="center">--</td>
                    </tr>                    
                </tbody> 
            </table>
        </div>     
            <div className="proxy_vds">
                <VdsCard/>
            </div>
            </Container>
        );
    
});

export default Proxy;