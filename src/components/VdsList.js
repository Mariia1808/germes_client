import React, { useEffect, useState } from 'react';
import "../css/css.js"
import { getProxy } from '../http/userAPI.js';
import VdsCard from './VdsCard.js';

const VdsList = () => {
    const [vdss, setVds] = useState([])
    const formData1 = new FormData()
    formData1.append("pvd_type","vds")
    useEffect(() =>{
        getProxy(formData1).then(data=>setVds(data))
    },[])
        return (
              <div className="proxy_vds">
              {vdss.map(vds =>{
                return <VdsCard vds={vds}/>
                })}
               </div>
        );
    
};

export default VdsList;