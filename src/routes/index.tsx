import React from "react";
import { Navigate } from "react-router-dom";
import Login from '@/views/login/Login';
import pageEdit from "./modules/pageEdit";
const commentRoutes = [pageEdit];
import RequireAuth from './RequireAuth'

export default [
    {
        path: '/',
        element: <Navigate to='/login' />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/login1',
        element:
            < RequireAuth >
                <Login />
            </RequireAuth>

    },
    ...commentRoutes,
]