import { observer } from 'mobx-react-lite';
import React from 'react';
import { Container } from 'react-bootstrap';
import BuyHardList from '../components/BuyHardList.js';
import Header from '../components/Header.js';
import "../css/css.js"


const BuyHard = observer(() => {
        return (
            <Container id='he'>
                
               <BuyHardList/>
            </Container>
        );
    
});

export default BuyHard;