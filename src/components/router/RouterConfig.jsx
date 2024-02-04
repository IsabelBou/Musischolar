import AppShell from '../AppShell/AppShell'

import Home from '../../pages/Home'
import TestContent from "../../pages/TestContent"
import TestError from "../../pages/TestError"
import LenguajeMusical from "../../pages/Lenguaje Musical/LenguajeMusical"
import Armonia from '../../pages/Armonia/Armonia'
import Modos from '../../pages/Lenguaje Musical/Modos'

import { Outlet } from "react-router-dom"


export const ROUTES = [
    {
        path: "/",
        element: <AppShell />,
        children: [
            {
                path: '',
                index: true,
                element: <Home />,
                title: "Home",
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
                        path: "Modos",
                        element: <Modos />,
                        title: "Modos",
                    }
                ]
            },
            {
                path: "Armonia",
                element: <Outlet />,
                title: "Armonia",
                children: [
                    {
                        path: '',
                        index: true,
                        element: <Armonia />,
                        title: "Armonia",
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



