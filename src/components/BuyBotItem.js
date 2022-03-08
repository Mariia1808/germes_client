import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "../css/css.js"

const BuyBotItem = ({tarif}) => {
    const [yes, setYes]=useState(false)
    const [daysP, setDays] = useState("")

    const day = (days) =>{
        if( ((days%10===1)&&(days>20)) || (days===1))
            return <> {days} день</>
        if( ((days>1)&&(days<5)) || ((days>21) && ((days%10>1)&&(days%10<5))))
            return <> {days} дня</>
        if( ((days>4)&&(days<21)) || (days===0) || ((days>21) && ((days%10>4)||(days%10===0))))
            return <> {days} дней</>
    }

    const froz = (kolvo) =>{
        if( ((kolvo%10===1)&&(kolvo>20)) || (kolvo===1))
            return <> {kolvo} заморозка ключа</>
        if( ((kolvo>1)&&(kolvo<5)) || ((kolvo>21) && ((kolvo%10>1)&&(kolvo%10<5))))
            return <> {kolvo} заморозки ключа</>
        if( ((kolvo>4)&&(kolvo<21)) || ((kolvo>21) && ((kolvo%10>4)||(kolvo%10===0))))
            return <> {kolvo} заморозок ключа</>
        if(kolvo===0)
            return <> Нет заморозок ключа</>
    }

    const cost = (rub) =>{
        if((rub>1000)&&(rub%1000!==0))
            return <>{Math.trunc(rub/1000)+","+rub%1000} </>
        else if (rub%1000===0)
            return <>{Math.trunc(rub/1000)+",000"} </>
        else
            return <>{rub}</>
    }


        return (
            <div className="column-buybot">
            <div className="title_price">
                <div className="icon"><i className="fas fa-rocket"></i></div>
                <div className="text">
                    <h3>{tarif.rate_name}</h3>
                    <p>{tarif.rate_description}</p>
                </div>
            </div>
            {(() => {
            switch (yes) {
                case false:
                    return <div className="content_price active" id="price_block_1">
                        <div className="list">
                            <ul>
                                <li><span>{cost(tarif.rate_cost)} &#8381;</span></li>
                                
                                <li><i className="fal fa-check"></i>Срок действия {day(tarif.rate_days)}</li>
                                <li><i className="fal fa-check"></i>Доступны все букмекеры</li>
                                <li><i className="fal fa-times"></i>{froz(tarif.frozen_number)}</li>
                            </ul>
                        </div>
                        <div className="btn_bl">
                            <a className="btn_middle add_balance" data-id="1" onClick={()=>setYes(true)} rate="14">Выбрать тариф</a>
                        </div>
                    </div>
                case true: 
                    return <div className="form_input" id="price_form_1">
                        <form action="#" method="post">
                            <div className="content_form_price">
                                <label htmlFor="ip_test">Введите IP адрес VDS</label>
                                <p>VDS используется для установки на него бота, подходящий VDS можно выбрать на нашей странице <a href="https://germes.bet/personal/panel/pv/vds" target="_self">VDS</a></p>
                                <input id="ip_test" className="ip" name="ip" type="text" placeholder="Введите ip" />
                                <input type="hidden" id="soft_type" value="1" />
                                <input type="hidden" id="rate_id_test" value="14" />
                                <input type="hidden" id="amount_test" value="400" />
                            </div>
                            
                            <input type="button" id="subscribe_test" className="subscribe" value="Оформить подписку" suffix="_test" bk-sale="1" />
                            <input type="button" id="subscribe_test" className="subscribe" onClick={()=>setYes(false)} value="Назад" />
                            
                        </form>
                    </div>
            default:
                return <></>
            }
            })()}
            </div>
        );
    
};

export default BuyBotItem;