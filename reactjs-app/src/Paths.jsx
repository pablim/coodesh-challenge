import React from "react";

import Home from "./views/Home"
import Consolidated from './views/Consolidated';
import Login from './views/Login';

export const paths = [
    { path: '/home', element: <Home />, label: 'Send sales file' },
    { path: '/consolidated', element: <Consolidated />, label: 'Consolidated' },
    { path: '/', element: <Login />, label: 'Login' }
]