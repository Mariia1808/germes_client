import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import "../css/css.js"
import BuyHardItem from './BuyHardItem.js';

const BuyHardList = () => {
        return (
            <div class="box-buybot price_page">
                <BuyHardItem/>
            </div>
        );
    
};

export default BuyHardList;