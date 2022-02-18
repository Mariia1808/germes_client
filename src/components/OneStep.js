import React from 'react';
import { observer } from "mobx-react-lite";
import { Button, Container } from "react-bootstrap";
import "../css/css.js"

const OneStep = observer(()=>{
    return(
        <Container id="he">
            <div className='content_wall'>
                <h4>ШАГ 1</h4><br/>
                <h6>Введите название профиля</h6><br/>
                <input type="text" name="ip" id="proxy_ip" placeholder="Например, фонбет-олимп" /><br/>
                <Button className='btn_middle' size="lg" href="/two_step">Далее</Button>
            </div>
        </Container>
    );
});

export default OneStep;