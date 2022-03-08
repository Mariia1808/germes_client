import React, { useEffect, useState } from 'react';
import "../css/css.js"
import { rates } from '../http/userAPI.js';
import BuyHardItem from './BuyHardItem.js';

const BuyHardList = () => {
    const formData1 = new FormData()
    const [arrRate, setArrRate] = useState([])
    formData1.append("rate_set","all")
    formData1.append("require","tariffs")
    useEffect(() =>{
        rates(formData1).then(data=>setArrRate(data))
    },[])
        return (
            <div className="box-buybot price_page">
               {arrRate.map(tarif =>{
                   if(tarif.soft_type === 2)
                return <BuyHardItem tarif={tarif}/>
               })}
            </div>
        );
    
};

export default BuyHardList;