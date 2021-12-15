import React from "react";

interface TabLabelProps {
    labelId: number;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>, labelId: number) => any;
    active?: boolean;
}

class TabLabel extends React.PureComponent<TabLabelProps> {
    constructor(props: TabLabelProps) {
        super(props);
    }

    onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
        const { onClick, labelId } = this.props;
        if (onClick) {
            onClick(ev, labelId);
        }
    }

    render(): React.ReactNode {
        const { children, active } = this.props;
        return (
            <div
                className={`mat-tab-label ${active ? "mat-tab-label-active" : ""}`}
                onClick={this.onClick}
            >
                <div className="mat-tab-label-content">
                    {children}
                </div>
            </div>
        );
    }
}

export { TabLabel };
export type { TabLabelProps }