import React, { useContext, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import ActsList from '../components/ActsList.js';
import Header from '../components/Header.js';
import "../css/css.js"
import { Context } from '../index.js';


const Acts = () => {
    const {user} = useContext(Context)
        return (  
            <Card className="content_wall" id="con3">
                {user.setIsAuth(true)}
            <ActsList/>
        </Card>
        );
    
};

export default Acts;