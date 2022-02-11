import { LOGIN_ROUTE, REGISTRATION_ROUTE } from './utils/consts';
import Auth from './pages/Auth';
import Registration from './pages/Registration';

export const authRoutes = [
        
]

export const publicRoutes = [
   
    {
        path:REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path:LOGIN_ROUTE,
        Component: Auth
    }
]