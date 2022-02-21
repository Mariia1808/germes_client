import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import "../../css/css.js"
import { Context } from "../../index.js";

const FourStep = observer(()=>{
    const {user} = useContext(Context)
    return(
        <Container id="he">
            <div className="content_wall">
                <h4>ШАГ 4 из 7 - Настройки парсера</h4><br/>
                {user.setIsAuth(true)}

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