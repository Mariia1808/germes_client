import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import OneStep from "../components/СreateProfile/OneStep.js";
import "../css/css.js"
import { Context } from "../index.js";

const CreateProfil = observer(()=>{
  const {user} = useContext(Context)
    return(
        <Container id="he">
          {user.setIsAuth(true)}
          <OneStep/>
        </Container>
    );
});

export default CreateProfil;