import {observer} from "mobx-react-lite";
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";


const App = observer(() => {
    return (
      <BrowserRouter>
          <div>
          
          <AppRouter />
          
          </div>
      </BrowserRouter>
    );
});

export default App;