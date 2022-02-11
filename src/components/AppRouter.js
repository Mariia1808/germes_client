import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Auth from '../pages/Auth';
import Finance from '../pages/Finance';
import Panel from '../pages/Panel';
import Profile from '../pages/Profile';
import Registration from '../pages/Registration';
import Password from '../pages/Password';

const AppRouter = () => {
        return (
        <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/forget_password" element={<Password />} />
        </Routes>
        );
    
};

export default AppRouter;