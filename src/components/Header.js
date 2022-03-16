import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useFavicon, useTitle } from 'react-use';
import "../css/css.js"
import { getUser } from '../http/userAPI.js';
import { Context } from '../index.js';
import LeftMenu from './LeftMenu.js';


const Header = () => {
    const [ModalLeftMenu,setModalLeftMenu] = useState(false)
    useFavicon('https://germes.bet/personal/assets/images/favicon.png')
    useTitle('Germes - Личный кабинет')
    const location = useLocation()
    const {user} = useContext(Context)    
    const [name, setName]=useState()
    //const [menu, setMenu]=useState(false)
    const [users, setUser] = useState([])
    const formData1 = new FormData()
    formData1.append("require","userdata")
    useEffect(() =>{
        getUser(formData1).then(data=>setUser(data))
    },[])
        return (
            <Container id="h">
                <div className="content_admin">
            <div className="header">
                <button className="cl" onClick={()=> setModalLeftMenu(true)}><i className="bi bi-card-list"></i></button>
                <h1>Панель управления GermesBot</h1>
                <div className="users_info"><a href="/profile" id="rp_users">{users.email}<span id="users_avatar"><i className="bi bi-person-circle"></i></span></a></div>
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
            <div
            contentClassName="leftmenu"
            >
                {(() => {
                switch (ModalLeftMenu) {
                    case true:
                        return <div  className="left_panel_admin">
                        <div className="logotype">
                            <button className="cl" id="left_panel_close" onClick={()=> setModalLeftMenu(false)}><i className="bi bi-x-lg"></i></button>
                            <a href="https://germes.bet/personal/panel"><img src="https://germes.bet/personal/assets/images/logo_germes-09.png" alt="Germes" /></a>
                        </div>
                            <ul className="menu">
                                <li id="acts"><a href="/acts"><span><i className="bi bi-house-door"></i></span>Акции</a></li>
                                <li id="apikeys"><a href="/panel"><span><i className="bi bi-key"></i></span>Мои подписки</a></li>
                                <li id="stats"><a href="/stats"><span><i className="bi bi-graph-up-arrow"></i></span>Статистика</a></li>
                                <li id="finance"><a href="/finance"><span><i className="bi bi-bank"></i></span>Финансы</a></li>
                                <li id="partnership"><a href="/partnership"><span><i className="bi bi-hand-thumbs-up-fill"></i></span>Партнерка</a></li>
                                <li id="set_bk">
                                    
                                    <DropdownButton id="btn_middle" title={<i className='bi bi-gear'>Настройки профилей</i>}>
                                        <Dropdown.Item id="btn_middle" href="/create_profil">Создать профиль</Dropdown.Item>
                                        <Dropdown.Item id="btn_middle" href="#/action-2">Мои профили</Dropdown.Item>
                                    </DropdownButton>
                                </li>
                                <li id="sales"><a href="/sales"><span><i className="bi bi-ticket-detailed"></i></span>Купоны на скидку</a></li>
                                <li id="reviews"><a href="/reviews"><span><i className="bi bi-pencil"></i></span>Отзывы</a></li>
                                <li id="proxy"><a href="/proxy"><span><i className="bi bi-plug"></i></span>Прокси</a></li>
                                <li id="vds"><a href="/vds"><span><i className="bi bi-server"></i></span>VDS</a></li>
                                <li id="img"><a href="/img"><span><i className="bi bi-camera"></i></span>Очистка фото</a></li>
                                <li id="wiki"><a href="https://germes.bet/wiki/" target="_blank"><span><i className="bi bi-book"></i></span>Мануал</a></li>
                            </ul>
                        <div className="info_balance_user">
                            <h1>Статистика</h1>
                            <div className="static_item">
                                <div className="static_icon white"><i className="fas fa-desktop"></i></div>
                                <div className="static_text">
                                    <h2>Всего активных</h2>
                                    <p>Подписок</p>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                default:
                        return <></>
                    }
                })()}
            </div>

            
            
            </Container>
        );
    
};

export default Header;