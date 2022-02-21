import React, { useContext, useState } from 'react';
import { Container} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import { PANEL_ROUTE, PASSWORD_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from 'mobx-react-lite';
import {login} from "../http/userAPI";
import {useFavicon, useTitle} from 'react-use'; 
import "../css/css.js"
import { Context } from '..';

const Auth = observer(() => {

    useFavicon('https://germes.bet/personal/assets/images/favicon.png')
    useTitle('Germes - вход в личный кабинет')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const history = useNavigate()
    const {user} =useContext(Context)

    const click = async () => {
        try {
            let data;
            const formData1 = JSON.stringify({"login":email,"password":password})
            console.log(formData1)
            // console.log(email)
            // console.log(password)
            data = await login(formData1);
            if(data.response === "no_error")
            {
                setError("")
                user.setIsAuth(true)
                history(PANEL_ROUTE)
            } else{
                setError(data.error_text)
            }
            //console.log(data)
        } catch (e) {
            alert()
        }

    }


    return (
        <Container> 
            <div className="content">
            <div id="login_form" className="cont_auth active">
        <div className="logotype">
            <img src="https://germes.bet/personal/assets/images/logo_germes-14.png" alt="Germes" />
        </div>
        <div className="form_auth">
            <form action="" method="post" id="form_login">

                <div className="form_item">
                    <label for="email">E-mail или Логин</label>
                    <input type="text" id="email" name="email" className="dark_line_input" 
                    value={email} onChange={e => setEmail(e.target.value)} autocomplete="off" />
                    <span className="focus-border"></span>
                </div>

                <div className="form_item password">
                    <label for="password">Пароль</label>
                    <NavLink to={PASSWORD_ROUTE} className="forgout_pass" id="forg_btn">Забыли пароль?</NavLink>
                    <input type="password" id="password" name="password" className="dark_line_input password_input" 
                    value={password} onChange={e => setPassword(e.target.value)} autocomplete="off" />
                    <span className="focus-border"></span>
                    <div className="eye"><i className="fal fa-eye-slash"></i></div>
                </div>
                <div  id="error">
                    {error}
                </div>
                <div className="form_item bt_login">
                    <span id="checkbox"><input type="checkbox" name="remember_me" id="remember_me" />
                    <label for="remember_me" id="remember_me_lb">Запомнить меня</label></span>
                    <input type="button" id="login" onClick={click} value="Войти"/>
                </div>

            </form>
            <div id="error_login" className="error_login">&nbsp;</div>
        </div>
        <strong className="login_form_strong">У вас нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></strong>
    </div>
            </div>
        </Container>
    );
    
});

export default Auth;
