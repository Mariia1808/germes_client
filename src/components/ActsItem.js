import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite'; 
import "../css/css.js"

const ActsItem = observer(({act}) => {
    
        return (
            <div class="pv_column-3 act-3">
            <div class="title_pv">
                <div class="icon"><i class="bi bi-emoji-laughing"></i></div>
                <div class="act_title">
                    <h3>{act.action_title}</h3>
                </div>
            </div>
            <div class="act_text">{act.action_text}</div>
            <a class="act_link" href={act.action_link} target="_self">Пополнить</a>
        </div>
        );
    
});

export default ActsItem;