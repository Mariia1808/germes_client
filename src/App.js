import {observer} from "mobx-react-lite";
import React, { useContext } from "react";
import {BrowserRouter} from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";


const App = observer(() => {
  const {user} = useContext(Context)
    return (
      <BrowserRouter>
      {(user.isAuth)?
      <>
        <Header/>
        <AppRouter />
      </>
      :
        <AppRouter />}
      </BrowserRouter>
    );
});

export default App;