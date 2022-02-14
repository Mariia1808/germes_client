import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useFavicon, useTitle } from 'react-use';
import "../css/css.js"
import LeftMenu from './LeftMenu.js';


const Header = () => {
    const [ModalLeftMenu,setModalLeftMenu] = useState(false)
    useFavicon('https://germes.bet/personal/assets/images/favicon.png')
    useTitle('Germes - Личный кабинет')
        return (
            <Container id="h">
                <div class="content_admin">
            <div class="header">
                <button class="cl" onClick={()=> setModalLeftMenu(true)}><i class="bi bi-card-list"></i></button>
                <h1>Панель управления GermesBot</h1>
                <div class="users_info"><a href="#" id="rp_users">mvbannikova1808@gmail.com<span id="users_avatar"><i class="fal fa-user"></i></span></a></div>
            </div>
            <div class="paginator">
                <div id="page_info">
                    <a href="https://germes.bet/personal/panel"><i id="home_icon" class="fas fa-home"></i>Панель управления</a>
                    <span><i id="right_icon" class="bi bi-chevron-right"></i><span id="curr_page">Мои подписки</span></span>
                </div>
                <div class="link_download">
                    <a href="/buybot" id="pr" class="btn_price">Подписки GermesBot</a>
                    <a href="/buyhand" id="pr" class="btn_price">Подписки GermesHand</a>
                    <a href="https://germes.bet/personal/download">Скачать GermesBot</a>
                    <a href="https://germes.bet/personal/download/hand">Скачать GermesHand</a>
                </div>
            </div>
            
            </div>
            <LeftMenu show={ModalLeftMenu} onHide={()=> setModalLeftMenu(false)}/>
            
            </Container>
        );
    
};

export default Header;