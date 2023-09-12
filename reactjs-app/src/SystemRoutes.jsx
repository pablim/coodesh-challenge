import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import TemplatePage from './views/TemplatePage';

import { paths } from "./Paths";

const getRoutes = (links) => {
    return links.map(link => {
        return (
            <Route key={link.path} path={link.path} element={link.element} />
        )
    })
}

const SystemRoutes = () => {
    return (  
        <Routes>
            <Route path='/' element={<TemplatePage />} >
                {getRoutes(paths)}
            </Route>
        </Routes>
    )
}

export default SystemRoutes;