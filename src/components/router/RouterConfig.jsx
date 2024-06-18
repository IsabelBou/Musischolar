import { Outlet } from "react-router-dom"

import { AppShell } from '../AppShell/AppShell'

import { Home, LenguajeMusical, Armonia, Modos, Intervalos } from '../../pages'

import { TestContent, Error } from '../../pages'

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
                    },
                    {
                        path: "Intervalos",
                        element: <Intervalos />,
                        title: "Intervalos",
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
                element: <Error />,
                title: "error"
            }
        ]
    }
]



