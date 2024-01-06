import { Route } from 'react-router-dom'
import { ROUTES } from './RouterConfig';
import TestHome from '../../pages/TestHome';
import AppShell from '../AppShell/AppShell'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

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