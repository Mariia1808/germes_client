import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import BuyHardList from '../components/BuyHardList.js';
import Header from '../components/Header.js';
import "../css/css.js"
import { Context } from '../index.js';


const BuyHard = observer(() => {
    const {user} = useContext(Context)
        return (
            <Container id='he'>
                {user.setIsAuth(true)}
               <BuyHardList/>
            </Container>
        );
    
});

export default BuyHard;