import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { Button, Container, Form } from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import "../css/css.js"

const ThreeStep = observer(()=>{
    const [minbk, setMinbk] = useState(false)
    function changeMinbk(){
        setMinbk(!minbk)
    }

    const [maxbk, setMaxbk] = useState(false)
    function changeMaxbk(){
        setMaxbk(!maxbk)
    }

    const [valuta, setValuta] = useState(false)
    function changeValute(){
        setValuta(!valuta)
    }

    const [pravila, setPravila] = useState(false)
    function changePravila(){
        setPravila(!pravila)
    }

    const [smart1, setSmart1] = useState(false)
    function changeSmart1(){
        setSmart1(!smart1)
    }

    const [smart2, setSmart2] = useState(false)
    function changeSmart2(){
        setSmart2(!smart2)
    }

    return(
        <Container id="he">
            <div className='content_wall'>
                <h4>ШАГ 3</h4><br/><br/>
                <h6>Настройки </h6><br/><br/>

                <label>Адрес зеркала:</label>
                <input placeholder='https://www.bet265.com'/><br/><br/><hr/>

                <label><input type="checkbox"/>Обязательный в вилке</label>
                <label><input type="checkbox"/>ЦУПИС(легальный)</label>
                <input type="number" step={0.1} min={0} precision={2} placeholder="Комиссия"></input>
                <label><input type="checkbox"/>Пауза при порезке аккаунта</label>
                <label><input type="checkbox"/>Пауза при разлогине</label><br/><br/><hr/>

                <label>Первым плечом</label>
                <select>
                    <option>Принимать только с исходным кэфом</option>
                    <option>Принимать с повышением кэфа</option>
                    <option>Принимать с любым кэфом</option>
                </select><br/><br/>

                <label>Вторым плечом</label>
                <select>
                    <option>Принимать только с исходным кэфом</option>
                    <option>Принимать с повышением кэфа</option>
                    <option>Принимать с любым кэфом</option>
                </select><br/><br/><hr/>

                <label>Валюта:</label><br/>
                <select>
                    <option>Рубль</option>
                </select>
                <BootstrapSwitchButton checked={valuta} onChange={changeValute} size="xs" onlabel='Свои правила округления' offlabel='Общие правила округления' style="warning j" className='j' />       
                <select disabled={!valuta}>
                    <option>Рубль</option>
                </select><br/><br/><hr/>

                <label>Инициатор:</label><br/>
                <br/><br/><hr/>

                <label>Участие в вилках:</label><br/>
                <input type="number" step={1} precision={2} min={0} defaultValue="0" placeholder="от"></input>
                <input type="number" step={1} precision={2} min={0} defaultValue="1000" placeholder="до"></input><br/><br/><hr/>

                <label>Коэффициенты:</label><br/>
                <BootstrapSwitchButton checked={pravila} onChange={changePravila} size="xs" onlabel='Использовать свои настройки кэфов' offlabel='Использовать общие настройки кэфов' style="warning k" />       
                <input type="number" disabled={!pravila} step={1} precision={2} min={0} defaultValue="0" placeholder="от"></input>
                <input type="number" disabled={!pravila} step={1} precision={2} min={0} max={20} defaultValue="20" placeholder="до"></input><br/><br/><hr/>

                <label>Умная проставка:</label><br/>
                <BootstrapSwitchButton checked={smart1} onChange={changeSmart1} size="xs" onlabel='Процент от баланса' offlabel='Случайное значение' style="warning" /><br/><br/>
                {smart1?
                <>
                    <label>Ставка от: </label>
                    <input type="number" step={50} precision={2} min={0} defaultValue="0"/>
                    <label>до: </label>
                    <input type="number" step={50} precision={2} min={0} defaultValue="450"/>
                </>
                :
                <>
                    <label>Процент от баланса</label>
                    <input type="number" step={2} precision={2} min={0} max={100} defaultValue="0"/>
                </>
                }
                <h3>ИЛИ</h3><br/>
                <BootstrapSwitchButton checked={smart2} onChange={changeSmart2} size="xs" onlabel='Случайное значение' offlabel='Постоянное значение' style="warning" /><br/><br/>
                {smart2?
                <>
                    <label>Процент от лимита на ставку </label>
                    <input type="number" step={2} precision={2} min={0} max={100} defaultValue="0"/>
                </>
                :
                <>
                    <label>Процент лимита на ставку от: </label>
                    <input type="number" step={0.01} precision={2} min={0} defaultValue="0"/>
                    <label>до: </label>
                    <input type="number" step={0.01} precision={2} min={0} defaultValue="450"/>
                </>
                }
                <h3>ИЛИ</h3><br/>
                <label>Доступный баланс в БК</label><br/><br/><hr/>

                <label>Не делать ставку, если максимум в конторе меньше</label>
                <input type="number" step={1} precision={2} min={0} defaultValue="0"/><br/>
                <label>Распределение дохода по вилке</label> 
                <select>
                    <option>Распределенный доход на оба плеча</option>
                    <option>Весь доход на эту бк</option>
                    <option>Минимальный доход на эту бк</option>
                </select><br/>
                <label><input checked={maxbk} onChange={changeMaxbk} type="checkbox"/>Отменять вилку, если эта бк идет первым плечом и кэф поднялся больше чем на % от данных сканера</label>
                <input type="number" step={1} disabled={!maxbk} precision={2} min={0} defaultValue="0"/><br/>
                <label><input checked={minbk} onChange={changeMinbk} type="checkbox"/>Отменять вилку, если эта бк идет первым плечом и кэф упал больше чем на % от данных сканера</label>
                <input type="number" step={1} disabled={!minbk} precision={2} min={0} defaultValue="0"/><br/>


                <Button className='btn_middle' size="lg" href="/four_step">Далее</Button>
                <Button className='btn_middle' size="lg" href="/two_step">Назад</Button>
            </div>
        </Container>
    );
});

export default ThreeStep;