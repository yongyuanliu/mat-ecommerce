import React from "react";
import { RouteObject } from "react-router-dom";
import Layout from "./pages/layout";
import NoMatch from "./pages/no-match";

let routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "*", element: <NoMatch /> }
        ]
    }
];

export { routes };