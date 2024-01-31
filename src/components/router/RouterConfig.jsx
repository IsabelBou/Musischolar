import AppShell from '../AppShell/AppShell'

import TestHome from '../../pages/TestHome'
import TestContent from "../../pages/TestContent"
import TestError from "../../pages/TestError"
import LenguajeMusical from "../../pages/LenguajeMusical"

import { Outlet } from "react-router-dom"


export const ROUTES = [
    {
        path: "/",
        element: <AppShell />,
        children: [
            {
                path: '',
                index: true,
                element: <TestHome />,
                title: "Home",
            },
            {
                path: "test",
                element: <TestContent />,
                title: "Test",
            },
            {
                path: "LenguajeMusical",
                element: <Outlet />,
                title: "Lenguaje Musical",
                children: [
                    {
                        path: '',
                        index: true,
                        element: <LenguajeMusical />,
                        title: "Lenguaje Musical",
                    },
                    {
                        path: "Nested",
                        element: <TestContent />,
                        title: "Nesting Test",
                    }
                ]
            },
            {
                path: "*",
                element: <TestError />,
                title: "error"
            }
        ]
    }
]



