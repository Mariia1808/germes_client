import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import "../css/css.js"
import VdsCard from '../components/VdsCard.js';
import { Container } from 'react-bootstrap';
import { Context } from '../index.js';

const Vds = observer(() => {
    const {user} = useContext(Context)
        return (
            <Container id='he'>
                {user.setIsAuth(true)}
            <div className="proxy_vds">
                <VdsCard/>
            </div>
            </Container>
        );
    
});

export default Vds;