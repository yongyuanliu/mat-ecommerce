import React from "react";
import { Chip } from "../../components/chip";
import Ripples from "../../components/ripple";
import "./product-filter.css";

function Useless() {
    return (
        <div className="mat-form-field mat-form-field-has-label mat-form-field-type-mat-select">
            <div className="mat-form-field-wrapper">
                <div className="mat-form-field-flex">
                    <div className="mat-form-field-outline">
                        <div className="mat-form-field-outline-start"></div>
                        <div className="mat-form-field-outline-gap"></div>
                        <div className="mat-form-field-outline-end"></div>
                    </div>
                    <div className="mat-form-field-outline mat-form-field-outline-thick">
                        <div className="mat-form-field-outline-start"></div>
                        <div className="mat-form-field-outline-gap"></div>
                        <div className="mat-form-field-outline-end"></div>
                    </div>
                    <div className="mat-form-field-infix">
                        <div id="mat-select-01" className="mat-select">
                            <div className="mat-select-trigger">
                                <div className="mat-select-value">
                                    <span className="mat-select-value-text"><span>Useless first</span></span>
                                </div>
                                <div className="mat-select-arrow-wrapper">
                                    <div className="mat-select-arrow"></div>
                                </div>
                            </div>
                        </div>
                        <span className="mat-form-field-label-wrapper">
                            <label className="mat-form-field-label" htmlFor="mat-select-01" aria-owns="mat-select-01">
                                <span>Sort by</span>
                            </label>
                        </span>
                    </div>
                </div>
                <div className="mat-form-field-subscript-wrapper">
                    <div className="mat-form-field-hint-wrapper">
                        <div className="mat-form-field-hint-spacer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Condition() {
    return (
        <div className="mat-form-field mat-form-field-type-mat-select mat-form-field-should-float">
            <div className="mat-form-field-wrapper">
                <div className="mat-form-field-flex">
                    <div className="mat-form-field-outline">
                        <div className="mat-form-field-outline-start"></div>
                        <div className="mat-form-field-outline-gap"></div>
                        <div className="mat-form-field-outline-end"></div>
                    </div>
                    <div className="mat-form-field-outline mat-form-field-outline-thick">
                        <div className="mat-form-field-outline-start"></div>
                        <div className="mat-form-field-outline-gap"></div>
                        <div className="mat-form-field-outline-end"></div>
                    </div>
                    <div className="mat-form-field-infix">
                        <div id="mat-select-01" className="mat-select">
                            <div className="mat-select-trigger">
                                <div className="mat-select-value">
                                    <span className="mat-select-value-text"><span className="mat-select-placeholder">Condition</span></span>
                                </div>
                                <div className="mat-select-arrow-wrapper">
                                    <div className="mat-select-arrow"></div>
                                </div>
                            </div>
                        </div>
                        <span className="mat-form-field-label-wrapper"></span>
                    </div>
                </div>
                <div className="mat-form-field-subscript-wrapper">
                    <div className="mat-form-field-hint-wrapper">
                        <div className="mat-form-field-hint-spacer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Delivery() {
    return (
        <div className="mat-form-field mat-form-field-type-mat-select">
            <div className="mat-form-field-wrapper">
                <div className="mat-form-field-flex">
                    <div className="mat-form-field-outline">
                        <div className="mat-form-field-outline-start"></div>
                        <div className="mat-form-field-outline-gap"></div>
                        <div className="mat-form-field-outline-end"></div>
                    </div>
                    <div className="mat-form-field-outline mat-form-field-outline-thick">
                        <div className="mat-form-field-outline-start"></div>
                        <div className="mat-form-field-outline-gap"></div>
                        <div className="mat-form-field-outline-end"></div>
                    </div>
                    <div className="mat-form-field-infix">
                        <div id="mat-select-03" className="mat-select">
                            <div className="mat-select-trigger">
                                <div className="mat-select-value">
                                    <span className="mat-select-value-text"><span className="mat-select-placeholder">Delivery options</span></span>
                                </div>
                                <div className="mat-select-arrow-wrapper">
                                    <div className="mat-select-arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mat-form-field-subscript-wrapper">
                    <div className="mat-form-field-hint-wrapper">
                        <div className="mat-form-field-hint-spacer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FiltersTabWrapper() {
    return (
        <div className="filters__tabs-wrapper">
            <div className="mat-tab-group">
                <div className="mat-tab-header">
                    <div className="mat-tab-header-pagination mat-tab-header-pagination-before">
                        <div className="mat-tab-header-pagination-chevron"></div>
                    </div>
                    <div className="mat-tab-label-container">
                        <div className="mat-tab-list">
                            <div className="mat-tab-labels">
                                <div className="mat-tab-label">
                                    <div className="mat-tab-label-content">
                                        <span>Show all</span>
                                    </div>
                                </div>
                                <div className="mat-tab-label">
                                    <div className="mat-tab-label-content">
                                        <span>Auction</span>
                                    </div>
                                </div>
                                <div className="mat-tab-label">
                                    <div className="mat-tab-label-content">
                                        <span>Buy now</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mat-ink-bar"></div>
                        </div>
                    </div>
                    <div className="mat-tab-header-pagination mat-tab-header-pagination-after">
                        <div className="mat-tab-header-pagination-chevron"></div>
                    </div>
                </div>
                <div className="mat-tab-body-wrapper"></div>
            </div>
            <div className="mat-tab-group mat-segmented-2-tab-group">
                <div className="mat-tab-header">
                    <div className="mat-tab-header-pagination mat-tab-header-pagination-before">
                        <div className="mat-tab-header-pagination-chevron"></div>
                    </div>
                    <div className="mat-tab-label-container">
                        <div className="mat-tab-list">
                            <div className="mat-tab-labels">
                                <div className="mat-tab-label">
                                    <div className="mat-tab-label-content">
                                        <i className="set-icon">
                                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{
                                                width: "20px",
                                                height: "100%"
                                            }}><path d="M199.798545 665.537905 10.1271 665.537905 10.1271 856.343991c0 3.38699 2.257993 5.644983 5.644983 5.644983l184.032106 0L199.80419 665.537905z" p-id="1349"></path><path d="M252.296891 665.537905 252.296891 861.988975l755.863286 0c3.38699 0 5.644983-2.257993 5.644983-5.644983l0-190.806086L252.296891 665.537905z" p-id="1350"></path><path d="M252.296891 417.158633l761.508269 0 0 195.880926-761.508269 0 0-195.880926Z" p-id="1351"></path><path d="M10.1271 417.158633l189.677089 0 0 195.880926-189.677089 0 0-195.880926Z" p-id="1352"></path><path d="M199.798545 172.171996 15.772084 172.171996c-3.38699 0-5.644983 2.252348-5.644983 5.644983l0 186.848953 189.677089 0L199.80419 172.171996z" p-id="1353" data-spm-anchor-id="a313x.7781069.0.i3" className="selected"></path><path d="M1008.724675 172.171996l-756.427784 0 0 192.493936 761.508269 0L1013.80516 177.816979C1014.369658 174.424344 1011.547166 172.171996 1008.724675 172.171996z" p-id="1354"></path></svg>
                                        </i>
                                    </div>
                                </div>
                                <div className="mat-tab-label">
                                    <div className="mat-tab-label-content">
                                        <i className="set-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{
                                                width: "16px",
                                                height: "100%"
                                            }} viewBox="0 0 16 16">
                                                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z" />
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="mat-ink-bar"></div>
                        </div>
                    </div>
                    <div className="mat-tab-header-pagination mat-tab-header-pagination-after">
                        <div className="mat-tab-header-pagination-chevron"></div>
                    </div>
                </div>
                <div className="mat-tab-body-wrapper"></div>
            </div>
        </div>
    );
}

function FiltersAdditional() {
    return (
        <div className="filters__additional mat-chip-list">
            <div className="mat-chip-list-wrapper">
                <span>Related</span>
                {
                    ["全球购", "50元内", "小猫", "塑料塞", "pucker鞋", "vintage typewriter"].map((text, i) => {
                        return (
                            <Chip key={i.toString()} onClick={
                                (ev) => {
                                    ev.currentTarget.classList.toggle("mat-chip-selected");
                                }
                            }>
                                <Ripples className="mat-ripple-element">{text}</Ripples>
                            </Chip>
                        );
                    })
                }
            </div>
        </div>
    );
}

class ProductFilter extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="filters__wrapper">
                <div className="filters__main">
                    <div className="filters__fields-wrapper">
                        <Useless />
                        <Condition />
                        <Delivery />
                    </div>
                    <FiltersTabWrapper />
                </div>
                <FiltersAdditional />
            </div>
        );
    }
}

export { ProductFilter };