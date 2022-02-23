import { observer } from "mobx-react-lite";
import React from "react";
import {Routes , Route, Navigate} from "react-router-dom";
import { publicRoutes } from "../routers";
import { LOGIN_ROUTE } from "../utils/consts";


const AppRouter = observer(() => {
        return (
        <Routes>
            {
                publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
                )
            }
            <Route
                path="*"
                element={<Navigate to={LOGIN_ROUTE} />}
            /> 
            <Route
                path="/"
                element={<Navigate to={LOGIN_ROUTE} />}
            /> 
        </Routes>
        );
    
});

export default AppRouter;