import React from "react";

import { ProductFilter } from "./filter";

class ProductList extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="mat-card-container">
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box black">gradient-black</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box blue-indigo">gradient-blue-indigo</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box green-teal">gradient-green-teal</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box red-pink">gradient-red-pink</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box yellow-orange">yellow-orange</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-black">light-gradient-black</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-blue-indigo">light-gradient-blue-indigo</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-green-teal">light-gradient-green-teal</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-red-pink">light-gradient-red-pink</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-yellow-orange">light-yellow-orange</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box reverse-black">reverse-gradient-black</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box reverse-blue-indigo">reverse-gradient-blue-indigo</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box reverse-green-teal">reverse-gradient-green-teal</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box reverse-red-pink">reverse-gradient-red-pink</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box reverse-yellow-orange">reverse-yellow-orange</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-reverse-black">light-reverse-gradient-black</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-reverse-blue-indigo">light-reverse-gradient-blue-indigo</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-reverse-green-teal">light-reverse-gradient-green-teal</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-reverse-red-pink">light-reverse-gradient-red-pink</div>
                    </div>
                </div>
                <div className="mat-card">
                    <div className="mat-card-content">
                        <div className="gradient-box light-reverse-yellow-orange">light-reverse-yellow-orange</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Products extends React.Component {
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
                    <ProductList />
                </div>
            </>
        );
    }
}