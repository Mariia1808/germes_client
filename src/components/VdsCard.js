import { observer } from 'mobx-react-lite';
import React from 'react';
import { Container } from 'react-bootstrap';
import "../css/css.js"

const VdsCard = observer(({vds}) => {
        return (
            <div>
                <div className="pv_column-3">
                <div className="title_pv">
                    <div className="icon"><i className="fas fa-computer-classic"></i></div>
                    <div className="text">
                        <h3><a href="https://hip-hosting.com/?code=96afff1f359b47f43bd3" target="_blank">HIP-Hosting</a></h3>
                    </div>
                </div>
                <div className="logo">
                    <a href="https://hip-hosting.com/?code=96afff1f359b47f43bd3" target="_blank"><img src="https://germes.bet/personal/assets/images/pv/hip_logo.png" /></a>
                </div>
                <div className="desc">
                    <p>Полный root доступ к серверу. Частота процессора до 3.5 GHz. Подходят для большинства повседневных задач. Защита от DDoS. Технология KVM мощная и надежная.</p>
                </div>
            </div>
            </div>
        );
    
});

export default VdsCard;