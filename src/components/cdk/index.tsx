import React from "react";

interface CdkProps {
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => any;
    className?: string;
    top?: number;
    left?: number;
    transformX?: number;
    transformY?: number;
    hidden?: boolean;
}

type CdkState = Readonly<{
    hidden: boolean;
}>;

class Cdk extends React.PureComponent<CdkProps, CdkState>{
    constructor(props: CdkProps) {
        super(props);
    }

    onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        let { onClick } = this.props;

        if (onClick) {
            onClick(ev);
        }
    };

    render(): React.ReactNode {
        const { children, className, top, left, transformX, transformY, hidden } = this.props;
        return (
            <div
                className="cdk-overlay-container"
                onClick={this.onClick}
                style={{
                    display: `${hidden ? "none" : "block"}`
                }}
            >
                <div className="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"></div>
                <div className="cdk-overlay-connected-position-bounding-box">
                    <div
                        className={`cdk-overlay-panel ${className ? className : ""}`}
                        style={
                            {
                                top,
                                left,
                                transform: `translateX(${transformX}px) translateY(${transformY}px)`
                            }
                        }
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

let name = function () {
    return (
        <div className="cdk-overlay-container">
            <div className="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"></div>
            <div className="cdk-overlay-connected-position-bounding-box">
                <div className="cdk-overlay-panel">

                </div>
            </div>
        </div>
    );
}

export { Cdk };