import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { Button, Container } from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import "../../css/css.js"
import Select from './Select.js';


const TwoStep = observer(()=>{

    const input = " "
    var values = []
    const [valuta, setValuta] = useState(false)
    const [bk, setBk] = useState("")

    function handleChange(evt) {
        setBk({multiValue:[...evt.target.selected].map(o => o.value)}); 
      }


    const data = [{name: "букмекер1"}, {name: "букмекер2"}, {name: "букмекер3"}, {name: "букмекер4"}, {name: "букмекер"}, 
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, 
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, 
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, 
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"},
    {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}, {name: "букмекер"}]
    return(
        <Container id="he">
            <div className='content_wall'>
                {/* <h4>ШАГ 2 из 7 - Выберите необходимые БК</h4><br/>
                <h6>рекомендуем выбирать не более 2-3 активных букмекеров</h6><br/>  */}
                <Select onChange={handleChange} id="f"/>
                {/* <select size="30" onChange={handleChange} multiple="multiple">

                {data.map((data, key) =>
                <option value={data.name}>{data.name}</option>
                )}
                </select> */}
                {console.log(bk)}
                {/* <Button className='btn_middle' size="lg" href="/three_step">Далее</Button>
                <Button className='btn_middle' size="lg" href="/one_step">Назад</Button> */}
            </div>
        </Container>
    );
});

export default TwoStep;