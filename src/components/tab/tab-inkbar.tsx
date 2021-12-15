import React from "react";

interface TabInkBarProps {
    left?: number;
    width?: number;
    height?: number;
}

class TabInkBar extends React.PureComponent<TabInkBarProps> {
    render(): React.ReactNode {
        let { left, width, height } = this.props;
        return (
            <div className="mat-ink-bar" style={{ left, width, height }}></div>
        );
    }
}

export { TabInkBar };
export type { TabInkBarProps };