import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Container } from "react-bootstrap";
import "../css/css.js"

const FourStep = observer(()=>{
    return(
        <Container id="he">
            <div className="content_wall">
                <h4>ШАГ 4</h4><br/>
                <h6>Настройки парсера</h6><br/>

                <h4>ВИЛКИ</h4><br/>

                <label>Доходность вилки с сервера </label>
                <input type="number" step={1} precision={2} min={0} max={100} defaultValue="0"/>
                <input type="number" step={1} precision={2} min={0} max={100} defaultValue="100"/><br/>

                <label>Коэф </label>
                <input type="number" step={0.1} precision={2} min={0} max={100} defaultValue="0"/>
                <input type="number" step={0.1} precision={2} min={0} max={100} defaultValue="100"/><br/>

                <label>Доходность вилки перед проставкой </label>
                <input type="number" step={1} precision={2} min={0} max={100} defaultValue="0"/>
                <input type="number" step={1} precision={2} min={0} max={100} defaultValue="100"/><br/>

                <label>Время </label>
                <input type="number" step={1} precision={2} min={0} defaultValue="0"/>
                <input type="number" step={1} precision={2} min={0} defaultValue="500"/> <br/><hr/>

                <label> куча чекедов</label>

                <Button className='btn_middle' size="lg" href="/five_step">Далее</Button>
                <Button className='btn_middle' size="lg" href="/three_step">Назад</Button>
            </div>
        </Container>
    );
});

export default FourStep;