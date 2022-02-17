import React from 'react';
import { Container } from 'react-bootstrap';
import BuyBotList from '../components/BuyBotList.js';
import Header from '../components/Header.js';
import { observer } from 'mobx-react-lite';
import "../css/css.js"

const BuyBot = observer(() => {
        return (
            <Container id='he'>
                 
                <BuyBotList/>
            </Container>
        );
    
});

export default BuyBot;