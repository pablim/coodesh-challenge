import React from "react";

import SendFile from "./views/SendFile"
import Consolidated from './views/Consolidated';
import Login from './views/Login';

export const paths = [
    { path: '/sendfile', element: <SendFile />, label: 'Send sales file' },
    { path: '/consolidated', element: <Consolidated />, label: 'Consolidated' },
    { path: '/', element: <Login />, label: 'Login' }
]