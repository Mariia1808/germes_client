import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Button, Container } from "react-bootstrap";
import "../../css/css.js"
import { Context } from '../../index.js';

const OneStep = observer(()=>{
    const {user} = useContext(Context)
    return(
        <Container id="he">
            {user.setIsAuth(true)}
            <div className='content_wall'>
                <h4>ШАГ 1 из 7 - Введите название профиля</h4><br/>
                <input type="text" name="ip" id="proxy_ip" placeholder="Например, фонбет-олимп"/><br/>
                <Button className='btn_middle' size="lg" href="/two_step">Далее</Button>
            </div>
        </Container>
    );
});

export default OneStep;