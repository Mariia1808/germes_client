import React from 'react';
import { Container } from 'react-bootstrap';
import "../css/css.js"
import VdsCard from '../pages/Vds.js';

const VdsList = () => {
        return (
            <Container>
              <div className="proxy_vds">
                   <VdsCard/>
               </div>
            </Container>
        );
    
};

export default VdsList;