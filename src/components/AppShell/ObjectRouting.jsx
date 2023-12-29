import { useRoutes } from "react-router-dom";

import Layout from "./Layout";
import TestContent from "../../routes/TestContent";
import TestError from "../../routes/TestError";
import TestHome from "../../routes/TestHome";

function Routing() {

    let routeObjects = [
        {
        path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <TestHome />, index: true, },
                { path: "/content", element: <TestContent /> },
                { path: "*", element: <TestError /> },
            ],
        },
    ];
    
    // The useRoutes() hook allows you to define your routes as JavaScript objects instead of <Routes> and <Route> elements.
    let element = useRoutes(routeObjects)

    return(
        <div> { element } </div>
    )
}

export default Routing;
