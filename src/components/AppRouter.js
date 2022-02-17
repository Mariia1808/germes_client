import React from 'react';
import {Routes , Route, Navigate} from 'react-router-dom';
import { publicRoutes } from '../routers';
import { PANEL_ROUTE } from '../utils/consts';


const AppRouter = () => {
        return (
        <Routes>
            {
                publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
                )
            }
            <Route
                path="*"
                element={<Navigate to={PANEL_ROUTE} />}
            /> 
        </Routes>
        );
    
};

export default AppRouter;