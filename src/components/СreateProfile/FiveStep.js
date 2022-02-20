import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../../css/css.js"

const FiveStep = observer(()=>{

    const [prioritet, setPrioritet] = useState(false)
    function changePrioritet(){
        setPrioritet(!prioritet)
    }

    return(
        <Container id="he">
            <div className="content_wall">
                <h4>ШАГ 5 из 7 - Фильтры</h4><br/>
               
                <h4>Ставок</h4><br/>

                <label>Круглая Фора </label>
                <BootstrapSwitchButton checked={false} size="xs" onlabel='on' offlabel='off' style="warning p" />
                <label>Например: </label>
                <br/>
                <label>Европейская Фора </label>
                <BootstrapSwitchButton checked={false} size="xs" onlabel='on' offlabel='off' style="warning p" />
                <label>Например: </label>
                <br/>
                <label>Азиатская Фора </label>
                <BootstrapSwitchButton checked={false} size="xs" onlabel='on' offlabel='off' style="warning p" />
                <label>Например: </label>
                <br/><hr/>

                <label>Круглый Тотал </label>
                <BootstrapSwitchButton checked={false} size="xs" onlabel='on' offlabel='off' style="warning p" />
                <label>Например: </label>
                <br/>
                <label>Азиатский Тотал </label>
                <BootstrapSwitchButton checked={false} size="xs" onlabel='on' offlabel='off' style="warning p" />
                <label>Например: </label>
                <br/><hr/>

                <label>Круглый Инд.Тотал </label>
                <BootstrapSwitchButton checked={false} size="xs" onlabel='on' offlabel='off' style="warning p" />
                <label>Например: </label>
                <br/>
                <label> Азиатский Инд.Тотал </label>
                <BootstrapSwitchButton checked={false} size="xs" onlabel='on' offlabel='off' style="warning p" />
                <label>Например: </label>
                <br/><hr/>

                <h4>Вилок</h4><br/>

                <h4>Сортировка новых вилок</h4>
                <label>Правило сортировки №1: </label><br/>
                <select>
                    <option>Не сортировать</option>
                    <option>По доходности</option>
                    <option>По времени жизни вилки</option>
                    <option>Случайная сортировка</option>
                </select>
                <BootstrapSwitchButton checked={false} size="xs" onlabel='По возрастанию' offlabel='По убыванию' style="warning d" /><br/>

                <label>Правило сортировки №2: </label><br/>
                <select>
                    <option>Не сортировать</option>
                    <option>По доходности</option>
                    <option>По времени жизни вилки</option>
                </select>
                <BootstrapSwitchButton checked={false} size="xs" onlabel='По возрастанию' offlabel='По убыванию' style="warning d" /><br/>


                <p>
                    Список новых вилок фильтруется согласно выбранному правилу и берется самая первая.
                    Если выбранная вилка не подходит по условиям (например, на нее уже ставили), то
                    будет браться следующая. По умолчанию вилки фультруются от наибольшего % доходности к наменьшему.
                </p>

                <BootstrapSwitchButton checked={prioritet} onChange={changePrioritet} size="xs" onlabel='Использовать приоритеты букмекеров' offlabel='Использовать только простую фильтрацию' style="warning d1" /><br/>
                {prioritet?
                <>
                    <p>
                        Приоритеты БК позволяют выделить нужную бк. Например вилок с участием пинакла мало и они часто
                        не самые доходные. Но вы бы хотели, чтобы при их появлении бот пытался их проставить. Для этого
                        перетаскиваете пинакл в самый верх. Теперь, если в списке вилок появится пинакл, бот будет в первую
                        очередь ставить на вилки с ним. Даже, если они будут менее доходные, чем остальные.
                    </p>
                </>
                :
                <></>}

                <Button className='btn_middle' size="lg" href="/six_step">Далее</Button>
                <Button className='btn_middle' size="lg" href="/four_step">Назад</Button>
            </div>
        </Container>
    );
});

export default FiveStep;