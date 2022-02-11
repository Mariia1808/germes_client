import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "../css/css.js"


const Header = () => {
        return (
            <Container id="h">
                <div class="content_admin">
            <div class="header">
                <a href="#" id="open_menu"><i class="far fa-bars"></i></a>
                <h1>Панель управления GermesBot</h1>
                <div class="users_info"><a href="#" id="rp_users">mvbannikova1808@gmail.com<span id="users_avatar"><i class="fal fa-user"></i></span></a></div>
            </div>
            <div class="paginator">
                <div id="page_info">
                    <a href="https://germes.bet/personal/panel"><i id="home_icon" class="fas fa-home"></i>Панель управления</a>
                    <span><i id="right_icon" class="far fa-chevron-right"></i><span id="curr_page">Мои подписки</span></span>
                </div>
                <div class="link_download">
                    <a href="https://germes.bet/personal/panel/buybot" id="pr" class="btn_price">Подписки GermesBot</a>
                    <a href="https://germes.bet/personal/panel/buyhand" id="pr" class="btn_price">Подписки GermesHand</a>
                    <a href="https://germes.bet/personal/download">Скачать GermesBot</a>
                    <a href="https://germes.bet/personal/download/hand">Скачать GermesHand</a>
                </div>
            </div>
            
            </div>
            </Container>
        );
    
};

export default Header;