import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import BuyHardList from '../components/BuyHardList.js';
import Header from '../components/Header.js';
import "../css/css.js"


const BuyHard = () => {
        return (
            <Container id='he'>
               <Header/>
               <BuyHardList/>
            </Container>
        );
    
};

export default BuyHard;