import { Outlet } from "react-router-dom"

import { AppShell } from '../AppShell/AppShell'

import { Home, LenguajeMusical, Armonia, Modos, Intervalos, Error } from '../../pages'

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
                title: "Armonía",
                children: [
                    {
                        path: '',
                        index: true,
                        element: <Armonia />,
                        title: "Armonía",
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



