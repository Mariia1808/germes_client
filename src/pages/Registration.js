import React, { useState } from 'react';
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { observer } from 'mobx-react-lite';
import "../css/css.js"


const Registration = observer(() => {
    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [promo, setPromo] = useState('')

            return (
        <Container> 
            <div class="content">
            <div id="signup_form" class="cont_auth active">
        <div class="logotype">
            <img src="https://germes.bet/personal/assets/images/logo_germes-14.png" alt="Germes" />
        </div>
        <div >
            <Form id="form_signup">
                <div class="form_item">
                    <label for="user_name">Ваше имя *</label>
                    <input type="text" name="user_name" id="user_name"
                    value={name} onChange={e => setName(e.target.value)} class="dark_line_input" />
                    <span class="focus-border"></span>
                </div>
                <div class="form_item">
                    <label for="email_sgn">E-mail *</label>
                    <input type="text" name="email" id="email_sgn"
                    value={email} onChange={e => setEmail(e.target.value)} class="dark_line_input" autocomplete="off" />
                    <span class="focus-border"></span>
                </div>
                <div class="form_item password">
                    <label for="password_sgn">Пароль *</label>
                    <input type="text" name="password" id="password_sgn"
                    value={password} onChange={e => setPassword(e.target.value)} class="dark_line_input password_input" autocomplete="off" />
                    <span class="focus-border"></span>
                    <div class="eye"><i class="fal fa-eye-slash"></i></div>
                </div>
                <div class="form_item">
                    <label for="phone_sgn">Моб. телефон *</label>
                    <input type="text" name="phone" id="phone_sgn"
                    value={phone} onChange={e => setPhone(e.target.value)} class="dark_line_input" autocomplete="off" maxlength="12" />
                    <span class="focus-border"></span>
                </div>                
                <p class="form_item">Для телефона только цифры (например: 79811534755). На этот мобильный телефон будет отправлено СМС с кодом для подтверждения регистрации.</p>
                        
                <div class="form_item">
                    <label for="refcode">Промо-код</label>
                    <input type="text" name="refcode" id="refcode" 
                    value={promo} onChange={e => setPromo(e.target.value)} class="dark_line_input" autocomplete="off" />
                    <span class="focus-border"></span>
                </div>
                            <p class="form_item">Я ознакомился с <a href="terms" target="_blank"><span class="">условиями использования</span></a>, 
                    нажимая на кнопку <span>зарегистрироваться</span> принимаю эти условия.</p>
                <div class="form_item bt_login">
                    <input type="hidden" name="method" value="signup" />
                    <input type="button" id="signup" value="Зарегистрироваться" class="signup_btn" />
                </div>
            </Form>
        </div>                                                  
        <div id="error_message" class="error_login">&nbsp;</div>
        <strong>У вас уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink></strong>
    </div></div>
    </Container>
    );
    
});

export default Registration;
