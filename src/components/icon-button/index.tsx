import React from "react";

import PropTypes from "prop-types";

import Ripples from "../ripple";

export interface IconButtonProps {
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => any;
    hasRipples: boolean;
    className?: string;
}

function getChildrenAndCheckRipples(hasRipples: boolean, children: React.ReactNode) {
    if (hasRipples) {
        return (
            <Ripples className="mat-ripple-element">
                {children}
            </Ripples>
        );
    }
    return children;
}

export const IconButton = (defaultProps: Partial<IconButtonProps> = {}) =>
    class extends React.PureComponent<IconButtonProps>{
        constructor(props: IconButtonProps) {
            super(props);
        }

        static propTypes = {
            onClick: PropTypes.func,
            hasRipples: PropTypes.bool,
            className: PropTypes.string
        };

        static defaultProps = {
            onclick: () => { },
            className: "",
            hasRipples: false,
            ...defaultProps
        }

        render(): React.ReactNode {
            const { children, onClick, className, hasRipples, ...props } = this.props;
            return (
                <button
                    {...props}
                    onClick={onClick}
                    className={`mat-icon-button ${className}`}>
                    {getChildrenAndCheckRipples(hasRipples, children)}
                </button>
            );
        }
    }