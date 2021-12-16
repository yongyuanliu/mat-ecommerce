import React from "react";

interface FormSelectProps {
    htmlId?: string;
    placeHolder?: string;
    sortHelper?: string;
    className?: string;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => any;
}

class FormSelect extends React.PureComponent<FormSelectProps> {

    onMouseDown = (ev: React.MouseEvent<HTMLDivElement>) => {
        ev.currentTarget.classList.add("mat-focused");
    };

    onMouseUp = (ev: React.MouseEvent<HTMLDivElement>) => {
        ev.currentTarget.classList.remove("mat-focused");
    }

    onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        let { onClick } = this.props;
        if (onClick) {
            onClick(ev);
        }
    }

    render(): React.ReactNode {
        const { htmlId, placeHolder, sortHelper, className } = this.props;
        return (
            <div
                className={`mat-form-field ${sortHelper ? "mat-form-field-has-label" : ""} mat-form-field-type-mat-select ${className ? className : ""}`}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onClick={this.onClick}
            >
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
                            <div id={htmlId} className="mat-select">
                                <div className="mat-select-trigger">
                                    <div className="mat-select-value">
                                        <span className="mat-select-value-text"><span className="mat-select-placeholder">{placeHolder}</span></span>
                                    </div>
                                    <div className="mat-select-arrow-wrapper">
                                        <div className="mat-select-arrow"></div>
                                    </div>
                                </div>
                            </div>
                            {
                                sortHelper
                                    ?
                                    <span className="mat-form-field-label-wrapper">
                                        <label className="mat-form-field-label" htmlFor={htmlId} aria-owns={htmlId}>
                                            <span>{sortHelper}</span>
                                        </label>
                                    </span>
                                    : ""
                            }
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
}

export default FormSelect;