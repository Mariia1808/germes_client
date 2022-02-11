import React, { useState } from 'react';
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { PASSWORD_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from 'mobx-react-lite';
import {useFavicon, useTitle} from 'react-use'; 
import "../css/css.js"

const Auth = observer(() => {

    useFavicon('https://germes.bet/personal/assets/images/favicon.png')
    useTitle('Germes - вход в личный кабинет')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

            return (
        <Container> 
            <div class="content">
            <div id="login_form" class="cont_auth active">
        <div class="logotype">
            <img src="https://germes.bet/personal/assets/images/logo_germes-14.png" alt="Germes" />
        </div>
        <div class="form_auth">
            <form action="" method="post" id="form_login">
                <div class="form_item">
                    <label for="email">E-mail или Логин</label>
                    <input type="text" id="email" name="email" class="dark_line_input" 
                    value={email} onChange={e => setEmail(e.target.value)} autocomplete="off" />
                    <span class="focus-border"></span>
                </div>
                <div class="form_item password">
                    <label for="password">Пароль</label>
                    <NavLink to={PASSWORD_ROUTE} class="forgout_pass" id="forg_btn">Забыли пароль?</NavLink>
                    <input type="password" id="password" name="password" class="dark_line_input password_input" 
                    value={password} onChange={e => setPassword(e.target.value)} autocomplete="off" />
                    <span class="focus-border"></span>
                    <div class="eye"><i class="fal fa-eye-slash"></i></div>
                </div>
                <div class="form_item bt_login">
                    <span id="checkbox"><input type="checkbox" name="remember_me" id="remember_me" />
                    <label for="remember_me" id="remember_me_lb">Запомнить меня</label></span>
                    <input type="button" id="login" href="/panel" value="Войти"/>
                </div>
            </form>
            <div id="error_login" class="error_login">&nbsp;</div>
        </div>
        <strong class="login_form_strong">У вас нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></strong>
    </div>
            </div>
        </Container>
    );
    
});

export default Auth;
