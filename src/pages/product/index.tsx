import React from "react";
import ProductCard from "../../components/product-card";
import { listAll } from "../../controller/product";

import { ProductFilter } from "./filter";

import "./product.css";

class ProductList extends React.Component {
    render(): React.ReactNode {
        return (
            listAll().map(product => {
                return (
                    <ProductCard key={product.id.toString()} product={product}></ProductCard>
                );
            })
        );
    }
}

export default class extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <div className="filters-toggle__wrapper">
                    <button id="show-sidenav-button" className="mat-icon-button">
                        <span className="mat-button-wrapper">
                            <i className="set-icon">
                                <svg version="1.1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img"><path className="set-i-solid set-i-solid-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-solid set-i-solid-path-2" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path><path className="set-i-outline set-i-outline-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-outline set-i-outline-path-2" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                            </i>
                        </span>
                        <div className="mat-ripple mat-ripple-element"></div>
                    </button>
                </div>
                <div className="main-content__container">
                    <ProductFilter />
                    <div className="mat-card-container">
                        <ProductList />
                    </div>
                </div>
            </>
        );
    }
}