import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useFavicon, useTitle } from 'react-use';
import "../css/css.js"
import LeftMenu from './LeftMenu.js';


const Header = () => {
    const [ModalLeftMenu,setModalLeftMenu] = useState(false)
    useFavicon('https://germes.bet/personal/assets/images/favicon.png')
    useTitle('Germes - Личный кабинет')
    const location = useLocation()
    const [name, setName]=useState()
        return (
            <Container id="h">
                <div className="content_admin">
            <div className="header">
                <button className="cl" onClick={()=> setModalLeftMenu(true)}><i className="bi bi-card-list"></i></button>
                <h1>Панель управления GermesBot</h1>
                <div className="users_info"><a href="#" id="rp_users">mvbannikova1808@gmail.com<span id="users_avatar"><i className="fal fa-user"></i></span></a></div>
            </div>
            <div className="paginator">
                <div id="page_info">
                    <a href="/panel"><i id="home_icon" className="fas fa-home"></i>Панель управления</a>
                    <span><i id="right_icon" className="bi bi-chevron-right"></i>
                    {(() => {
                    switch (location.pathname) {
                    case "/panel":
                        return <span id="curr_page">Мои подписки</span>
                    case "/profile":
                        return <span id="curr_page">Настройки профиля</span>
                    case "/finance":
                        return <span id="curr_page">Финансы</span>
                    case "/acts":
                        return <span id="curr_page">Акции</span>
                    case "/reviews":
                        return <span id="curr_page">Отзывы</span>
                    case "/buybot":
                        return <span id="curr_page">Оформить подписку для бота</span>
                    case "/buyhand":
                        return <span id="curr_page">Подписка для ручника</span>
                    case "/partnership":
                        return <span id="curr_page">Партнерка</span>
                    case "/vds":
                        return <span id="curr_page">VDS</span>
                    case "/sales":
                        return <span id="curr_page">Купоны на скидку</span>
                    case "/proxy":
                        return <span id="curr_page">Прокси</span>
                    case "/stats":
                        return <span id="curr_page">Статистика</span>
                    case "/img":
                        return <span id="curr_page">Очистка фото</span>
                    case "/create_profil":
                        return <span id="curr_page">Создание профиля</span>
                    default:
                        return <span id="curr_page">Создание профиля</span>
                    }
            })()}
                    </span>
                </div>
                <div className="link_download">
                    <a href="/buybot" id="pr" className="btn_price">Подписки GermesBot</a>
                    <a href="/buyhand" id="pr" className="btn_price">Подписки GermesHand</a>
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