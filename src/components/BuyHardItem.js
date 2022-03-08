import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import "../css/css.js"

const BuyHardItem = ({tarif}) => {
    const day = (days) =>{
        if( ((days%10===1)&&(days>20)) || (days===1))
            return <> {days} день</>
        if( ((days>1)&&(days<5)) || ((days>21) && ((days%10>1)&&(days%10<5))))
            return <> {days} дня</>
        if( ((days>4)&&(days<21)) || (days===0) || ((days>21) && ((days%10>4)||(days%10===0))))
            return <> {days} дней</>
    }
    const cost = (rub) =>{
        if((rub>1000)&&(rub%1000!==0))
            return <>{Math.trunc(rub/1000)+","+rub%1000} </>
        else if (rub%1000===0)
            return <>{Math.trunc(rub/1000)+",000"} </>
        else
            return <>{rub}</>
    }

    const froz = (kolvo) =>{
        if( ((kolvo%10===1)&&(kolvo>20)) || (kolvo===1))
            return <>{kolvo} заморозка ключа</>
        if( ((kolvo>1)&&(kolvo<5)) || ((kolvo>21) && ((kolvo%10>1)&&(kolvo%10<5))))
            return <>{kolvo} заморозки ключа</>
        if( ((kolvo>4)&&(kolvo<21)) || ((kolvo>21) && ((kolvo%10>4)||(kolvo%10===0))))
            return <>{kolvo} заморозок ключа</>
        if(kolvo===0)
            return <>Нет заморозок ключа</>
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
            <div className="form_price form_input active" id="price_form_1">
                <form action="#" method="post">
                <div className="list">
                    <ul>
                        <li><span>{cost(tarif.rate_cost)} &#8381;</span></li>
                        <li><i className="fal fa-check"></i>Срок действия {day(tarif.rate_days)}</li>
                        <li><i className="fal fa-check"></i>Доступны все букмекеры</li>
                        <li><i className="fal fa-times"></i>{froz(tarif.frozen_number)}</li>
                    </ul>
                    <input type="hidden" id="ip_test_hand" name="ip" value="" />
                    <input type="hidden" id="soft_type" value="2" />
                    <input type="hidden" id="rate_id_test_hand" value="17" />
                    <input type="hidden" id="amount_test_hand" value="500" />
                </div>
                    
                    <input type="button" id="subscribe_test_hand" className="subscribe" value="Оформить подписку" suffix="_test_hand" bk-sale="1" />
                </form>
            </div>
        </div>
        );
    
};

export default BuyHardItem;