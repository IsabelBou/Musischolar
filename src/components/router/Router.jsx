import { Route } from 'react-router-dom'
import { ROUTES } from './RouterConfig';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// index routes must have an extra parameter
const isIndex = (index) => {
    if(index) return "index"
    else return null
}

// Recursively builds nested routes from ROUTES file
const renderRoutes = (ROUTES) => {
    return ROUTES.map(({ path, title, element, index, children = [] }) => {
        return (
            <Route key = { title } {...isIndex(index)} path = { `${ path }` } element = { element }>
                {children.length > 0 && <Route> { renderRoutes(children) } </Route>}
            </Route>
        );
    });
};

// Creates the router
const Router = 
    createBrowserRouter(
        createRoutesFromElements(
            renderRoutes(ROUTES)), {
            basename: "/Musischolar/"
        });

export default Router;