import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Container, Form} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import Header from '../components/Header';
import { Context } from '../index.js';
import { getUser } from '../http/userAPI';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import moment from 'moment';

const Profile = observer(() => {
    const {user} = useContext(Context)
    const [users, setUser] = useState([])
    const formData1 = new FormData()
    formData1.append("require","userdata")
    useEffect(() =>{
        getUser(formData1).then(data=>setUser(data))
    },[])
            return (
        <Container id="he">
              {user.setIsAuth(true)}
            <div className="box profile" id="box">
            <div className="column-2">
                <h3>Общая информация</h3>
                <span>Ваш логин</span>
                <strong className="profile_item" id="new_login">{users.login}</strong>
                <span>Ваш e-mail адрес</span>                   
                <strong className="profile_item">{users.email}</strong>
                <span>Имя</span>                   
                <strong className="profile_item" id="new_name">{users.name}</strong>
                <span>Промокод</span>                   
                <strong className="profile_item" id="promo">{users.reference_code}</strong>                
                <span>Последний вход</span>
                <strong className="profile_item">{moment(<SimpleDateTime dateSeparator="-" format="DD.MM.YYYY" showTime="0">{users.last_visit}</SimpleDateTime>).format('DD.MM.YYYY')}</strong>
                <span>IP адрес последнего входа</span>
                <strong className="profile_item">{users.last_ip}</strong>
                <span>ID телеграм бота @Germes_bet_informer_bot</span>
                <strong className="profile_item" id="tlg_id">{users.telegram_id}</strong>                
            </div>
            <div className="column-2">
                <div className="operacy">
                    <h3>Настройки профиля</h3>
                    <form action="/personal/panel/profile" method="post" className="form_input">
                        <span>Изменить пароль</span>
                        <label htmlFor="old_password">Старый пароль</label>
                        <input id="old_password" name="old_password" type="text" />
                        <label htmlFor="new_password">Новый пароль</label>
                        <input id="new_password" name="new_password" type="text" />
                        <label htmlFor="confirm_password">Повторите новый пароль</label>
                        <input id="confirm_password" name="confirm_password" type="text" />
                        <label htmlFor="enter_log">Изменить вход на сайт</label>
                        <input type="text" id="enter_log" value="" placeholder="новый логин" />
                        <label htmlFor="enter_name">Изменить имя пользователя</label>
                        <input type="text" id="enter_name" value="" placeholder="новое имя" />
                        <label htmlFor="enter_name">Изменить промокод</label>
                        <input type="text" id="new_promo" value="" placeholder="новый промокод" title="Допускаются только латинские буквы, цифры, символы подчёркивания, точки и дефисв." />
                        <label htmlFor="enter_name">Изменить телеграм ID <span className="tlg_note">(для отправки сообщений о неактивных ботах, см. "Настройки")</span></label>
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
