import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import BuyBotList from '../components/BuyBotList.js';
import Header from '../components/Header.js';
import "../css/css.js"

const BuyBot = () => {
        return (
            <Container id='he'>
                <Header/>
                <BuyBotList/>
            </Container>
        );
    
};

export default BuyBot;