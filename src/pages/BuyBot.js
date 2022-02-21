import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import BuyBotList from '../components/BuyBotList.js';
import Header from '../components/Header.js';
import { observer } from 'mobx-react-lite';
import "../css/css.js"
import { Context } from '../index.js';

const BuyBot = observer(() => {
    const {user} = useContext(Context)
        return (
            <Container id='he'>
                {user.setIsAuth(true)}
                <BuyBotList/>
            </Container>
        );
    
});

export default BuyBot;