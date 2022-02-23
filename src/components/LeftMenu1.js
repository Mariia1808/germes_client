import React from 'react';
import { ACTS_ROUTE } from '../utils/consts';
import { Button, Card, Container, Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import "../css/css.js"


const LeftMenu = observer(({show, onHide}) => {
    const history = useNavigate()
        return (
            <Modal 
            show={show}
            onHide={onHide}
            contentClassName="leftmenu"
            >
                <div  className="left_panel_admin">
                    <div className="logotype">
                        <button className="cl" id="left_panel_close" onClick={()=> onHide(false)}><i className="bi bi-x-lg"></i></button>
                        <a href="https://germes.bet/personal/panel"><img src="https://germes.bet/personal/assets/images/logo_germes-09.png" alt="Germes" /></a>
                    </div>
                        <ul className="menu">
                            <li id="acts"><Button className="menu-active" id='btn_middle' href="/acts"><span><i className="bi bi-house-door"></i></span>Акции</Button></li>
                            <li id="apikeys"><Button className="menu-active" id='btn_middle' href="/panel"><span><i className="bi bi-key"></i></span>Мои подписки</Button></li>
                            <li id="stats"><Button className="menu-active" id='btn_middle' href="/stats"><span><i className="bi bi-graph-up-arrow"></i></span>Статистика</Button></li>
                            <li id="finance"><Button className="menu-active" id='btn_middle' href="/finance"><span><i className="bi bi-bank"></i></span>Финансы</Button></li>
                            <li id="partnership"><Button className="menu-active" id='btn_middle' href="/partnership"><span><i className="bi bi-hand-thumbs-up-fill"></i></span>Партнерка</Button></li>
                            <li id="set_bk">
                                <DropdownButton id="btn_middle" className="menu-active" title={<i className='bi bi-gear'>Настройки профилей</i>}>
                                    <Dropdown.Item id="btn_middle" className="menu-active" href="/create_profil">Создать профиль</Dropdown.Item>
                                    <Dropdown.Item id="btn_middle" className="menu-active" href="#/action-2">Мои профили</Dropdown.Item>
                                </DropdownButton>
                            </li>
                            <li id="sales"><Button className="menu-active" id='btn_middle' href="/sales"><span><i className="bi bi-ticket-detailed"></i></span>Купоны на скидку</Button></li>
                            <li id="reviews"><Button className="menu-active" id='btn_middle' href="/reviews"><span><i className="bi bi-pencil"></i></span>Отзывы</Button></li>
                            <li id="proxy"><Button className="menu-active" id='btn_middle' href="/proxy"><span><i className="bi bi-plug"></i></span>Прокси</Button></li>
                            <li id="vds"><Button className="menu-active"  id='btn_middle' href="/vds"><span><i className="bi bi-server"></i></span>VDS</Button></li>
                            <li id="img"><Button className="menu-active"  id='btn_middle' href="/img"><span><i className="bi bi-camera"></i></span>Очистка фото</Button></li>
                            <li id="wiki"><Button className="menu-active" id='btn_middle' href="https://germes.bet/wiki/" target="_blank"><span><i className="bi bi-book"></i></span>Мануал</Button></li>
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
            </Modal>
        );
    
});

export default LeftMenu;