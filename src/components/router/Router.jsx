//import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Route } from 'react-router-dom'
import { ROUTES } from './RouterConfig';
import TestHome from '../../pages/TestHome';
import AppShell from '../AppShell/AppShell'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

//const router = createBrowserRouter(createRoutesFromElements( <Route path="/"
//https://reactrouter.com/en/main/utils/create-routes-from-elements
//https://github.com/remix-run/react-router/issues/10764#issuecomment-1668146560
//https://codesandbox.io/p/sandbox/wonderful-tdd-wqt88y?file=%2Fsrc%2Findex.js%3A45%2C37


const routing = () => {

    // Maps listed ROUTES
    const pageRoutes = ROUTES.map(({ path, title, element }) => {
        return <Route key = { title } path = { `${ path }` } element = { element } />; 
    });
    
    // Returns ROUTES list nested inside AppShell
    return (
            <Route path="/" element={<AppShell />}>
                <Route index element={<TestHome />} />
                { pageRoutes } 
            </Route>
    );
};

// Used as param in RouterProvider inside App
const router = createBrowserRouter(createRoutesFromElements(routing()));

export default router;