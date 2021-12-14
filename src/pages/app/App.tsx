import React from "react";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

import "../../assets/css/variable.css";
import "../../assets/css/element.css";
import "./app.css";
import NoMatch from "../no-match";
import AppBar from "../appbar";
import Categories from "../categories";
import ProductPage from "../product";

function App() {
    let routes: RouteObject[] = [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <ProductPage />
                },
                {
                    path: "/tab/product/*",
                    element: <ProductPage />
                },
                {
                    path: "/nav/product/*",
                    element: <ProductPage />
                },
                { path: "*", element: <NoMatch /> }
            ]
        }
    ];
    let routesElement = useRoutes(routes);
    return (
        <div className="page-wrapper">
            <div className="main-container">
                <AppBar />
                {routesElement}
            </div>
        </div>
    );
}

class Layout extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="mat-drawer-container mat-sidenav-container">
                <div className="mat-drawer-backdrop"></div>
                <div id="mat-sidenav" className="mat-sidenav mat-drawer">
                    <Categories />
                </div>
                <div className="mat-sidenav-content">
                    <div className="content-container">
                        <Outlet />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;