import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import "../css/css.js"
import { Container, Card } from 'react-bootstrap';
import { Context } from '../index.js';
import VdsList from '../components/VdsList.js';

const Vds = observer(() => {
    const {user} = useContext(Context)
        return (
            <Card className="content_wall" id="con3">
                {user.setIsAuth(true)}
            <VdsList/>
        </Card>
        );
    
});

export default Vds;