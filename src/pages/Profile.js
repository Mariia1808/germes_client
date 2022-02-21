import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import Header from '../components/Header';
import { Context } from '..';

const Profile = observer(() => {
    const {user} = useContext(Context)
            return (
        <Container id="he">
              {user.setIsAuth(true)}
            <div className="box profile" id="box">
            <div className="column-2">
                <h3>Общая информация</h3>
                <span>Ваш логин</span>
                <strong className="profile_item" id="new_login">mvbannikova1808</strong>
                <span>Ваш e-mail адрес</span>                   
                <strong className="profile_item">mvbannikova1808@gmail.com</strong>
                <span>Имя</span>                   
                <strong className="profile_item" id="new_name">Bannikova Mariia</strong>
                <span>Промокод</span>                   
                <strong className="profile_item" id="promo">cf573eeff98dbf04f658</strong>                
                <span>Последний вход</span>
                <strong className="profile_item">2022.02.10 19:37:28</strong>
                <span>IP адрес последнего входа</span>
                <strong className="profile_item">178.72.71.150</strong>
                <span>ID телеграм бота @Germes_bet_informer_bot</span>
                <strong className="profile_item" id="tlg_id">не установлен</strong>                
            </div>
            <div className="column-2">
                <div className="operacy">
                    <h3>Настройки профиля</h3>
                    <form action="/personal/panel/profile" method="post" className="form_input">
                        <span>Изменить пароль</span>
                        <label for="old_password">Старый пароль</label>
                        <input id="old_password" name="old_password" type="text" />
                        <label for="new_password">Новый пароль</label>
                        <input id="new_password" name="new_password" type="text" />
                        <label for="confirm_password">Повторите новый пароль</label>
                        <input id="confirm_password" name="confirm_password" type="text" />
                        <label for="enter_log">Изменить вход на сайт</label>
                        <input type="text" id="enter_log" value="" placeholder="новый логин" />
                        <label for="enter_name">Изменить имя пользователя</label>
                        <input type="text" id="enter_name" value="" placeholder="новое имя" />
                        <label for="enter_name">Изменить промокод</label>
                        <input type="text" id="new_promo" value="" placeholder="новый промокод" title="Допускаются только латинские буквы, цифры, символы подчёркивания, точки и дефисв." />
                        <label for="enter_name">Изменить телеграм ID <span className="tlg_note">(для отправки сообщений о неактивных ботах, см. "Настройки")</span></label>
                        <input type="text" id="telegram_id" value="" placeholder="установить новый ID" />                                                
                        <br />
                        <input type="button" id="save" name="save" value="сохранить" />
                    </form>
                </div>
            </div>
        </div>
        <input type="hidden" id="page_name" value="templ_panel_profile" />
        </Container>
    );
    
});

export default Profile;
