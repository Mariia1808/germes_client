import React from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import "../css/css.js"


const LeftMenu = ({show, onHide}) => {
        return (
            <Modal 
            show={show}
            onHide={onHide}
            contentClassName="leftmenu"
            >
                <div  class="left_panel_admin">
                <div class="logotype">
                    <button class="cl" id="left_panel_close" onClick={()=> onHide(false)}><i class="bi bi-x-lg"></i></button>
                    <a href="https://germes.bet/personal/panel"><img src="https://germes.bet/personal/assets/images/logo_germes-09.png" alt="Germes" /></a>
                </div>
                <ul class="menu">
                    <li id="acts"><a class="menu-active" href="/acts"><span><i class="bi bi-house-door"></i></span>Акции</a></li>
                    <li id="apikeys"><a class="menu-active" href="/panel"><span><i class="bi bi-key"></i></span>Мои подписки</a></li>
                    <li id="stats"><a class="menu-not-active" href="#"><span><i class="bi bi-graph-up-arrow"></i></span>Статистика</a></li>
                    <li id="finance"><a class="menu-active" href="/finance"><span><i class="bi bi-bank"></i></span>Финансы</a></li>
                    <li id="partnership"><a class="menu-not-active" href="#"><span><i class="bi bi-hand-thumbs-up-fill"></i></span>Партнерка</a></li>
                    <li id="set_bk"><a class="menu-not-active" href="#"><span><i class="bi bi-gear"></i></span>Настройки</a></li>
                    <li id="sales"><a class="menu-not-active" href="#"><span><i class="bi bi-ticket-detailed"></i></span>Купоны на скидку</a></li>
                    <li id="reviews"><a class="menu-active" href="/reviews"><span><i class="bi bi-pencil"></i></span>Отзывы</a></li>
                    <li id="proxy"><a class="menu-not-active" href="#"><span><i class="bi bi-plug"></i></span>Прокси</a></li>
                    <li id="vds"><a class="menu-not-active"  href="#"><span><i class="bi bi-server"></i></span>VDS</a></li>
                    <li id="img"><a class="menu-not-active"  href="#"><span><i class="bi bi-camera"></i></span>Очистка фото</a></li>
                    <li id="wiki"><a class="menu-active" href="https://germes.bet/wiki/" target="_blank"><span><i class="bi bi-book"></i></span>Мануал</a></li>
                </ul></div>
            </Modal>
        );
    
};

export default LeftMenu;