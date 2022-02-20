import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { Button, Container, Form, Tab, Tabs } from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import "../../css/css.js"
import SetupBk from './SetupBk.js';

const ThreeStep = observer(({num})=>{
    const data = [{0: {label: "букмекер1", value: "букмекер1"}}, 
    {1: {label: "букмекер2", value: "букмекер2"}}, 
    {2: {label: "букмекер3", value: "букмекер3"}}]
    
    return(
        <Container id="he">
        <div className='content_wall'>
        <h4>ШАГ 3 из 7 - Настройки БК</h4><br/><br/>
        <Tabs defaultActiveKey={0} id="uncontrolled-tab-example" className="mb-3">
            {data.map((data, key) =>
            <Tab eventKey={key} title={data[key].value}>
                <SetupBk nameBk={data[key].value} number={key} allKey={data.length}/>
            </Tab>)}
        </Tabs>
        {/* <Button className='btn_middle' size="lg" href="/four_step">Далее</Button>
        <Button className='btn_middle' size="lg" href="/two_step">Назад</Button> */}
        </div>
        </Container>
    );
});

export default ThreeStep;