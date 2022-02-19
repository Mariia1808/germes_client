import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { Button, Container } from "react-bootstrap";
import "../css/css.js"
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

const SixStep = observer(()=>{

    const [logi, setLogi] = useState(false)
    function changeLogi(){
        setLogi(!logi)
    }

    const [key, setKey] = useState(false)
    function changeKey(){
        setKey(!key)
    }
    
    const [auto, setAuto] = useState(false)
    function changeAuto(){
        setAuto(!auto)
    }

    const [notify, setNotify] = useState(false)
    function changeNotify(){
        setNotify(!notify)
    }




    return(
        <Container id="he">
            <div className='content_wall'>
                <h4>ШАГ 6</h4><br/>
                <h6>Настройки бота</h6><br/>
                <tr>
                    <td>
                        <label>Записывать все попытки в историю</label>
                        <BootstrapSwitchButton checked={false} size="xs" onlabel='Да' offlabel='Нет' style="warning p" /><br/>

                        <label>Автоудаления логов</label>
                        <BootstrapSwitchButton checked={logi} onChange={changeLogi} size="xs" onlabel='Да' offlabel='Нет' style="warning p" /><br/>
                        <label>Удалять логи старше</label>
                        <input type="number" disabled={!logi} step={1} precision={2} min={0} max={100} defaultValue="3"/><br/>

                        <label>Использовать анимацию</label>
                        <BootstrapSwitchButton checked={false} size="xs" onlabel='Да' offlabel='Нет' style="warning p" /><br/>

                        <label>Разрешить перекрываться коридорами</label>
                        <BootstrapSwitchButton checked={false} size="xs" onlabel='Да' offlabel='Нет' style="warning p" /><br/>

                        <label>Использовать RuCaptcha</label>
                        <BootstrapSwitchButton checked={key} onChange={changeKey} size="xs" onlabel='Да' offlabel='Нет' style="warning p" /><br/>
                        <label>Ключ:</label><input disabled={!key}/><br/>

                        <h6>Верстка скрипта</h6><br/>

                        <label>Автообновление скриптов</label>
                        <BootstrapSwitchButton checked={auto} onChange={changeAuto} size="xs" onlabel='Вкл' offlabel='Выкл' style="warning p" /><br/>
                        <input disabled={!auto}/>

                    </td>
                    <td>
                        <label>Имя бота:</label><input/><br/>
                        <label>БОТИНФОРМЕР</label><br/>
                        <p>
                            БотИнформер - это
                        </p>
                        <label>Получать уведомления</label>
                        <BootstrapSwitchButton checked={notify} onChange={changeNotify} size="xs" onlabel='Да' offlabel='Нет' style="warning p" /><br/>
                        <label>Ваш Id:</label><input disabled={!notify}/>
                        <Button className='btn_middle'>Проверить</Button><br/>
                        <label>Не перекрытые ставки</label><br/>
                        <label><input type="checkbox"/>Проигрывать звук, если ставка не перекрылась</label><br/>
                        <label><input disabled={!notify} type="checkbox"/>Отправить уведомление</label><br/>
                        <label><input disabled={!notify} type="checkbox"/>Отправить уведомление о каждой успешной ставке</label><br/>

                    </td>

                </tr>
                <Button className='btn_middle' size="lg" href="/seven_step">Далее</Button>
                <Button className='btn_middle' size="lg" href="/five_step">Назад</Button>
            </div>
        </Container>
    );
});

export default SixStep;