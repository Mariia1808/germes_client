import React from 'react';
import { observer } from 'mobx-react-lite';
import "../css/css.js"
import VdsCard from '../components/VdsCard.js';
import { Container } from 'react-bootstrap';

const Vds = observer(() => {
        return (
            <Container id='he'>
            <div className="proxy_vds">
                <VdsCard/>
            </div>
            </Container>
        );
    
});

export default Vds;