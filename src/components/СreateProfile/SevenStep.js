import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { Button, Container } from "react-bootstrap";
import "../../css/css.js"
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

const SevenStep = observer(()=>{
    const data = ["спорт","спорт","спорт","спорт","спорт","спорт","спорт",]
    const [total, setTotal]=useState("")
    const [fora, setFora]=useState("")
    const [ini, setIni]=useState("")
    const [kef, setKef]=useState("")
    const [ocher, setOcher]=useState("")

    const [two, setTwo] = useState(false)
    function changeTwo(){
        setTwo(!two)
    }

    const [matmodel, setMatmodel] = useState(false)
    function changeMatmodel(){
        setMatmodel(!matmodel)
    }

    return(
        <Container id="he">
            <div className='content_wall'>
                <h4>ШАГ 7 из 7 - Правила для пар БК</h4><br/>
            
                <label>Букмекер 1:</label>
                <select>
                    <option>
                    </option>
                </select>

                <label>Букмекер 2:</label>
                <select>
                    <option>
                        
                    </option>
                </select><br/>

                <label>Проставляем оба плеча</label>
                <BootstrapSwitchButton checked={two} onChange={changeTwo} size="xs" onlabel='Да' offlabel='Нет' style="warning p" /><br/>
                <BootstrapSwitchButton checked={matmodel} onChange={changeMatmodel} size="xs" onlabel='Крыть минусовые по мат.модели' offlabel='Ставим первое плечо даже в минус' style="warning p1" /><br/>
                
                {(() => {
                    switch (two && matmodel) {
                    case (!two):
                            return <><label>Ставим первое плечо даже в минус, только если упал кэф на втором плече</label>
                            <BootstrapSwitchButton checked={false} size="xs" onlabel='Да' offlabel='Нет' style="warning p" /><br/>
                        </>
                    case true:
                        return <>
                            <label>Маржа(%) БК1</label>
                            <input type="number" step={0.1} precision={2} min={0} max={100} defaultValue="6.0"/>
                            <label>Граница мат.ожидания в % суммы 1го плеча</label>
                            <input type="number" step={0.1} precision={2} min={0} max={100} defaultValue="0.0"/><br/>
                        </>
                        default:
                            return null
                        }
                    })()}



                <table className="table">
                    <thead>
                        <tr>
                            <th>Для всех:</th>
                            <th>Проверяем</th>
                            <th>Тотал</th>
                            <th>Фора</th>
                            <th>Инициатор</th>
                            <th>Кэф</th>
                            <th>Очередность</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Обе БК</td>
                            <td>
                                <select onChange={e=>setTotal(e.target.value)}>
                                    <option value="tnone">-</option>
                                    <option value="t1">Больше</option>
                                    <option value="t2">Меньше</option>
                                </select>
                            </td>
                            <td>
                                <select onChange={e=>setFora(e.target.value)}>
                                    <option value="fnone">-</option>
                                    <option value="f1">Выиграшная</option>
                                    <option value="f2">Проигрышная</option>
                                </select>
                            </td>
                            
                            <td>
                                <select onChange={e=>setIni(e.target.value)}>
                                    <option value="inone">-</option>
                                    <option value="i1">Да</option>
                                    <option value="i2">Нет</option>
                                </select>
                            </td>

                            <td>
                                <select onChange={e=>setKef(e.target.value)}>
                                    <option value="knone">-</option>
                                    <option value="k1">Больше</option>
                                    <option value="k2">Меньше</option>
                                </select>
                            </td>
                            <td>
                                <select onChange={e=>setOcher(e.target.value)}>
                                    <option value="o1">Первая БК</option>
                                    <option value="02">Вторая БК</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>




                <table className="table">
                    <thead>
                        <tr>
                            <th>Спорт</th>
                            <th>Проверяем</th>
                            <th>Тотал</th>
                            <th>Фора</th>
                            <th>Инициатор</th>
                            <th>Кэф</th>
                            <th>Очередность</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(data=>
                        <tr>
                            <td>{data}</td>
                            <td>Обе БК</td>
                            <td>
                                <select value={total}>
                                    <option value="tnone">-</option>
                                    <option value="t1">Больше</option>
                                    <option value="t2">Меньше</option>
                                </select>
                            </td>
                            <td>
                                <select value={fora}>
                                    <option value="fnone">-</option>
                                    <option value="f1">Выиграшная</option>
                                    <option value="f2">Проигрышная</option>
                                </select>
                            </td>
                            
                            <td>
                                <select value={ini}>
                                    <option value="inone">-</option>
                                    <option value="i1">Да</option>
                                    <option value="i2">Нет</option>
                                </select>
                            </td>

                            <td>
                                <select value={kef}>
                                    <option value="knone">-</option>
                                    <option value="k1">Больше</option>
                                    <option value="k2">Меньше</option>
                                </select>
                            </td>
                            <td>
                                <select value={ocher}>
                                    <option value="o1">Первая БК</option>
                                    <option value="02">Вторая БК</option>
                                </select>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>

                <Button className='btn_middle' size="lg" href="/seven_step">Далее</Button>
                <Button className='btn_middle' size="lg" href="/six_step">Назад</Button>
            </div>
        </Container>
    );
});

export default SevenStep;