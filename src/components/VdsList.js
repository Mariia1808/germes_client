import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import "../css/css.js"
import { getProxy } from '../http/userAPI.js';
import VdsCard from '../pages/Vds.js';

const VdsList = observer(() => {
    const [vdss, setVds] = useState([])
    const formData2 = new FormData()
    formData2.append("pvd_type","vds")
    useEffect(() =>{
        getProxy(formData2).then(data=>setVds(data))
    },[])
        return (
            <Container>
              <div className="proxy_vds">
              {vdss.map(vds =>{
                return <VdsCard vds={vds}/>
                })}
               </div>
            </Container>
        );
    
});

export default VdsList;