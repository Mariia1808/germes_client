import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import "../css/css.js"
import BuyBotItem from './BuyBotItem.js';

const BuyBotList = () => {
        return (
            <Container>
               <div class="box-buybot price_page">
                   <BuyBotItem/>
               </div>
            </Container>
        );
    
};

export default BuyBotList;