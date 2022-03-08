import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import "../css/css.js"
import { getUser, rates } from '../http/userAPI.js';
import { Context } from '../index.js';
import BuyBotItem from './BuyBotItem.js';

const BuyBotList = () => {
    const formData1 = new FormData()
    const [arrRate, setArrRate] = useState([])
    const [users, setUser] = useState([])
    const formData2 = new FormData()
    formData2.append("require","userdata")
    formData1.append("rate_set","all")
    formData1.append("require","tariffs")
    useEffect(() =>{
        rates(formData1).then(data=>setArrRate(data))
        getUser(formData2).then(data=>setUser(data))
    },[])
        return (
            <div className="box-buybot price_page">
               {arrRate.map(tarif =>{
                   if((tarif.soft_type === 1)&&(tarif.rate_cost !== 0))
                        if((users.is_friend === "Y")&&(tarif.for_friends === "Y"))
                            return <BuyBotItem tarif={tarif}/>
                        else if((users.is_friend !== "Y")&&(tarif.for_friends !=="Y"))
                            return <BuyBotItem tarif={tarif}/>

                    
               })}
            </div>
        );
};

export default BuyBotList;