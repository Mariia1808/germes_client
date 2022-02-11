import React, { useState } from 'react';
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from 'mobx-react-lite';
import {useFavicon, useTitle} from 'react-use'; 
import "../css/css.js"

const Auth = observer(() => {

    useFavicon('https://germes.bet/personal/assets/images/favicon.png')
    useTitle('Germes - восстановление пароля')
    const [email, setEmail] = useState('')

            return (
        <Container> 
            <div class="content">
            <div id="forgot_pass" class="cont_auth active">
        <div class="logotype">
            <img src="https://germes.bet/personal/assets/images/logo_germes-14.png" alt="Germes" />
        </div>
        <div class="form_auth">
            <form action="/" method="post" id="form_frg">
                <div class="form_item">
                    <label for="forgot_email">Введите e-mail</label>
                    <input type="text" id="forgot_email" name="forgot_email" 
                    value={email} onChange={e => setEmail(e.target.value)} class="dark_line_input" autocomplete="off" />
                    <span class="focus-border"></span>
                </div>
                <div class="text_send">
                    <p>Сообщение отправлено, перейдите на ваш e-email адрес, для подтверждения. Затем вы можете <a class="login_btn">авторизоваться</a> на нашем сайте</p>
                </div>
                <div class="form_item bt_login">
                    <input type="hidden" name="method" value="restore" />
                    <input type="button" id="pass_restore" class="signup_btn" value="Восстановить" />
                </div>
            </form>
        </div>
        <div id="error_msg_forgot" class="error_login">&nbsp;</div>
        <strong>Вспомнили пароль? <NavLink to={LOGIN_ROUTE} class="login_btn">Войти</NavLink></strong>
        </div>
            </div>
        </Container>
    );
    
});

export default Auth;