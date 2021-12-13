import React from "react";

import "./appbar.css";

export default function AppBar() {
    return (
        <header className="appbar-container">
            <div className="appbar-logo">
                <div className="logo">E</div>Shopping
            </div>
            <div className="appbar-nav">
                <nav className="mat-tab-nav-bar mat-tab-header">
                    <div className="mat-tab-link-container">
                        <div className="mat-tab-list">
                            <div className="mat-tab-links">
                                <a className="mat-tab-link" href="#"><span>新品</span></a>
                                <a className="mat-tab-link" href="#"><span>衣服</span></a>
                                <a className="mat-tab-link" href="#"><span>鞋子</span></a>
                                <a className="mat-tab-link" href="#"><span>配饰</span></a>
                                <a className="mat-tab-link" href="#"><span>更多</span></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="appbar-actions">
                <div className="appbar-search mat-form-field">
                    <div className="mat-form-field-wrapper">
                        <div className="mat-form-field-flex">
                            <div className="mat-form-field-prefix">
                                <i className="set-icon">
                                    <svg version="1.1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img"><path className="set-i-solid set-i-solid-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-solid set-i-solid-path-2" d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path className="set-i-outline set-i-outline-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-outline set-i-outline-path-2" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                                </i>
                            </div>
                            <div className="mat-form-field-infix">
                                <input id="mat-form-field-infix-search" className="mat-input-element" aria-invalid="false" aria-required="false" placeholder="搜索" type="search" autoComplete="" />
                                <span className="mat-form-field-label-wrapper">
                                    <label className="mat-form-field-label" htmlFor="mat-form-field-infix-search" aria-owns="mat-form-field-infix-search">
                                        <span>搜索</span>
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="mat-icon-button mat-bage">
                    <span className="mat-button-wrapper">
                        <i className="set-icon">
                            <svg version="1.1" className="has-solid " viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img"><path className="set-i-solid set-i-solid-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-solid set-i-solid-path-2" d="M12 9c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1zm-5 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.38-6.13c.27-.48.09-1.09-.39-1.36-.48-.26-1.09-.09-1.35.39L15.55 11H8.53L4.54 2.57c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2z"></path><path className="set-i-outline set-i-outline-path-1" fill="none" d="M0 0h24v24H0V0z"></path><path className="set-i-outline set-i-outline-path-2" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"></path></svg>
                        </i>
                    </span>
                    <span className="mat-bage-content mat-bage-active">3</span>
                </button>
                <div className="appbar-avatar appbar-avatar-default"></div>
            </div>
        </header>
    );
}