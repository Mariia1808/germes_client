import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { Button, Container } from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import "../css/css.js"

const TwoStep = observer(()=>{

    const input = " "
    var values = []
    const [valuta, setValuta] = useState(false)

    function handleChange(event) {
        if(!valuta === true){
            const name = data[event].name
            values.push(name)
        }
        setValuta(!valuta)
        console.log(values)
       
      }



    const data = [{name: "букмекер1"}, {name: "букмекер2"}, {name: "букмекер3"}, {name: "букмекер4"}, {name: "букмекер"}, 
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
                {data.map((data, key) =>
                <BootstrapSwitchButton size="xs" onChange={() => handleChange(key)} onlabel={data.name} offlabel={data.name} style="warning j" className='j' /> 
                )}
                <Button className='btn_middle' size="lg" href="/three_step">Далее</Button>
                <Button className='btn_middle' size="lg" href="/one_step">Назад</Button>
            </div>
        </Container>
    );
});

export default TwoStep;