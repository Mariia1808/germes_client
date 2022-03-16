import React, { useState } from 'react';
import { Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { observer } from 'mobx-react-lite';
import {useFavicon, useTitle} from 'react-use'; 
import "../css/css.js"

const Auth = observer(() => {

    useFavicon('https://germes.bet/personal/assets/images/favicon.png')
    useTitle('Germes - восстановление пароля')
    const [email, setEmail] = useState('')

            return (
        <Container> 
            <div className="content">
            <div id="forgot_pass" className="cont_auth active">
        <div className="logotype">
            <img src="https://germes.bet/personal/assets/images/logo_germes-14.png" alt="Germes" />
        </div>
        <div className="form_auth">
            <form action="/" method="post" id="form_frg">
                <div className="form_item">
                    <label htmlFor="forgot_email">Введите e-mail</label>
                    <input type="text" id="forgot_email" name="forgot_email" 
                    value={email} onChange={e => setEmail(e.target.value)} className="dark_line_input" autoComplete="off" />
                    <span className="focus-border"></span>
                </div>
                <div className="text_send">
                    <p>Сообщение отправлено, перейдите на ваш e-email адрес, для подтверждения. Затем вы можете <a className="login_btn">авторизоваться</a> на нашем сайте</p>
                </div>
                <div className="form_item bt_login">
                    <input type="hidden" name="method" value="restore" />
                    <input type="button" id="pass_restore" className="signup_btn" value="Восстановить" />
                </div>
            </form>
        </div>
        <div id="error_msg_forgot" className="error_login">&nbsp;</div>
        <strong>Вспомнили пароль? <NavLink to={LOGIN_ROUTE} className="login_btn">Войти</NavLink></strong>
        </div>
            </div>
        </Container>
    );
    
});

export default Auth;