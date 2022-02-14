import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Header from '../components/Header.js';
import "../css/css.js"


const Acts = () => {
    const [ModalLeftMenu,setModalLeftMenu] = useState(false)
        return (
            
            <Container id="he">
                <Header/>
            <Card class="content_wall" id="con3">
            <div class="proxy_vds">
            <div class="pv_column-3 act-3">
                <div class="title_pv">
                    <div class="icon"><i class="fas fa-computer-classic"></i></div>
                    <div class="act_title">
                        <h3>Привяжи VK и получи 600р на основной баланс!</h3>
                    </div>
                </div>
                <div class="act_text">Ваша страница должна быть зарегистрирована не менее трёх месяцев на сервисе ВКонтакте. Ваш email, введённый при регистрации, должен СООТВЕТСТВОВАТЬ email страницы ВКонтакте.</div>
                <div class="act_link"> 
                <a href="https://germes.bet/wiki/Привязать-страницу-VK" target="_blank">Как привязать страницу VK?</a>
                </div>
            </div>

            <div class="pv_column-3 act-3">
                <div class="title_pv">
                    <div class="icon"><i class="fas fa-computer-classic"></i></div>
                    <div class="act_title">
                        <h3>Оставь отзыв и получи скидку 25%!</h3>
                    </div>
                </div>
                <div class="act_text">Условия акции: К вашему личному кабинету должна быть привязана личная страница Вконтакте, отзыв должен быть честным и максимально конструктивным.</div>
                <div class="act_link"> <a href="https://vk.com/germesbetting?w=app6326142_-172054480" target="_blank">Оставить отзыв</a></div>
            </div>

            <div class="pv_column-3 act-3">
                <div class="title_pv">
                    <div class="icon"><i class="fas fa-computer-classic"></i></div>
                    <div class="act_title">
                        <h3>Трёхступенчатая реферальная система</h3>
                    </div>
                </div>
                <div class="act_text">Условия акции: К вашему личному кабинету должна быть привязана личная страница ВКонтакте.</div>
                <div class="act_link"> <a href="https://germes.bet/wiki/Партнёрка" target="_blank">Что такое реферальная система?</a></div>
            </div>

        </div>
        </Card>
            </Container>
        );
    
};

export default Acts;