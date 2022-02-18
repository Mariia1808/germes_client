import React from 'react';
import { observer } from "mobx-react-lite";
import { Button, Container } from "react-bootstrap";
import "../css/css.js"

const TwoStep = observer(()=>{
    const data = [{name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, 
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, 
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, 
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, 
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, 
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}]
    return(
        <Container id="he">
            <div className='content_wall'>
                <h4>ШАГ 2</h4><br/>
                <h5>Выберите необходимые БК</h5><br/>
                <h6>рекомендуем выбирать не более 2-3 активных букмекеров</h6><br/>
                {data.map(data =>
                <label>
                <input type="checkbox" value={data.name}/>
                {data.name}
                </label>)}
                <Button className='btn_middle' size="lg" href="/three_step">Далее</Button>
                <Button className='btn_middle' size="lg" href="/one_step">Назад</Button>
            </div>
        </Container>
    );
});

export default TwoStep;