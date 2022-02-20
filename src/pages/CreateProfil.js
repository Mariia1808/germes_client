import { observer } from "mobx-react-lite";
import React from "react";
import { Container } from "react-bootstrap";
import OneStep from "../components/СreateProfile/OneStep.js";
import "../css/css.js"

const CreateProfil = observer(()=>{
    return(
        <Container id="he">
          <OneStep/>
        </Container>
    );
});

export default CreateProfil;