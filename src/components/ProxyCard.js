import React from 'react';
import { observer } from 'mobx-react-lite';
import "../css/css.js"

const ProxyCard = observer(({vds}) => {
        return (
                <div className="pv_column-3 act-3">
                    <div className="title_pv">
                        <div className="icon"><i className="fas fa-computer-classic"></i></div>
                        <div className="text">
                            <h3><a href={vds.pv_link}>{vds.pv_name}</a></h3>
                        </div>
                    </div>
                    <div className="logo">
                        <a href={vds.pv_link}><img src={"https://germes.bet/personal/assets/images/pv/" + vds.pv_picture}/></a>
                    </div>
                    <div className="desc">
                        <p>{vds.pv_desc}</p>
                    </div>
                </div>
        );
    
});

export default ProxyCard;