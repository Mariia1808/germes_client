import { ACTS_ROUTE, BUYBOT_ROUTE, BUYHAND_ROUTE, CREATEPROFIL_ROUTE, FINANCE_ROUTE, FIVESTEP_ROUTE, FOURSTEP_ROUTE, IMG_ROUTE, LOGIN_ROUTE, ONESTEP_ROUTE, PANEL_ROUTE, PARTNERSHIP_ROUTE, PASSWORD_ROUTE, PROFILE_ROUTE, PROXY_ROUTE, REGISTRATION_ROUTE, REVIEWS_ROUTE, SALES_ROUTE, SEVENSTEP_ROUTE, SIXSTEP_ROUTE, STATS_ROUTE, THREESTEP_ROUTE, TWOSTEP_ROUTE, VDS_ROUTE } from './utils/consts';
import Auth from './pages/Auth';
import Registration from './pages/Registration';
import Password from './pages/Password';
import Panel from './pages/Panel';
import Profile from './pages/Profile';
import Finance from './pages/Finance';
import Reviews from './pages/Reviews';
import Acts from './pages/Acts';
import BuyBot from './pages/BuyBot';
import BuyHard from './pages/BuyHard';
import PartnerShip from './pages/PartnerShip';
import Vds from './pages/Vds';
import Sales from './pages/Sales';
import Proxy from './pages/Proxy';
import Stats from './pages/Stats';
import Img from './pages/Img';
import CreateProfil from './pages/CreateProfil';
import OneStep from './components/OneStep';
import TwoStep from './components/TwoStep';
import ThreeStep from './components/ThreeStep';
import FourStep from './components/FourStep';
import FiveStep from './components/FiveStep';
import SixStep from './components/SixStep';
import SevenStep from './components/SevenStep';

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
    },
    {
        path:PASSWORD_ROUTE,
        Component: Password
    },
    {
        path:PANEL_ROUTE,
        Component: Panel
    },
    {
        path:PROFILE_ROUTE,
        Component: Profile
    },
    {
        path:FINANCE_ROUTE,
        Component: Finance
    },
    {
        path:REVIEWS_ROUTE,
        Component: Reviews
    },
    {
        path:ACTS_ROUTE,
        Component: Acts
    },
    {
        path:BUYBOT_ROUTE,
        Component: BuyBot
    },
    {
        path:BUYHAND_ROUTE,
        Component: BuyHard
    },
    {
        path: PARTNERSHIP_ROUTE,
        Component: PartnerShip
    },
    {
        path: VDS_ROUTE,
        Component: Vds
    },
    {
        path: SALES_ROUTE,
        Component: Sales
    },
    {
        path: PROXY_ROUTE,
        Component: Proxy
    },
    {
        path: STATS_ROUTE,
        Component: Stats
    },
    {
        path: IMG_ROUTE,
        Component: Img
    },
    {
        path: CREATEPROFIL_ROUTE,
        Component: CreateProfil
    },
    {
        path: ONESTEP_ROUTE,
        Component: OneStep
    },
    {
        path: TWOSTEP_ROUTE,
        Component: TwoStep
    },
    {
        path: THREESTEP_ROUTE,
        Component: ThreeStep
    },
    {
        path: FOURSTEP_ROUTE,
        Component: FourStep
    },
    {
        path: FIVESTEP_ROUTE,
        Component: FiveStep
    },
    {
        path: SIXSTEP_ROUTE,
        Component: SixStep
    },
    {
        path: SEVENSTEP_ROUTE,
        Component: SevenStep
    }
]