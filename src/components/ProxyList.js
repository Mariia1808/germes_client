import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { observer } from "mobx-react-lite";
import "../css/css.js"
import { getProxy } from '../http/userAPI.js';
import ProxyCard from './ProxyCard.js';

const ProxyList = observer(() => {
    const [vdss, setVds] = useState([])
    const formData2 = new FormData()
    formData2.append("pvd_type","proxy")
    useEffect(() =>{
        getProxy(formData2).then(data=>setVds(data))
    },[])
        return (
            <Container>
              <div className="proxy_vds">
              {vdss.map(vds =>{
                return <ProxyCard vds={vds}/>
                })}
               </div>
            </Container>
        );
    
});

export default ProxyList;