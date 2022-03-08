import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import "../css/css.js"
import { Container } from 'react-bootstrap';
import { Context } from '../index.js';
import VdsList from '../components/VdsList.js';

const Vds = observer(() => {
    const {user} = useContext(Context)
        return (
            <Container id='he'>
                {user.setIsAuth(true)}
            <div className="proxy_vds">
                <VdsList/>
            </div>
            </Container>
        );
    
});

export default Vds;