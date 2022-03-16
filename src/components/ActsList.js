import React, { useEffect, useState } from 'react';
import "../css/css.js"
import { getActs } from '../http/userAPI.js';
import ActsItem from './ActsItem.js';

const ActsList = () => {
    const formData1 = new FormData()
    const [arrActs, setArrActs] = useState([])
    formData1.append("require","discount")
    useEffect(() =>{
        getActs(formData1).then(data=>setArrActs(data))
    },[])
        return (
            <div class="proxy_vds">
               {arrActs.map(act =>{
                return <ActsItem act={act}/>
               })}
            </div>
        );
    
};

export default ActsList;